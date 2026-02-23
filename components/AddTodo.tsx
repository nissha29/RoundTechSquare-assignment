"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Todo } from "@/types/todo";
import { Plus, Calendar, Flag } from "lucide-react";

export default function AddTodo({ currentPage }: { currentPage: number }) {
    const [title, setTitle] = useState("");
    const queryClient = useQueryClient();

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
            userId: 1,
        };

        queryClient.setQueryData(["todos", currentPage], (oldData: Todo[] | undefined) => {
            if (!oldData) return [newTodo];
            return [newTodo, ...oldData];
        });

        setTitle("");
    };

    return (
        <form onSubmit={handleAdd} className="flex items-center gap-3 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 shadow-sm border border-gray-100 dark:border-zinc-800 transition-shadow hover:shadow-md">
            <Plus size={18} className="text-gray-400" />

            <input
                id="add-todo-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Quick add a task (press enter)"
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-[15px] font-medium placeholder-gray-400 dark:text-white dark:placeholder-gray-500"
            />

            <div className="flex items-center gap-4 text-gray-400">
                <button type="button" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Calendar size={18} />
                </button>
                <button type="button" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Flag size={18} />
                </button>
            </div>

            <button
                type="submit"
                className="flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-sm text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!title.trim()}
            >
                <Plus size={18} />
                Add Task
            </button>
        </form>
    );
}
