import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of a TagQuestion object
export interface ITagQuestion {
  tag: Types.ObjectId; // Reference to Tag
  question: Types.ObjectId; // Reference to Question
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    // Reference to the Tag - required
    // This connects to a specific tag (e.g., "javascript")
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },

    // Reference to the Question - required
    // This connects to a specific question
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Compound index to ensure a tag-question pair is unique
// Prevents the same tag from being added to the same question twice
TagQuestionSchema.index({ tag: 1, question: 1 }, { unique: true });

// Create or reuse the TagQuestion model
// Prevents "OverwriteModelError" in Next.js hot reload
const TagQuestion =
  models.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
