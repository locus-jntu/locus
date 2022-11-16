import React, { createContext, useState } from 'react'

export const Token = createContext();
export const setToken = createContext();

function TokenProvider({children}) {
  const [jwtToken, setJwtToken ] = useState("empty");
  return (
     <Token.Provider value={{jwtToken, setJwtToken}}>
          {children}
     </Token.Provider>
  )
}

export default TokenProvider