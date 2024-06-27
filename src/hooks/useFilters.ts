import { useState, useCallback, useEffect } from "react";

interface Filter {
  status?: string;
  category?: string;
  date?: string;
}

export const useFilters = () => {
  const [filters, setFilters] = useState<Filter>({});

  const updateFilter = useCallback(
    (key: keyof Filter, value: string | null) => {
      setFilters((prev) => {
        if (value === null) {
          const { [key]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [key]: value };
      });
    },
    []
  );

  const getFilterQuery = useCallback(() => {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    return queryParams.toString();
  }, [filters]);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  useEffect(() => {
    const query = getFilterQuery();
    console.log(filters);
    console.log(query);
  }, [filters]);

  return { filters, updateFilter, clearFilters, getFilterQuery };
};
