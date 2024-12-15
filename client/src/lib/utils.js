import { clsx } from "clsx"
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function dateformat(date) {
  return dayjs(date).format('DD-MM-YYYY HH:mm');
}

export const capitalizeFirstCharacter = (text) => {
  if (!text) return ""; // Handle empty or undefined input
  return text.charAt(0).toUpperCase() + text.slice(1);
};