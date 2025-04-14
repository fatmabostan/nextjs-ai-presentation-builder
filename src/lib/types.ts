export type ContentType =
    | 'column'
    | 'resizable-column'
    | 'text'
    | 'image'
    | 'paragraph'
    | 'table'
    | 'code'
    | 'link'
    | 'blank'
    | 'title'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'blockquote'
    | 'numberedList'
    | 'bulletedList'
    | 'imageAndText'
    | 'multiColumn'
    | 'divider'
    | 'calloutBox'
    | 'todoList'
    | 'bulletList'
    | 'codeBlock'
    | 'customButton'
    | 'quote'
    | 'table'
    | 'tableOfContents'
export interface ContentItem {
    id: string,
    type: ContentType,
    name: string,
    content: ContentItem[] | string | string[] | string[][],
    initialRows?: number,
    initialCols?: number,
    restrictToDrop?: boolean,
    columns?: number,
    placeholder?: string,
    className?: string,
    alt?: string,
    callOutType?: 'success' | 'info' | 'warning' | 'question' | 'caution',
    link?: string,
    code?: string,
    language?: string,
    bgColor?: string,
    isTransparent?: boolean
}
export interface Slide {
    id: string,
    slideName: string,
    type: string,
    content: ContentItem,
    slideOrder: number,
    className?: string
}