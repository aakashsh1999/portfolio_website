import { useEffect, useState } from "react";

export function useLocalTime(timeZone = "Asia/Kolkata") {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(formatted);
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
