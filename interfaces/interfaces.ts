import { DetailedHTMLProps, HTMLAttributes, MutableRefObject } from "react"

export type MenuNames = 'hero' | 'about' | 'projects' | 'contact'
export type References = MutableRefObject<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>[]
export interface Icons {
    width?: string
    height?: string
    action?: () => void
    link? : string
    className?: string
}