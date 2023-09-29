import { useState } from "react"

const LoginScreen = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogIn = () => {
    // ЛОГИКА ВХОДА
    setLoggedIn(true)
  }

  const handleLogout = () => {
    // ЛОГИКА ВЫХОДА
    setLoggedIn(false)
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>привет</h1>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div>
          <h1>войдите в систему</h1>
          <button onClick={handleLogIn}>Войти</button>
        </div>
      )}
    </div>
  )
}
export default LoginScreen
