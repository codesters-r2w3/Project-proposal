// ExampleContext.js\
'use client'
import React, { createContext, useContext, useState } from "react";

const ExampleContext = createContext();

//export const useExampleContext = () => useContext(ExampleContext);

export const ExampleProvider = ({ children }) => { // Use a functional component here
  const [exampleProps, setExampleProps] = useState({});
  const [status, setStatus]= useState("Connect Wallet");
  const [address, setAddress] = useState();

  const setProps = (props) => {
    setExampleProps(props);
  };

  return (
    <ExampleContext.Provider value={{ exampleProps, setProps, status, setStatus, address, setAddress }}>
      {children}
    </ExampleContext.Provider>
  );
};
export const useStateContext = () => useContext(ExampleContext);
