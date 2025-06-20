import React, { useState } from "react";
import AuthProvider from "@/providers/AuthProvider";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import useVeltAuth from "@/hooks/useVeltAuth";

function RichTextEditor() {
  useVeltAuth();

  const defaultValue = `<h1>Welcome to the Collaborative Editor</h1>
  <p>
    This is a <strong>rich text editor</strong> built with React and Next.js. You can use it to write and format your documents in real-time with your team.
  </p>
  <h2>Features</h2>
  <ul>
    <li>Edit text with <b>bold</b>, <i>italic</i>, and <u>underline</u></li>
    <li>Create <a href="https://nextjs.org" target="_blank">links</a> and lists</li>
    <li>Insert <code>inline code</code> and <mark>highlighted text</mark></li>
    <li>Write <blockquote>block quotes</blockquote> and code blocks:</li>
  </ul>
  <pre><code>function helloWorld() {
    console.log("Hello, world!");
  }</code></pre>
  <h3>Example List</h3>
  <ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
  </ol>
  <p>
    Try editing this article, add your own content, or experiment with the formatting options above. This editor supports collaborative editing, so you can work together with others in real-time. Enjoy exploring all the features!
  </p>`;

  const [value, setValue] = useState(defaultValue);

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
