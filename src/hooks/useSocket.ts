import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getToken } from "../utils/functions/TokenManager"; 
import { DeviceStateAtomType } from "../models/Main";

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;

export type StatusType = "loading" | "connected" | "disconnected";

export const useSocket = () => {
  const [status, setStatus] = useState<StatusType>("disconnected");
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);

  const socket = io(`${BASE_URL}/frontend`, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });

  useEffect(() => {
    if (status === "connected") {
      return () => disconnect();
    }
  }, [status]);

  const connect = () => {
    if (status === "disconnected") {
      setStatus("loading");
      socket.connect();
      socket.emit("Socket_login", {
        accesstoken: getToken().accessToken,
      });
      socket.emit("request_data_all", {
        accesstoken: getToken().accessToken,
      });
    setStatus("connected");
    }
  };

  const handlealert = (Alert_Data: DeviceStateAtomType) => {
    const { name, id, latitude, longitude, device_type } = Alert_Data;
    console.log(
    `
      장치 이름: ${name}, 
      장치 고유 번호: ${id}, 
      위도: ${latitude}, 
      경도: ${longitude}, 
      장치 타입: ${device_type}
    `
    );
  }
  
  socket.on('Alert', (Alert_Data) => {
    handlealert(Alert_Data);
    setIsOpenAlert(true);
  })

  const disconnect = () => {
    socket.disconnect();
    setStatus("disconnected");
  };

  return { status, connect, disconnect, handlealert, isOpenAlert, setIsOpenAlert };
};