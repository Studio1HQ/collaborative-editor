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
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Live Output:</h2>
        <div className="p-2 border rounded bg-gray-50 min-h-[40px]">
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </>
  );
}

const Page = () => {
  return (
    <AuthProvider>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Shared Document</h1>

        <RichTextEditor />
      </main>
    </AuthProvider>
  );
};
export default Page;
