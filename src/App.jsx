import { useState } from 'react';



function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
   <>
   <h1>
    { isLoggedIn
    ? "welcome Ishita"
    : "Please login"

    
}
</h1>
<button onClick={toggleLogin}>
  {
    isLoggedIn
    ? "Logout"
    : "Login"

  }
 </button>
</>
  )
}

export default App
