import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-[#666666] text-lg">Loading events...</p>
    </div>
  );
}