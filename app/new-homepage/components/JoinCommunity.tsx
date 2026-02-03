"use client";

import Link from "next/link";

export function JoinCommunity() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href="https://t.me/+9AtC0z8sS79iZjFl"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center bg-[#3b82f6] text-white px-4 2xl:px-7 py-4 2xl:py-4 rounded-full
                    shadow-lg shadow-blue-500/25
                    transition-all duration-300 ease-out
                    hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/35
                    active:scale-[0.98]"
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="relative z-10 flex-shrink-0 mr-3"
                >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="relative z-10 text-sm 2xl:text-base font-medium">Join our community</span>
            </Link>
        </div>
    );
}

