"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Video {
    id: string;
    title: string;
    description: string;
}

interface Playlist {
    id: string;
    title: string;
    videos: Video[];
}

const playlists: Playlist[] = [
    {
        id: "1",
        title: "Modme CRM Asoslari",
        videos: [
            {
                id: "Jrfh9UALAQo", // YouTube video ID
                title: "Modme CRM Kirish",
                description: "Platforma haqida umumiy ma'lumot",
            },
            {
                id: "oiwM5fbL_GA",
                title: "Dashboard ishlatish",
                description: "Dashboard elementlari va funksionalligi",
            },
        ],
    },
];

export default function VideoCoursesPage() {
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
        null
    );
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNextVideo = () => {
        if (
            selectedPlaylist &&
            currentVideoIndex < selectedPlaylist.videos.length - 1
        ) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const handlePrevVideo = () => {
        if (selectedPlaylist && currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {!selectedPlaylist ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {playlists.map((playlist) => (
                            <motion.div
                                key={playlist.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <button
                                    onClick={() =>
                                        setSelectedPlaylist(playlist)
                                    }
                                    className="w-full bg-white rounded-xl shadow-lg p-8 text-left transition-all duration-300 hover:shadow-xl"
                                >
                                    <h2 className="text-2xl font-semibold mb-4">
                                        {playlist.title}
                                    </h2>
                                    <p className="text-base text-gray-600 mb-8">
                                        {playlist.videos.length} ta video dars
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-base font-medium text-[#894B00]">
                                            Ko'rish
                                        </span>
                                        <svg
                                            className="w-6 h-6 text-[#894B00]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 12H19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 5L19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Video Content */}
                        <div className="w-full lg:w-3/4">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <button
                                        onClick={() =>
                                            setSelectedPlaylist(null)
                                        }
                                        className="flex items-center text-base text-gray-600 hover:text-gray-900"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 12H5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 19L5 12L12 5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Orqaga
                                    </button>
                                    <h1 className="text-2xl font-bold">
                                        {
                                            selectedPlaylist.videos[
                                                currentVideoIndex
                                            ].title
                                        }
                                    </h1>
                                </div>
                                <div className="aspect-video w-full mb-8">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedPlaylist.videos[currentVideoIndex].id}`}
                                        title={
                                            selectedPlaylist.videos[
                                                currentVideoIndex
                                            ].title
                                        }
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                                <p className="text-base text-gray-600 mb-8">
                                    {
                                        selectedPlaylist.videos[
                                            currentVideoIndex
                                        ].description
                                    }
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={handlePrevVideo}
                                        disabled={currentVideoIndex === 0}
                                        className={`px-6 py-3 rounded-lg ${
                                            currentVideoIndex === 0
                                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                                : "bg-[#FFF8E8] text-[#894B00] hover:bg-[#FFE4B5]"
                                        }`}
                                    >
                                        Oldingi
                                    </button>
                                    <button
                                        onClick={handleNextVideo}
                                        disabled={
                                            currentVideoIndex ===
                                            selectedPlaylist.videos.length - 1
                                        }
                                        className={`px-6 py-3 rounded-lg ${
                                            currentVideoIndex ===
                                            selectedPlaylist.videos.length - 1
                                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                                : "bg-[#FFF8E8] text-[#894B00] hover:bg-[#FFE4B5]"
                                        }`}
                                    >
                                        Keyingi
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Playlist Menu */}
                        <div className="w-full lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6">
                                    {selectedPlaylist.title}
                                </h2>
                                <div className="space-y-4">
                                    {selectedPlaylist.videos.map(
                                        (video, index) => (
                                            <button
                                                key={video.id}
                                                onClick={() =>
                                                    setCurrentVideoIndex(index)
                                                }
                                                className={`w-full text-left p-4 rounded-lg transition-all ${
                                                    currentVideoIndex === index
                                                        ? "bg-[#FFF8E8] text-[#894B00]"
                                                        : "hover:bg-gray-100"
                                                }`}
                                            >
                                                <span className="text-base font-medium">
                                                    {video.title}
                                                </span>
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
