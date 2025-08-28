import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0";
import { useVeltClient } from "@veltdev/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
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

  const { user: auth0User } = useUser();
  const { client } = useVeltClient();

  const commentElement = client.getCommentElement();
  commentElement.allowedElementIds(["editor-output"]);

  // Initialize Velt with current user
  useEffect(() => {
    const veltUser = auth0User
      ? {
          userId: auth0User.sub || "",
          name: auth0User.name || "",
          email: auth0User.email || "",
          photoUrl: auth0User.picture || "",
          organizationId: "collaborative-editor",
          color: "#FF0000",
          textColor: "#FFFFFF",
        }
      : null;

    const initVelt = async () => {
      if (client && veltUser) {
        await client.identify(veltUser);
      }
    };

    initVelt().catch(console.error);
  }, [client, auth0User]);

  // Set document ID
  useEffect(() => {
    if (client) {
      client.setDocument("collaborative-post", {
        documentName: "Welcome to the Collaborative Editor",
      });
    }
  }, [client]);

  return (
    <>
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
              id="editor-output"
              className="editor-output"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        </section>
      </div>
      <style>
        {`
          .ql-tooltip {
            left: 0 !important;
          }
        `}
      </style>
    </>
  );
};

export default RichTextEditor;
