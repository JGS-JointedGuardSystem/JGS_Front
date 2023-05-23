import React, { useState } from 'react'
import Login from '../components/login/Login';


function LoginPage() {
  const [passwordType, setPasswordType] = useState<string>("password");

  const text = [
    {title: "아이디", name: "id", placeholder: "아이디를 입력해 주세요.", type: "text"},
    {title: "비밀번호", name: "password", placeholder: "비밀번호를 입력해 주세요.", type: "password"}
  ]

  return (
    <div>
      <Login setPasswordType={setPasswordType}/>
    </div>
  )
}

export default LoginPage;