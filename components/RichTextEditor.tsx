import React, { useState } from "react";
import dynamic from "next/dynamic";
import useVeltAuth from "@/hooks/useVeltAuth";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  useVeltAuth();

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 h-[calc(100vh-8rem)]">
      <section className="flex-1 md:w-[50%] bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Editor</h2>
        <div className="flex-1 max-h-full overflow-auto">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            style={{ height: "100%" }}
          />
        </div>
      </section>
      <section className="flex-1  md:w-[50%] bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Preview</h2>
        <div className="flex-1 min-h-0 max-h-full overflow-auto max-w-none border-2 p-4 rounded-sm border-gray-200">
          <div
            className="editor-output"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </section>
    </div>
  );
};

export default RichTextEditor;
