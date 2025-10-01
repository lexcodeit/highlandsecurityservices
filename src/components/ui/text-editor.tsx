"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./editor-menu-bar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import type { JSONContent } from "@tiptap/core";
import { ResizableImage } from "tiptap-extension-resizable-image";
import "tiptap-extension-resizable-image/styles.css";

interface Props {
    content: string;
    onChange: (htmlValue: string, jsonValue: JSONContent) => void;
}

const TextEditor = ({ content, onChange }: Props) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-3",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-3",
                    },
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight.configure({
                multicolor: true,
            }),
            ResizableImage.configure({
                defaultHeight: 300,
                defaultWidth: 300,
            }),
        ],
        content,
        editorProps: {
            attributes: {
                class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            const json = editor.getJSON(); // this is JSONContent
            onChange(html, json);
        },
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
        enableCoreExtensions: true,
    });

    return (
        <div>
            {editor ? <EditorMenuBar editor={editor} /> : null}
            <EditorContent editor={editor} />
        </div>
    );
};

export default TextEditor;
