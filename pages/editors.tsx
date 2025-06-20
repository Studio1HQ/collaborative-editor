import React, { useState } from "react";
import AuthProvider from "@/providers/AuthProvider";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import useVeltAuth from "@/hooks/useVeltAuth";

function RichTextEditor() {
  useVeltAuth();

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 h-[calc(100vh-8rem)]">
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Editor</h2>
        <div className="flex-1 max-h-full overflow-auto">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            style={{ height: "100%" }}
          />
        </div>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Preview</h2>
        <div className="flex-1 min-h-0 max-h-full overflow-auto max-w-none border-2 p-4 rounded-sm border-gray-200">
          <div
            className="editor-output"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow">
            Shared Document Editor
          </h1>
          <RichTextEditor />
        </div>
      </main>
    </AuthProvider>
  );
};
export default Page;
