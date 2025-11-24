import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of a Collection object
export interface ICollection {
  author: Types.ObjectId; // User who saved the question
  question: Types.ObjectId; // Question that was saved
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const CollectionSchema = new Schema<ICollection>(
  {
    // Reference to the User who saved this question - required
    // This is the user's "saved questions" or "bookmarks"
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reference to the Question being saved - required
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    // createdAt = when the question was saved
    timestamps: true,
  }
);

// Compound index to ensure a user can't save the same question twice
// Each user-question combination must be unique
CollectionSchema.index({ author: 1, question: 1 }, { unique: true });

// Create or reuse the Collection model
// Prevents "OverwriteModelError" in Next.js hot reload
const Collection =
  models.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
