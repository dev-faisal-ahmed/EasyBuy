import mongoose from 'mongoose';

export type UserType = mongoose.Document & {
  name: string;
  phone: string;
  password: string;
};

const UserSchema = new mongoose.Schema<UserType>({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel =
  (mongoose.models.user as mongoose.Model<UserType>) ||
  mongoose.model<UserType>('user', UserSchema);
