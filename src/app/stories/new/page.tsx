"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createStory } from "@/services/storyService";

export default function NewStoryPage() {
    const router = useRouter();
    const [authorName, setAuthorName] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await createStory({ authorName, content });
        router.push("/stories");
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-8">Add a Story</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                    <label className="block text-sm font-medium mb-1">Author Name</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                        className="w-full border border-[var(--border)] rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Story</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={6}
                        className="w-full border border-[var(--border)] rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[var(--primary)] text-white px-6 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Story"}
                </button>
            </form>
        </div>
    );
}
