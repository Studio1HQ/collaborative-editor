import React from "react";
import AuthProvider from "@/providers/AuthProvider";
import RichTextEditor from "@/components/RichTextEditor";
import UserDropdown from "@/components/UserDropdown";
import {
  VeltNotificationsTool,
  VeltCommentTool,
  VeltComments,
  VeltPresence,
  VeltSidebarButton,
  VeltCommentsSidebar,
} from "@veltdev/react";

const Page = () => {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-y-3 gap-x-6 md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-blue-700 drop-shadow">
                Shared Document Editor
              </h1>
              <div className="flex items-center justify-start mb-4">
                <p className="mr-2 font-semibold text-gray-600">Viewers:</p>
                <VeltPresence />
              </div>
            </div>
            <div className="flex justify-end items-center space-x-4">
              <VeltCommentTool />
              <VeltNotificationsTool />
              <VeltSidebarButton />
              <UserDropdown />
            </div>
          </div>
          <RichTextEditor />
        </div>

        <div className="fixed bottom-10 right-10 z-50 space-y-4">
          <VeltCommentsSidebar pageMode={true} />
          <VeltComments />
        </div>
      </main>
    </AuthProvider>
  );
};
export default Page;
