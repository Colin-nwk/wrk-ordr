// useTable.ts
import { useState, useCallback } from "react";

export interface TableColumn {
  id: string;
  label: string;
  visible: boolean;
}

export interface TableData {
  [key: string]: any;
}

export function useTableHideColumns<T extends TableData>(
  initialColumns: TableColumn[],
  initialData: T[]
) {
  const [columns, setColumns] = useState<TableColumn[]>(initialColumns);
  const [data, setData] = useState<T[]>(initialData);

  const toggleColumnVisibility = useCallback((columnId: string) => {
    setColumns((columns) =>
      columns.map((col) =>
        col.id === columnId ? { ...col, visible: !col.visible } : col
      )
    );
  }, []);

  const visibleColumns = columns.filter((col) => col.visible);

  return {
    columns,
    visibleColumns,
    data,
    toggleColumnVisibility,
    setData,
  };
}
