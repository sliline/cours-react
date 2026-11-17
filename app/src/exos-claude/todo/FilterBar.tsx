import type { Filter } from "../../types";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

interface FilterOption {
  value: Filter;
  label: string;
}

const options: FilterOption[] = [
  { value: "all", label: "Toutes" },
  { value: "todo", label: "À faire" },
  { value: "done", label: "Faites" },
];

function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          style={{ fontWeight: option.value === filter ? "bold" : "normal" }}
          aria-pressed={option.value === filter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
