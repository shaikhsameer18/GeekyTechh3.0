import { ogResponse, ogSize, ogContentType } from "@/lib/og"

export const alt = "Selected work by GeekyTechh"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogResponse({ tag: "Selected Work", title: "Real products, in production." })
}
