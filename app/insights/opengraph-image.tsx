import { ogResponse, ogSize, ogContentType } from "@/lib/og"

export const alt = "GeekyTechh Insights"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogResponse({ tag: "Insights", title: "Notes on building better websites." })
}
