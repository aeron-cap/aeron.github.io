import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";

export default function NavbarIsland({ pathname }: { pathname: string }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider delayDuration={0}>
        <Navbar pathname={pathname} />
      </TooltipProvider>
    </ThemeProvider>
  );
}
