"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formValues = Object.fromEntries(formData.entries()) as {
        name: string;
      };

      await authClient.updateUser({
        ...formValues,
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-40 items-center justify-center">
        <span className="loading loading-spinner loading-md text-green-700" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto w-full max-w-3xl p-4 text-center">
        <p className="text-sm text-gray-600">
          প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-3 py-6 sm:px-5 sm:py-8">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-4">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        <section className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white/75 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="avatar avatar-online shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-green-100 sm:h-14 sm:w-14">
                {user.image ? (
                  <Image
                    alt={user.name || "User avatar"}
                    src={user.image}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-green-800">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                {user.name || "ব্যবহারকারী"}
              </h2>
              <p className="truncate text-xs text-gray-500 sm:text-sm">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-outline btn-error btn-sm self-start rounded-lg sm:self-auto"
          >
            <span>↪</span> সাইন আউট
          </button>
        </section>

        <section className="mt-3 rounded-xl border border-gray-200 bg-white/75 p-4 sm:p-5">
          <h2 className="mb-4 text-sm font-semibold text-gray-900 sm:text-base">
            তথ্য
          </h2>

          <form onSubmit={handleUpdate} className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-gray-700"
              >
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                className="input input-bordered input-sm w-full rounded-lg bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSaving || name.trim() === user.name}
              className="btn btn-sm w-full rounded-lg border-0 bg-green-700 text-white hover:bg-green-800"
            >
              {isSaving ? (
                <span className="loading loading-spinner loading-xs" />
              ) : (
                "আপডেট"
              )}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
