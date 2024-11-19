/* eslint-disable */
import { useEditor as useTiptapEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


export const useArticleEditor = (content:any) => {
  const editor = useTiptapEditor({
    editable: false,
    editorProps: {
      attributes: {
        class: "",
      },
    },
    content: content || "",
    extensions: [
      StarterKit,
    ],
  });

  const handleHighlight = (ranges:any) => {
    if (!editor) return;

    ranges?.forEach((range:any) => {
      const { startOffset, endOffset } = range;
      const { tr } = editor.state;

      tr.addMark(
        startOffset,
        endOffset,
        editor.state.schema.marks.highlight.create({ color: "#C6F2F1" })
      );
      editor.view.dispatch(tr);
    });
  };

  const createHighlight = (from:any, to:any) => {
    if (!editor) return;

    const { tr } = editor.state;
    tr.addMark(
      from,
      to,
      editor.state.schema.marks.highlight.create({ color: "#C6F2F1" })
    );
    editor.view.dispatch(tr);
  };

  return {
    editor,
    handleHighlight,
    createHighlight,
  };
};
