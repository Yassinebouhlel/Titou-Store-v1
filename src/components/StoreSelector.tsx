/* eslint-disable func-style */
/* eslint-disable import/no-extraneous-dependencies */
'use client';

import {Dialog} from '@headlessui/react';
import {useRouter} from 'next/navigation';
import React, {useState, useEffect} from 'react';
import ReactFlagsSelect from 'react-flags-select';

const stores = ['CA', 'SA', 'TN', 'US', 'FR', 'MA'];

export default function StoreSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('');

  const router = useRouter();

  useEffect(() => {
    const hasSelectedStore = document.cookie.includes('selectedStore=');
    if (!hasSelectedStore) {
      setIsOpen(true);
    }
  }, []);

  const handleStoreSelect = (code: string): void => setSelectedStore(code);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedStore) {
      document.cookie = `selectedStore=${selectedStore}; path=/; max-age=31536000`;
      router.push(`/${selectedStore}`);
      setIsOpen(false);
    }
  };

  return (
    <Dialog onClose={() => {}} open={isOpen}>
      <div aria-hidden="true" className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-[url('/images/elephant.jpg')]  ">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
          <Dialog.Title className="mb-4 font-bold text-2xl">
            Select Your Store
          </Dialog.Title>
          <form onSubmit={handleSubmit}>
            <ReactFlagsSelect
              blacklistCountries={false}
              countries={stores}
              onSelect={handleStoreSelect}
              selected={selectedStore}
            />
            <button
              className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
              disabled={!selectedStore}
              type="submit"
            >
              Continue
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
