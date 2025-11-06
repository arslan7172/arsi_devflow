"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { formUrlQuery } from "@/lib/url";
import { removeKeysFromUrlQuery } from "@/lib/url";
interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClassName?: string;
}
const LocalSearch = ({ route, imgSrc, placeholder, otherClassName }: Props) => {
  const pathname = usePathname(); //shows active url in the browser, where are we working on right now! it changes if we move to other pages of our app.
  const router = useRouter(); // to play with url, controlling with methods.
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else { 
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, searchParams, route]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClassName}`}
    >
      <Image
        src={imgSrc}
        alt="Search Icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        placeholder={placeholder}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
