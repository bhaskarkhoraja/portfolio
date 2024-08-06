import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/* cn function for organizing class */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
