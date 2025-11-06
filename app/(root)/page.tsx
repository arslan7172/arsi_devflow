import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";



 const questions = [
    {
      _id: "1",
      title: "How to use React with TypeScript?",
      description: "I want to learn React with TypeScript, can anyone help me?",
      tags: [
        {
          _id: "a1",
          name: "react",
        },
        {
          _id: "a2",
          name: "typescript",
        },
      ],
      author: {
        _id: "u1",
        name: "John Doe",
      },
      upvotes: 10,
      answers: 2,
      views: 150,
      createdAt: new Date()
    },
    {
      _id: "2",
      title: "What is Next.js and how does it work?",
      description: "I want to learn Next.js, can anyone help me?",
      tags: [
        {
          _id: "a3",
          name: "nextjs",
        },
        {
          _id: "a4",
          name: "react",
        },
      ],
      author: {
        _id: "u2",
        name: "Jane Smith",
      },
      upvotes: 5,
      answers: 1,
      views: 100,
      createdAt: new Date(),

    },
    {
      _id: "3",
      title: "Best practices for state management in React?",
      description:
        "I want to learn about state management in React, can anyone help me?",
      tags: [
        {
          _id: "a5",
          name: "react",
        },
        {
          _id: "a6",
          name: "state-management",
        },
      ],
      author: {
        _id: "u3",
        name: "Alice Johnson",
      },
      upvotes: 8,
      answers: 3,
      views: 120,
      createdAt: new Date(),
    },
  ];

  interface SearchParams {
    searchParams: Promise<{[key: string]: string}>;  //query=react  
    
  }
const Home = async ({searchParams}:SearchParams) => {
 const {query = '', filter = ''} = await searchParams;
 const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes((query || "").toLowerCase())
    && (filter ? question.tags.some(tag => tag.name.toLowerCase() === filter.toLowerCase()) : true)
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-dark100_light900 h1-bold">All Questions</h1>
        <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTIONS}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search..."
          otherClassName="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
