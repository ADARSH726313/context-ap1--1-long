import Profile from "./Components/Profile"
import UserContextProvider from "./Content/ContextvalProvider"
import Login from "./Components/Login"



function App() {
 

  return (
    <UserContextProvider>
      <h1 > learning  context api </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
