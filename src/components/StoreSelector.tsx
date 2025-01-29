"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "../styles/globals.css";

const stores = ["CA", "SA", "TN", "US", "FR", "MA"];

export default function StoreSelector() {
  const [selectedStore, setSelectedStore] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  const messages = [
    { text: "Welcome To Titou", lang: "English" },
    { text: "Bienvenue Chez Titou", lang: "French" },
    { text: "مرحبًا في تيتو", lang: "Arabic" },
  ];

  useEffect(() => {
    const hasSelectedStore = document.cookie.includes("selectedStore=");
    if (!hasSelectedStore) {
      setSelectedStore("");
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  const handleStoreSelect = (code: string): void => setSelectedStore(code);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedStore) {
      setIsLoading(true);
      document.cookie = `selectedStore=${selectedStore}; path=/; max-age=31536000`;
      setTimeout(() => {
        router.push(`/${selectedStore}`);
      }, 2000); // Simulate a delay for the spinner to show (can be adjusted or removed)
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full">
      <div className="hidden md:flex flex-1 items-center justify-center bg-yellow-500/40 p-8">
        <div className="relative w-full max-w-xl">
          <video
            src="/videos/videoValise3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-[85vh] object-cover rounded-2xl shadow-2xl border-none"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-white font-bold text-lg"></h2>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-yellow-300 flex flex-col justify-center px-8 relative">
        <div className="absolute top-4 left-4 bg-transparent text-white rounded-full p-2 text-sm text-center flex items-center justify-center font-extrabold">
          <Image
            alt="titou logo"
            className="w-20"
            height={20}
            src="/svg/old-logo.svg"
            width={20}
          />
        </div>
        <h1 className="text-white font-extrabold w-full text-center mb-16">
          {messages[languageIndex].text}
        </h1>
        <h1 className="text-4xl font-bold mb-8">Go shopping →</h1>
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative mb-6">
            <ReactFlagsSelect
              blacklistCountries={false}
              countries={stores}
              onSelect={handleStoreSelect}
              selected={selectedStore}
              className="ReactFlagsSelect w-full border-none bg-white rounded-xl"
              placeholder="Select a store"
            />
          </div>
          <button
            className={`w-full py-3 text-lg font-semibold rounded bg-black text-white hover:bg-gray-800 transition ${
              !selectedStore || isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!selectedStore || isLoading}
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="mt-4 text-sm">
          <p>
            Online store:{" "}
            <span className="font-bold">
              {selectedStore || "Select a store"}
            </span>
          </p>
        </div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
