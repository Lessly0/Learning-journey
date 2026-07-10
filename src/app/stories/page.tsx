"use client";

import { useEffect, useState } from "react";
import { Story } from "@/types/story";
import { getAllStories, deleteStory } from "@/services/storyService";
import Link from "next/link";

export default function StoriesPage() {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllStories().then((data) => {
            setStories(data);
            setLoading(false);
        });
    }, []);

    const handleDelete = async (id: string) => {
        await deleteStory(id);
        setStories((prev) => prev.filter((s) => s.id !== id));
    };

    if (loading) return <p className="text-center py-20 text-[var(--muted)]">Loading stories...</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-3xl font-bold">All Stories</h1>
                <Link
                    href="/stories/new"
                    className="bg-[var(--primary)] text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                >
                    + Add Story
                </Link>
            </div>

            {stories.length === 0 ? (
                <p className="text-[var(--muted)] text-center">No stories yet. Be the first to add one!</p>
            ) : (
                <div className="flex flex-col gap-6">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm"
                        >
                            <p className="text-sm text-[var(--muted)] mb-2">By {story.authorName}</p>
                            <p className="text-[var(--foreground)]">{story.content}</p>
                            <button
                                onClick={() => handleDelete(story.id)}
                                className="mt-4 text-sm text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
