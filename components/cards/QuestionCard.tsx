import { getTimeStamp } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import TagCard from "./TagCard";
import Metric from "../Metric";

const QuestionCard = ({ question }: Question) => {
  const {
    _id,
    title,
    description,
    author,
    createdAt,
    tags,
    upvotes,
    answers,
    views,
  } = question;
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex-1 ">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard
            key={tag._id}
            {...tag}
            questions={0}
            showCount={false}
            compact={true}
          />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          isAuthor
          textStyles="body-medium text-dark400_light700"
          href={ROUTES.PROFILE(author._id)}
          imgUrl={author.image}
          value={author.name}
          alt={author.name}
          title={`• asked ${getTimeStamp(createdAt)}`}
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="Upvotes"
            value={upvotes}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="Answers"
            value={answers}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="Views"
            value={views}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
