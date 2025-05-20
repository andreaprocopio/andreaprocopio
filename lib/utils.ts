import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const containerSpacingClassnames = "my-28 flex flex-col gap-12 md:my-36 scroll-mt-24 px-8"
