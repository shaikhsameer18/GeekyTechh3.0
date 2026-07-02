import { ogResponse, ogSize, ogContentType } from "@/lib/og"

export const alt = "GeekyTechh — We design & build software that ships"
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogResponse({ tag: "Web & Product Development · Mumbai", title: "We design & build software that ships." })
}
