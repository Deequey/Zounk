"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const {data: session} = useSession();

    if (session) {
        return (
            <div className="flex flex-col gap-2">
                <p>Zalogowano jako {session.user?.name}</p>
                <button
                    onClick={() => signOut()}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                    Wyloguj
                </button>
            </div>
        );
    }
    return (
        <button
            onClick={() => signIn("spotify")}
            className="px-4 py-2 bg-green-500 text-white rounded"
            >
            Zaloguj przez Spotify
        </button>
    ); 
}