import { Elysia, t } from "elysia";
import { admin } from "../config/firebaseAdmin";
import notificationSchema from "../models/Notification"

export default new Elysia()
  .post(
    "/send",
    async ({ body }) => {
      const message = {
        notification: {
          type: body.type,
          title: body.title,
          body: body.body,
        },
        token: body.token,
      };

      try {
        await admin.messaging().send(message);
        
        await notificationSchema.create({
          type: body.type,
          user_id: body.user_id,
          company_id: body.company_id,
          title: body.title,
          body: body.body,
          timestamp: new Date()
        });

        return { success: true, message: "Notification sent successfully" };
      } catch (err) {
        console.error("Error sending notification:", err);
        return { success: false, error: "Failed to send notification" };
      }
    },
    {
      detail: {
        summary: "send",
        tags: ["Notifications"],
      },
      body: t.Object({
        type: t.String(),
        title: t.String(),
        body: t.String(),
        token: t.String(),
        user_id: t.String(),
        company_id: t.String(),
        is_read: t.String(),
        timestamp: t.Date()
      }),
    }
  )
  .get(
    "/history",
    async ({ body }) => {
      try {
        const history = await notificationSchema.find(
          {
            user_id: body.user_id,
            company_id: body.company_id
          }
        ).sort({ timestamp: -1 });

        return { success: true, data: history };
      } catch (error) {
        console.error("Error fetching notification history:", error);
        return { success: false, error: "Failed to retrieve notification history" };
      }
    },
    {
      detail: {
        summary: "get history",
        tags: ["Notifications"],
      },
      body: t.Object({
        user_id: t.String(),
        company_id: t.String()
      }),
    }
  )