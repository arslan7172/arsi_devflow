import { model, models, Schema } from "mongoose";

interface IAccount {
  userId: Schema.Types.ObjectId;
  name: string;
  provider: string;
  image?: string;
  password?: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  image: { type: String },
  password: { type: String },
  providerAccountId: { type: String, required: true },
});

const Account = models.Account || model<IAccount>("Account", AccountSchema);

export default Account;