import { Switch } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

export default function SwitchDarkmode() {
  const [isChecked, setIsChecked] = useState(true);

  // The theme class is already set by the inline script in _document.tsx
  useEffect(() => {
    setIsChecked(document.documentElement.classList.contains("dark"));
  }, []);

  const onCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("is-dark-mode", String(checked));
  };

  return (
    <Switch checked={isChecked} onCheckedChange={onCheckedChange} size={"3"} />
  );
}
