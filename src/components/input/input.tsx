"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { useDebouncedCallback } from "use-debounce";

type InputProps = {
  placeholder: string;
};

const Input: FC<InputProps> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchHandler = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => searchHandler(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        type="search"
        className="border-2 rounded px-1.5 py-2 w-full sm:w-[50%] mb-6 text-sm"
      />
    </>
  );
};

export default Input;
