import { Check, Inbox, Calendar, CalendarDays, Plus, User } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-[260px] h-screen bg-white dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-800 flex-col fixed left-0 top-0 hidden md:flex">

            <div className="flex items-center gap-3 p-6 pb-8">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                    <Check size={20} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">TaskFlow</span>
            </div>

            <div className="px-4 space-y-1 flex-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors font-medium">
                    <Inbox size={18} className="text-gray-500" />
                    Inbox
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 bg-blue-500 text-white rounded-lg transition-colors font-medium shadow-sm">
                    <Calendar size={18} className="text-white" />
                    Today
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors font-medium">
                    <CalendarDays size={18} className="text-gray-500" />
                    Upcoming
                </button>

                <div className="pt-8">
                    <div className="flex items-center justify-between px-3 mb-2">
                        <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Projects</span>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="space-y-1">
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors font-medium text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            UI Redesign
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors font-medium text-sm">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            Marketing Campaign
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors font-medium text-sm">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            Mobile App
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-zinc-800">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <User size={18} className="text-gray-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Alex Johnson</span>
                        <span className="text-xs text-gray-500">Pro Member</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
