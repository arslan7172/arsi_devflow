import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TagCard from "../cards/TagCard";

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id: '1',
      title: "How to manage state in React?",
    },
    {
      _id: '2',
      title:
        "What is the difference between var, let, and const in JavaScript?",
    },
    {
      _id: '3',
      title: "How to optimize performance in Next.js applications?",
    },
    {
      _id: '4',
      title: "What are the new features in ES2021?",
    },
    {
      _id: '5',
      title: "How to implement authentication in a React app?",
    },
  ];

  const popularTags = [
    { _id: '1', name: "javascript", questions: 1200 },
    { _id: '2', name: "react", questions: 800 },
    { _id: '3', name: "next.js", questions: 600 },
    { _id: '4', name: "typescript", questions: 500 },
    { _id: '5', name: "css", questions: 400 },
  ];
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {
            hotQuestions.map(({_id, title}) => (
                <Link key={_id} href={`/questions/${ROUTES.PROFILE(_id)}`} className="flex cursor-pointer items-center justify-between gap-7">
                  <p className="body-medium text-dark500_light700">{title}</p>
                  <Image
                    src="/icons/chevron-right.svg"
                    alt="Chevron Right"
                    width={20}
                    height={20}
                    className="invert-colors"
                  />
                </Link>
            ))
          }
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {
            popularTags.map(({_id, name, questions}) => (
              <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
