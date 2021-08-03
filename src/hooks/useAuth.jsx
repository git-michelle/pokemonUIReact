import React, { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkLocalStorageToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    else return true;
  };

  useEffect(() => {
    if (checkLocalStorageToken()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [checkLocalStorageToken]);
  return isAuth;
};

export default useAuth;
