"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "@/lib/api";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import AddTodo from "./AddTodo";
import { Check, Loader2, Plus } from "lucide-react";

export default function TodoList({ page, setPage }: { page: number, setPage: (page: number | ((prev: number) => number)) => void }) {
    const { data, isLoading, isError, isPlaceholderData } = useQuery({
        queryKey: ["todos", page],
        queryFn: () => fetchTodos(page),
        placeholderData: (previousData) => previousData,
    });

    if (isError) {
        return (
            <div className="text-red-500 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-center">
                Failed to load todos. Please try again.
            </div>
        );
    }

    const todayTodos = data ? data.slice(0, Math.ceil(data.length / 2)) : [];
    const laterTodos = data ? data.slice(Math.ceil(data.length / 2)) : [];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        My Tasks
                    </h1>
                    <p className="text-sm font-medium text-gray-400">Stay organized and productive today.</p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                    <Check size={20} className="text-white" strokeWidth={3} />
                </div>
            </div>

            <div className="w-full my-8">

                <AddTodo currentPage={page} />
            </div>

            <div className="min-h-[400px]">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full pt-20">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {todayTodos.length > 0 && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-base font-bold text-gray-900 dark:text-white">Today</h2>
                                    <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">{todayTodos.length}</span>
                                </div>
                                <div className="space-y-3">
                                    {todayTodos.map((todo) => (
                                        <TodoItem key={todo.id} todo={todo} currentPage={page} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {laterTodos.length > 0 && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-base font-bold text-gray-900 dark:text-white">Later</h2>
                                    <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">{laterTodos.length}</span>
                                </div>
                                <div className="space-y-3">
                                    {laterTodos.map((todo) => (
                                        <TodoItem key={todo.id} todo={todo} currentPage={page} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {data?.length === 0 && (
                            <div className="text-center text-gray-500 py-10">
                                No todos found for this page.
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-8">
                <Pagination
                    page={page}
                    setPage={setPage}
                    isPlaceholderData={isPlaceholderData}
                    hasMore={data ? data.length === 10 : true}
                />
            </div>
        </div>
    );
}
