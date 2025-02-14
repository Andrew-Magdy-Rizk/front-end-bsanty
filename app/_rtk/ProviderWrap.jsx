"use client";

import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import Cookies from "js-cookie";

function ProviderWrap({ children }) {
  const handelUser = () => {
    let auth = Cookies.get("auth");
    if (auth) {
      auth = JSON.parse(auth);
      store.dispatch(
        loginReducer({
          data: auth.data,
          token: auth.token,
        })
      );
    }
  };

  useEffect(() => {
    handelUser();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}

export default ProviderWrap;
