"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-2">
        <span className="loading loading-spinner loading-sm text-green-700" />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <Link href={"/profile"}>
            {/* User Avatar */}
            <div className="avatar avatar-online shrink-0">
              <div className="w-10 overflow-hidden rounded-full sm:w-12 md:w-14">
                {user.image ? (
                  <Image
                    alt={user.name || "User avatar"}
                    src={user.image}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-green-100 text-lg font-semibold text-green-800">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* User Name */}
          <h2 className="max-w-32 truncate text-sm font-semibold text-gray-800 sm:max-w-40 md:text-base">
            {user.name || "ব্যবহারকারী"}
          </h2>

          {/* Sign Out */}
          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-sm min-h-9 rounded-xl border-none bg-red-700 px-3 text-xs text-white hover:bg-red-800 sm:btn-md sm:text-sm"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
          <Link
            href="/sign-in"
            className="btn btn-sm border-green-700 px-3 text-green-700 hover:bg-green-50 sm:btn-md sm:px-4"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="btn btn-sm border-green-700 bg-green-700 px-3 text-white hover:bg-green-800 sm:btn-md sm:px-4"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
