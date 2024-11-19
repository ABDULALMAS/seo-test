import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const ArticleEditor = ({
  content,
  onTextSelection,
  selectedText,
  notes,
  onNoteClick,
  onCreateHighlight,
  onAddNote,
  onChatText,
}: any) => {
  const editor = useEditor({
    editable: false,
    content,
    extensions: [
      StarterKit,

    ],
  });

  return (
    <div className="w-[500px]">
      <EditorContent editor={editor} onMouseUp={onTextSelection} />
    </div>
  );
};
