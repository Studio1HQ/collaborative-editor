import React from "react";
import AuthProvider from "@/providers/AuthProvider";
import RichTextEditor from "@/components/RichTextEditor";
import UserDropdown from "@/components/UserDropdown";

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
