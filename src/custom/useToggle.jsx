import { useState } from "react";

function useToggle(value) {
  const [toggleStatus, setToggleStatus] = useState(value);
  const toggler = () => {
    setToggleStatus(value => !value);
  };

  return [toggleStatus, toggler];
}

export default useToggle;
