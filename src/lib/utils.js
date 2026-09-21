import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) { return twMerge(clsx(inputs)); }
export function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}
export function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}
