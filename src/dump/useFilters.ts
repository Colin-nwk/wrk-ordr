import { useState, useCallback } from "react";

interface Filter {
  key: string;
  value: string | number | boolean;
  type: "text" | "select" | "date";
}

export const useFilters = () => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = useCallback((filter: Filter) => {
    setFilters((prev) => [...prev, filter]);
  }, []);

  const removeFilter = useCallback((index: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateFilter = useCallback(
    (index: number, value: string | number | boolean) => {
      setFilters((prev) =>
        prev.map((filter, i) =>
          i === index ? { ...filter, value: value } : filter
        )
      );
    },
    []
  );

  const clearFilters = useCallback(() => {
    setFilters([]);
  }, []);

  return { filters, addFilter, removeFilter, updateFilter, clearFilters };
};
