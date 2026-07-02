import { ogResponse, ogSize, ogContentType } from "@/lib/og"

export const alt = "About GeekyTechh"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogResponse({ tag: "About GeekyTechh", title: "We build software that earns its keep." })
}
