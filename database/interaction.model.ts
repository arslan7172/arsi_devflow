import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of an Interaction object
export interface IInteraction {
  user: Types.ObjectId; // User who performed the action
  action: string; // What action was performed
  actionId: Types.ObjectId; // ID of the thing the action was performed on
  actionType: string; // Type of thing the action was performed on
  createdAt?: Date; // Added by timestamps
  updatedAt?: Date; // Added by timestamps
}

// MongoDB Schema - defines how data is stored in the database
const InteractionSchema = new Schema<IInteraction>(
  {
    // Reference to the User who performed this action - required
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // What action was performed - required
    // Examples: "view", "ask", "answer", "upvote", "downvote", "save", etc.
    action: {
      type: String,
      required: true,
    },

    // ID of what the action was performed on - required
    // This is a POLYMORPHIC reference (similar to Vote model)
    // Could be Question, Answer, User, etc.
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    // What type of thing the action was performed on - required
    // Examples: "question", "answer", "user", "tag"
    // Tells us what model actionId refers to
    actionType: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    // createdAt = when the action happened
    timestamps: true,
  }
);

// Index on user for fast queries like "get all actions by this user"
InteractionSchema.index({ user: 1 });

// Index on actionId and actionType for queries like "get all actions on this question"
InteractionSchema.index({ actionId: 1, actionType: 1 });

// Create or reuse the Interaction model
// Prevents "OverwriteModelError" in Next.js hot reload
const Interaction =
  models.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
