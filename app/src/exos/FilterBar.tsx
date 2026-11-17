import type { Filter } from "../types";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "todo", label: "À faire" },
  { value: "done", label: "Faites" },
];

export default function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          style={{ fontWeight: f.value === filter ? "bold" : "normal" }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
