import { useState } from "react";

const useRegister = () => {
  const [visibilePassword, setVisiblePassowrd] = useState({
    password: false,
    passwordConfirmation: false,
  });

  const handleVisiblePassword = (key: "password" | "passwordConfirmation") => {
    setVisiblePassowrd({
      ...visibilePassword,
      [key]: !visibilePassword[key],
    });
  };

  return {
    visibilePassword,
    handleVisiblePassword,
  };
};

export default useRegister;
