import axios, { AxiosError } from "axios";
import { getToken, setToken } from "../functions/TokenManager";

const BASE_URL = process.env.JGS_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = getToken();
    //토큰 매니저 함수를 통해 토큰을 가져옵니다.

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } // 헤더에 토큰을 넣어주는 작업입니다.

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
    //에러를 반환해줍니다.
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
    //성공 시에는 그냥 바로 리스폰스(답장) 반환해줍니다.
  },
  async (error) => {
    const {
      config,
      response: { status },
      //status를 리스폰스에서 짚어옵니다.
    } = error;

    if (status === 401 && error.response.data.message === "TokenExpiredError") {
      //리프레시 토큰을 위한 코드입니다.
      //status가 401이고, 메시지가 TokenExpiredError면 토큰 리프레시 합니다.
      const originalRequest = config;
      //원래 요청을 담아둡니다.
      const refreshToken = await getToken().refreshToken;
      //리프레시 토큰을 가져옵니다.
      const { data } = await axios.post(`${BASE_URL}/refersh`, {
        refreshToken: refreshToken,
      });
      //api 명세에 따라서 토큰 리프레시 요청을 보냅니다.

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data;
      setToken(newAccessToken, newRefreshToken);
      //그리고 위에서 받은 data에서 엑세스 토큰과, 리프레시 토큰을 토큰매니저 함수를 통해 저장해줍니다.
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //원래 요청의 헤더에 토큰을 넣어줍니다.
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
