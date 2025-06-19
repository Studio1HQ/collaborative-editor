"use client";
import AuthProvider from "@/providers/AuthProvider";

const Page = () => {
  return (
    <AuthProvider>
      <h1>Editor&apos;s Page</h1>
    </AuthProvider>
  );
};

export default Page;
