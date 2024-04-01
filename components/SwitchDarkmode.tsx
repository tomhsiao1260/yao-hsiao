import { Switch } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import fuckuhydration from "../utils/fuckuhydration";

export default function SwitchDarkmode() {
  const isDarkMode = fuckuhydration()
    ? JSON.parse(localStorage.getItem("is-dark-mode") || "false")
    : false;

  const [isChecked, setIsChecked] = useState(true);

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
    <div className="absolute top-8 right-8">
      <Switch
        checked={isChecked}
        onCheckedChange={() => {
          setIsChecked(!isChecked);
        }}
        size={"3"}
      />
    </div>
  );
}
