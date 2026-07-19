import type { FormEvent } from "react";

type SearchBarProps = {
    value: string;
    isLoading: boolean;
    onChange: (value: string) => void;
    onSearch: (e: FormEvent) => void;
};

function SearchBar({
    value,
    isLoading,
    onChange,
    onSearch,
}: SearchBarProps) {
    return (
        <form
            onSubmit={onSearch}
            className="mb-8 flex gap-4"
        >
            <input
                className="flex-1 rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="Search city..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            <button
                type="submit"
                disabled={isLoading}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
                {isLoading ? "Loading..." : "Search"}
            </button>
        </form>
    );
}

export default SearchBar;