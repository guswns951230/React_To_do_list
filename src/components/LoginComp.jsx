import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

const LoginComp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <div>
      {/* login이 false일때 login창, true 인사창 */}
      {login ? (
        <h1>{name}님 반갑습니다!</h1>
      ) : (
        // props 값으로 set method 전달
        <LoginFormComp setLogin={setLogin} setName={setName} />
      )}
    </div>
  );
};

export default LoginComp;
