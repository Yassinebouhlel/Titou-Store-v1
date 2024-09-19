'use client';
import StoreSelector from '@/components/StoreSelector';

export default function RootPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700">
      <StoreSelector />
    </div>
  );
}
