"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/recipe/${query}`);
  };

  return (
    <nav className="bg-white px-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={140}
                height={100}
              />
            </Link>
          </div>
          <div className="flex-grow mx-4">
            <form className="relative max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search by recipe name"
                  required
                  value={query}
                  onChange={handleInputChange}
                />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/saved">
              <Image
                src="/save.svg"
                alt="Saved"
                width={20}
                height={50}
              />
            </Link>
            <Link href="/login">
              <Image
                src="/user.svg"
                alt="User"
                width={30}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
