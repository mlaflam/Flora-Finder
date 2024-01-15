import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  // Get initial value from localStorage or default to system preference
  const initialIsDark = localStorage.getItem("colorScheme") === "dark" || systemPrefersDark;

  const [isDark, setIsDark] = useState(initialIsDark);

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    // Update localStorage when isDark changes
    localStorage.setItem("colorScheme", isDark ? "dark" : "light");

    // Update body class
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark: value,
    setIsDark,
  };
}
