import React from "react";

const UserContext = React.createContext() //we can also pass default context value like React.creatContext('Codevolution')

const UserProvider = UserContext.Provider
const USerConsumer = UserContext.Consumer

export { UserProvider, USerConsumer}
export default UserContext