import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "theme-toggle amb-button",
        className
      )}
    >
      <SunIcon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <MoonIcon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
