import type { APIRoute } from "astro";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DATA } from "@/data/resume";
import { LOGOS, logoId } from "@/components/tech-logos";

// Built once into a static /tech-logos.svg sprite: one <symbol> per tech logo the site actually uses.
// Cards reference it with <use href="/tech-logos.svg#go">, so each logo is downloaded once and cached.
export const prerender = true;

const used = [...new Set([...DATA.projects, ...DATA.work].flatMap((item) => item.technologies))].filter((name) => LOGOS[name]);

function toSymbol(name: string) {
  const id = logoId(name);
  const svg = renderToStaticMarkup(createElement(LOGOS[name]));
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  // Prefix internal ids (gradients, clip paths) so logos sharing an id like "a" don't clash in one file.
  const inner = svg
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>$/, "")
    .replace(/\bid="([^"]+)"/g, `id="${id}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${id}-$1)`)
    .replace(/(xlink:)?href="#([^"]+)"/g, (_, xlink = "", ref) => `${xlink}href="#${id}-${ref}"`);
  return `<symbol id="${id}" viewBox="${viewBox}">${inner}</symbol>`;
}

export const GET: APIRoute = () =>
  new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${used.map(toSymbol).join("")}</svg>`,
    { headers: { "Content-Type": "image/svg+xml" } },
  );
