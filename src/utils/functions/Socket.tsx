// import { useEffect } from "react";
// import { io } from "socket.io-client";
// import { getToken } from "./TokenManager";

// const BASE_URL = process.env.REACT_APP_PUBLIC_JGS_BASE_URL;
// const NAMESPACE = `/frontend`;

// export const Connectsocket = io(`${BASE_URL}${NAMESPACE}`, {
//   autoConnect: false,
// });

// const { accessToken } = getToken();

// const Socket = () => {
//   useEffect(() => {
//     Connectsocket.connect();

//     Connectsocket.emit(
//       "request_data_all",
//       { accesstoken: accessToken },
//       (data: string) => {
//         console.log(data);
//       }
//     );
//   }, []);
//   return <></>;
// };

// export default Socket;

import React from "react";

function Socket() {
  return <div>Socket</div>;
}

export default Socket;
