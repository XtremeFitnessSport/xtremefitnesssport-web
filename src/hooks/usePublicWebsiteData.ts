'use client';

import { useEffect, useState } from 'react';
import { getPublicWebsiteData, type PublicWebsiteData } from '@/services/publicWebsite';

export function usePublicWebsiteData() {
  const [data, setData] = useState<PublicWebsiteData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;

    getPublicWebsiteData()
      .then((websiteData) => {
        if (!ignore) {
          setData(websiteData);
        }
      })
      .catch((currentError) => {
        if (!ignore) {
          setError(currentError instanceof Error ? currentError : new Error('No se pudo cargar la data pública.'));
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { data, error };
}
