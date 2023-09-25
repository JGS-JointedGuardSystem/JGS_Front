import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getToken } from "../utils/functions/TokenManager";
// import { DeviceType } from "../models/Main";

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;

type StatusType = "loading" | "connected" | "disconnected";

export const useSocket = () => {
  const [status, setStatus] = useState<StatusType>("disconnected");
  const [data, setData] = useState([]);
  const { accessToken } = getToken();

  const Connectsocket = io(`${BASE_URL}/frontend`, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });

  const EmbbedSocket = io(`${BASE_URL}`, {
    autoConnect: false,
    forceNew: true,
    transports: ["websocket"],
  });

  useEffect(() => {
    if (status === "loading" && data.length > 0) {
      setStatus("connected");
    }
  }, [data]);

  const Connect = () => {
    if (status === "disconnected") {
      setStatus("loading");
      Connectsocket.connect();
      Connectsocket.emit("request_data_all", { accesstoken: accessToken });
    }
  };

  const Disconnect = () => {
    if (status === "connected") {
      Connectsocket.disconnect();
      EmbbedSocket.disconnect();
      setStatus("disconnected");
      setData([]);
    }
  };
  return { data, status, Connect, Disconnect };
};

// EmbbedSocket.on("Alert", ({ name, id, lat, long, type }) => {
//   alert(
//     `Name: ${name}, ID: ${id}, Latitude: ${lat}, Longitude: ${long}, Type: ${type}`
//   );
// });
