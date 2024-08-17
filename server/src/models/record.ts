import mongoose from "mongoose";

interface RecordType {
  userId: string;
  date: Date;
  desc: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

const recordSchema = new mongoose.Schema<RecordType>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  desc: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const RecordModel = mongoose.model<RecordType>("Records", recordSchema);

export default RecordModel;
