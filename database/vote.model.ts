import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of a Vote object
export interface IVote {
  author: Types.ObjectId; // User who voted
  id: Types.ObjectId; // ID of the thing being voted on (Question or Answer)
  type: "question" | "answer"; // "question" or "answer"
  voteType: "upvote" | "downvote"; // "upvote" or "downvote"
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const VoteSchema = new Schema<IVote>(
  {
    // Reference to the User who cast this vote - required
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ID of what's being voted on (could be Question or Answer) - required
    // This is a POLYMORPHIC reference - it can point to different models!
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    // What type of thing is being voted on - required
    // "question" = voting on a Question
    // "answer" = voting on an Answer
    type: {
      type: String,
      required: true,
      enum: ["question", "answer"], // Only these two values allowed
    },

    // What kind of vote - required
    // "upvote" = positive vote (increase score)
    // "downvote" = negative vote (decrease score)
    voteType: {
      type: String,
      required: true,
      enum: ["upvote", "downvote"], // Only these two values allowed
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Compound index to ensure a user can only vote once on each item
// Prevents: Same user voting multiple times on the same question/answer
VoteSchema.index({ author: 1, id: 1 }, { unique: true });

// Create or reuse the Vote model
// Prevents "OverwriteModelError" in Next.js hot reload
const Vote = models.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
