import { ogResponse, ogSize, ogContentType } from "@/lib/og"

export const alt = "GeekyTechh services"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogResponse({ tag: "What We Do", title: "Services built to ship." })
}
