"use client";

import { Todo } from "@/types/todo";
import { useQueryClient } from "@tanstack/react-query";
import { Check } from "lucide-react";

export default function TodoItem({ todo, currentPage }: { todo: Todo; currentPage: number }) {
    const queryClient = useQueryClient();

    const toggleCompleted = () => {
        queryClient.setQueryData(["todos", currentPage], (oldData: Todo[] | undefined) => {
            if (!oldData) return oldData;
            return oldData.map((t) =>
                t.id === todo.id ? { ...t, completed: !t.completed } : t
            );
        });
    };

    const priorityType = todo.id % 3;
    let priorityConfig = { text: "P3-LOW", colors: "bg-gray-100 text-gray-500 dark:bg-zinc-800 dark:text-gray-400" };
    if (priorityType === 1) priorityConfig = { text: "P1-HIGH", colors: "bg-red-50 text-red-500 dark:bg-red-900/20" };
    else if (priorityType === 2) priorityConfig = { text: "P2-MEDIUM", colors: "bg-blue-50 text-blue-500 dark:bg-blue-900/20" };

    return (
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 transition-all">
            <button
                onClick={toggleCompleted}
                className={`w-[22px] h-[22px] rounded-md flex items-center justify-center border-2 transition-colors ${todo.completed
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-200 dark:border-zinc-700 hover:border-blue-400"
                    }`}
            >
                {todo.completed && <Check size={14} strokeWidth={3} className="text-white" />}
            </button>

            <span
                className={`flex-1 text-[15px] font-medium transition-colors ${todo.completed
                    ? "text-gray-400 dark:text-gray-500 line-through"
                    : "text-gray-700 dark:text-gray-200"
                    }`}
            >
                {todo.title}
            </span>

            <div className={`px-2 py-1 text-[10px] font-bold rounded-md ${todo.completed ? 'opacity-50' : ''} ${priorityConfig.colors}`}>
                {priorityConfig.text}
            </div>
        </div>
    );
}
