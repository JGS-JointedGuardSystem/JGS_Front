import { useEffect } from "react";
import { io } from "socket.io-client";
import { getToken } from "./TokenManager";

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;
const NAMESPACE = `/frontend`;

export const Connectsocket = io(`${BASE_URL}${NAMESPACE}`, {
  autoConnect: false,
});

console.log(Connectsocket);

const { accessToken } = getToken();

const Socket = () => {
  useEffect(() => {
    Connectsocket.connect();
    console.log("connect");

    Connectsocket.emit(
      "request_data_all",
      { accesstoken: accessToken },
      (data: string) => {
        console.log(data);
      }
    );
  }, []);
  return <></>;
};

export default Socket;
