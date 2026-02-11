import { useEffect, useState } from "react";
import { fetchNotionCollection } from "../lib/notionApi";

export function useNotionCollection(collectionId) {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(collectionId));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionId) {
      return undefined;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchNotionCollection(collectionId)
      .then((data) => {
        const normalizedRows = (() => {
          if (Array.isArray(data)) {
            return data;
          }

          if (Array.isArray(data?.results)) {
            return data.results;
          }

          if (Array.isArray(data?.rows)) {
            return data.rows;
          }

          if (Array.isArray(data?.table)) {
            return data.table;
          }

          return null;
        })();

        if (!normalizedRows) {
          throw new Error("Received invalid Notion collection payload");
        }

        if (!isMounted) {
          return;
        }

        if (import.meta.env.DEV) {
          console.debug("Loaded Notion collection rows", normalizedRows);
        }

        setRows(normalizedRows);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) {
          return;
        }

        setError(err);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [collectionId]);

  return { rows, isLoading, error };
}
