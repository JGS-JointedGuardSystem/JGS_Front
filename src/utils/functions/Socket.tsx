import { useEffect } from "react";
import { io } from "socket.io-client";
import { getToken } from "./TokenManager";

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;

export const Connectsocket = io(`${BASE_URL}/frontend`, {
  autoConnect: false,
});

export const EmbbedSocket = io(`${BASE_URL}`);

console.log(Connectsocket);

const { accessToken } = getToken();

const Socket = () => {
  useEffect(() => {
    Connectsocket.connect();
    Connectsocket.emit("request_data_all", { accesstoken: accessToken });

    EmbbedSocket.on("Alert", ({ name, id, lat, long, type }) => {
      alert(
        `Name: ${name}, ID: ${id}, Latitude: ${lat}, Longitude: ${long}, Type: ${type}`
      );
    });

    return () => {
      Connectsocket.disconnect();
      EmbbedSocket.disconnect();
    };
  }, []);

  return <Socket />;
};

export default Socket;
