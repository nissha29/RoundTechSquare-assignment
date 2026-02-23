"use client";

import { useState } from "react";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen py-6 px-4 md:py-10 md:px-12 font-sans selection:bg-blue-500/30">
      <TodoList page={page} setPage={setPage} />
    </div>
  );
}
