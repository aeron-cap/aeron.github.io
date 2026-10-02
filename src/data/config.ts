export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://aeron.is-a.dev",
    locale: "en_US",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 100,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "0.375rem",

    light: {
      background: "#F5F6F8",
      foreground: "#111314",
      card: "#FFFFFF",
      cardForeground: "#111314",
      popover: "#FFFFFF",
      popoverForeground: "#111314",
      primary: "#1D4ED8",
      primaryForeground: "#FFFFFF",
      secondary: "#EEF0F3",
      secondaryForeground: "#111314",
      muted: "#EEF0F3",
      mutedForeground: "#5D6572",
      accent: "#E8EEFC",
      accentForeground: "#1D4ED8",
      destructive: "#DC2626",
      border: "#D9DDE4",
      input: "#D9DDE4",
      ring: "#1D4ED8",
    },

    dark: {
      background: "#0A0B0D",
      foreground: "#F5F5F7",
      card: "#111315",
      cardForeground: "#F5F5F7",
      popover: "#111315",
      popoverForeground: "#F5F5F7",
      primary: "#93B4FF",
      primaryForeground: "#0A0B0D",
      secondary: "#1A1B1E",
      secondaryForeground: "#F5F5F7",
      muted: "#1A1B1E",
      mutedForeground: "#A0A6B2",
      accent: "#18243C",
      accentForeground: "#93B4FF",
      destructive: "#EF4444",
      border: "#26272C",
      input: "#26272C",
      ring: "#93B4FF",
    },
  },

} as const;
