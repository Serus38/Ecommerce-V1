import { type JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface Props {
    content: JSONContent;
}

export const ProductDescription = ({ content }: Props) => {

    const editor = useEditor({
        extensions: [StarterKit],
        content,
    });

    return (
        <div>ProductDescription</div>
    )
}
