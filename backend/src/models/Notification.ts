import { Schema, model, Document } from "mongoose";

export interface INotification extends Document {
  type: string;
  title: string;
  body: string;
  token: string;
  user_id: string;
  company_id: string;
  is_read: boolean;
  timestamp: Date;
}

const notificationSchema = new Schema<INotification>({
  type: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  token: { type: String, required: true },
  user_id: { type: String, required: true },
  company_id: { type: String, required: true },
  is_read: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

export default model<INotification>("Notification", notificationSchema);