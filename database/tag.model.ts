import { model, models, Schema } from "mongoose";

// TypeScript interface - defines the shape of a Tag object
export interface ITag {
  name: string;
  questions: number;
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const TagSchema = new Schema<ITag>(
  {
    // The tag name (e.g., "javascript", "react", "css") - required and unique
    // unique: true means no two tags can have the same name
    name: {
      type: String,
      required: true,
      unique: true,
    },

    // Number of questions that have this tag - starts at 0
    // This is a counter that gets incremented when questions are tagged
    questions: {
      type: Number,
      default: 0,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create or reuse the Tag model
// Prevents "OverwriteModelError" in Next.js hot reload
const Tag = models.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
