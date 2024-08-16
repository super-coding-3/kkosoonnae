import { http, HttpResponse } from "msw";

export const loginHandlers = [
  http.post(
    "https://kkosoonnae.store/api/user/customer/login",
    async ({ request }) => {
      const requestBody = await request.json();
      const { loginId, password } = requestBody;

      const validLoginId = "Test";
      const validPassword = "Test1234";

      if (loginId === validLoginId && password === validPassword) {
        return HttpResponse.json({
          data: {
            cstmrNo: 6,
            loginId: "Test",
            nickName: "홍길동",
            token: "mocked-jwt-token",
          },
          message: "로그인에 성공하였습니다. 토큰을 발급합니다.",
        });
      } else {
        return HttpResponse.json({
          error: "이메일 또는 비밀번호가 올바르지 않습니다.",
        });
      }
    }
  ),
];

export default loginHandlers;
