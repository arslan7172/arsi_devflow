import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of an Answer object
export interface IAnswer {
  author: Types.ObjectId; // Reference to User who wrote the answer
  question: Types.ObjectId; // Reference to Question being answered
  content: string;
  upvotes: number;
  downvotes: number;
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const AnswerSchema = new Schema<IAnswer>(
  {
    // Reference to the User who wrote this answer - required
    // Allows you to do .populate('author') to get full user object
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reference to the Question this answer belongs to - required
    // Allows you to do .populate('question') to get full question object
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    // The answer content/text - required
    content: {
      type: String,
      required: true,
    },

    // Number of upvotes this answer has - starts at 0
    upvotes: {
      type: Number,
      default: 0,
    },

    // Number of downvotes this answer has - starts at 0
    downvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create or reuse the Answer model
// Prevents "OverwriteModelError" in Next.js hot reload
const Answer = models.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
