import { useEffect } from "react";
import io from "socket.io-client";
import React from "react";

const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_SOCKET_BASE_URL;

if (!BASE_URL) {
  throw new Error("error");
}

export const Connectsocket = io(BASE_URL, {
  autoConnect: false,
});

const Socket = () => {
  useEffect(() => {
    Connectsocket.connect();

    Connectsocket.on("connect", () => {
      console.log("소켓 연결이 완료되었습니다!");
    });

    return () => {
      if (Connectsocket.connected) {
        Connectsocket.disconnect();
      }
    };
  }, []);

  return (
    <>
      <h3>소켓 연결 테스트</h3>
    </>
  );
};

export default React.memo(Socket);
