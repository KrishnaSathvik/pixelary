export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  "https://depikt.app"
).replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
