interface Tag {
  _id: string;
  name: string;
}
interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  question: {
    _id: string;
    title: string;
    description: string;
    author: Author;
    createdAt: Date;
    tags: Tag[];
    upvotes: number;
    answers: number;
    views: number;
  };
}
