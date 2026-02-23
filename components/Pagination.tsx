"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    page: number;
    setPage: (page: number | ((prev: number) => number)) => void;
    isPlaceholderData: boolean;
    hasMore: boolean;
}

export default function Pagination({ page, setPage, isPlaceholderData, hasMore }: PaginationProps) {
    return (
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200 dark:border-zinc-700">
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700 dark:text-gray-200"
            >
                <ChevronLeft size={16} />
                Previous
            </button>

            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Page {page}
            </span>

            <button
                onClick={() => {
                    if (!isPlaceholderData && hasMore) {
                        setPage((old) => old + 1);
                    }
                }}
                disabled={isPlaceholderData || !hasMore}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700 dark:text-gray-200"
            >
                Next
                <ChevronRight size={16} />
            </button>
        </div>
    );
}
