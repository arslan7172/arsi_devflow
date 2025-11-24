import { model, models, Schema, Types } from "mongoose";

// TypeScript interface - defines the shape of a Question object
export interface IQuestion {
  title: string;
  content: string;
  tags: Types.ObjectId[]; // Array of Tag references
  views: number;
  answers: number;
  upvotes: number;
  downvotes: number;
  author: Types.ObjectId; // Reference to User

}

// MongoDB Schema - defines how data is stored in the database
const QuestionSchema = new Schema<IQuestion>(
  {
    // The question title - required text
    title: { 
      type: String, 
      required: true 
    },
    
    // The full question content/description - required text
    content: { 
      type: String, 
      required: true 
    },
    
    // Array of references to Tag documents
    // Allows you to do .populate('tags') to get full tag objects
    tags: [{ 
      type: Schema.Types.ObjectId, 
      ref: "Tag" 
    }],
    
    // Number of times this question was viewed - starts at 0
    views: { 
      type: Number, 
      default: 0 
    },
    
    // Number of answers this question has - starts at 0
    answers: { 
      type: Number, 
      default: 0 
    },
    
    // Number of upvotes - starts at 0
    upvotes: { 
      type: Number, 
      default: 0 
    },
    
    // Number of downvotes - starts at 0
    downvotes: { 
      type: Number, 
      default: 0 
    },
    
    // Reference to the User who created this question - required
    // Allows you to do .populate('author') to get full user object
    author: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
  },
  { 
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true 
  }
);

// Create or reuse the Question model
// Prevents "OverwriteModelError" in Next.js hot reload
const Question = models.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
