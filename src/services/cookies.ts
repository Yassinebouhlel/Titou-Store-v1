// hooks/useStoreCookie.ts
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useStoreCookie = () => {
  const pathname = usePathname();

  const setSelectedColor = (selectedStore: string) => {
    document.cookie = `selectedStore=${selectedStore}; path=/; max-age=31536000`;
  };

  useEffect(() => {
    const pathParts = pathname.split('/');
    const urlStoreCode = pathParts[1]?.toUpperCase();
console.log(urlStoreCode)
    const cookieStoreCode = document.cookie
      .split('; ')
      .find(row => row.startsWith('selectedStore='))
      ?.split('=')[1]
      ?.toUpperCase() || null;
      console.log(urlStoreCode,'vs',cookieStoreCode)
    if (urlStoreCode && urlStoreCode !== cookieStoreCode) {
      console.log(urlStoreCode,'vs',cookieStoreCode)
    document.location.reload();
      
      console.log('Store cookie updated to:', urlStoreCode);
    }
  }, []);

  return null;
};

export default useStoreCookie;