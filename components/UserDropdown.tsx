import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const UserDropdown = () => {
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
};

export default UserDropdown;
