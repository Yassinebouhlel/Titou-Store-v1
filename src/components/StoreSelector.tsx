/* eslint-disable func-style */
/* eslint-disable import/no-extraneous-dependencies */
'use client';

import {Dialog} from '@headlessui/react';
import {useRouter} from 'next/navigation';
import React, {useState, useEffect} from 'react';

const stores = ['ca', 'sa', 'tn', 'us', 'fr', 'ma'];

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

  const handleStoreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(event.target.value);
  };

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
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
          <Dialog.Title className="mb-4 text-2xl font-bold">
            Select Your Store
          </Dialog.Title>
          <form onSubmit={handleSubmit}>
            <select
              className="mb-4 w-full rounded border p-2"
              onChange={handleStoreSelect}
              value={selectedStore}
            >
              <option value="">Choose a store</option>
              {stores.map((store) => (
                <option key={store} value={store}>
                  {store.toUpperCase()}
                </option>
              ))}
            </select>
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
