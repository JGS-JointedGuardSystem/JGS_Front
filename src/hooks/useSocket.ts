import { useEffect, useState } from "react";
import { getToken } from "../utils/functions/TokenManager"
import { io } from "socket.io-client"

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;

export type statusType = 'loading' | 'connected' | 'disconnected';

export const useSocket = () => {
  const [status, setStatus] = useState<statusType>('disconnected');

  const socket = io(`${BASE_URL}/frontend`, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });

  useEffect(() => {
    return () => disconnect();
  }, [])

  const connect = () => {
    const { accessToken } = getToken();
    if (status === "disconnected") {
      setStatus("loading");
      socket.connect();
      socket.emit("request_data_all", {
        accesstoken: accessToken,
      });
    }
  }

  const disconnect = () => {
    socket.disconnect();
    setStatus('disconnected');
  }

  return { status, connect, disconnect };
}