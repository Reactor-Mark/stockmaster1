// src/hooks/useSearch.js
import { useState, useEffect } from "react";

export default function useSearch(items = [], query = "", keys = []) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!Array.isArray(items) || !Array.isArray(keys)) {
      setResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
      setResults(items);
      return;
    }

    const filtered = items.filter((item) =>
      keys.some((key) =>
        item[key]?.toString().toLowerCase().includes(normalizedQuery)
      )
    );

    setResults(filtered);
  }, [query, items, keys]);

  return results;
}
