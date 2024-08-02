import { Switch } from "@radix-ui/themes";
import React, { useEffect, useState, useLayoutEffect } from "react";
import fuckuhydration from "../utils/fuckuhydration";

export default function SwitchDarkmode() {
  const isDarkMode = fuckuhydration()
    ? JSON.parse(localStorage.getItem("is-dark-mode") || "true")
    : true;

  const [isChecked, setIsChecked] = useState(true);

  useLayoutEffect(() => {
    setIsChecked(isDarkMode);
  }, []);

  useEffect(() => {
    if (isChecked) {
      // 黑暗
      document.documentElement.classList.add("dark");
      localStorage.setItem("is-dark-mode", "true");
    } else {
      // 亮色
      document.documentElement.classList.remove("dark");
      localStorage.setItem("is-dark-mode", "false");
    }
  }, [isChecked]);

  return (
    <Switch
      checked={isChecked}
      onCheckedChange={() => {
        setIsChecked(!isChecked);
      }}
      size={"3"}
    />
  );
}
