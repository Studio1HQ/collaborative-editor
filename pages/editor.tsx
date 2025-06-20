import React, { useState } from "react";
import AuthProvider from "@/providers/AuthProvider";
import dynamic from "next/dynamic";
import Link from "next/link";
import useVeltAuth from "@/hooks/useVeltAuth";
import { useUser } from "@auth0/nextjs-auth0";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function UserDropdown() {
  const { user } = useUser();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm text-gray-700 font-medium">
        <span className="font-semibold">{user?.name || user?.email}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <Link
            href="/"
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/auth/logout" className="block">
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Log out
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-blue-700 drop-shadow">
              Shared Document Editor
            </h1>
            <UserDropdown />
          </div>
          <RichTextEditor />
        </div>
      </main>
    </AuthProvider>
  );
};
export default Page;
