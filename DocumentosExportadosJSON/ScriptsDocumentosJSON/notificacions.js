// Criação da coleção "notifications"
db.createCollection("notifications");

// Inserção dos documentos na coleção "notifications"
db.notifications.insertMany([
  {
    "id_notification": 1,
    "id_user": 123,
    "notification_type": "event_reminder",
    "title": "Upcoming event reminder",
    "message": "Don't forget, your event is tomorrow at 7 PM!",
    "read": false,
    "created_at": ISODate("2023-11-01T08:00:00Z"),
    "updated_at": ISODate("2023-11-01T08:00:00Z")
  },
  {
    "id_notification": 2,
    "id_user": 456,
    "notification_type": "payment_confirmation",
    "title": "Payment confirmation",
    "message": "Your payment for the event ticket has been processed.",
    "read": true,
    "created_at": ISODate("2023-11-02T15:30:00Z"),
    "updated_at": ISODate("2023-11-02T15:30:00Z")
  },
  {
    "id_notification": 3,
    "id_user": 789,
    "notification_type": "new_coupon",
    "title": "New coupon available",
    "message": "Check out our latest coupon code for 15% off!",
    "read": false,
    "created_at": ISODate("2023-11-03T09:45:00Z"),
    "updated_at": ISODate("2023-11-03T09:45:00Z")
  },
  {
    "id_notification": 4,
    "id_user": 159,
    "notification_type": "poll_reminder",
    "title": "Don't forget to vote!",
    "message": "The poll for the upcoming event is still open. Make sure to cast your vote.",
    "read": true,
    "created_at": ISODate("2023-11-04T14:15:00Z"),
    "updated_at": ISODate("2023-11-04T14:15:00Z")
  },
  {
    "id_notification": 5,
    "id_user": 357,
    "notification_type": "ticket_update",
    "title": "Ticket status update",
    "message": "Your ticket for the event has been updated. Please check the details.",
    "read": false,
    "created_at": ISODate("2023-11-05T11:30:00Z"),
    "updated_at": ISODate("2023-11-05T11:30:00Z")
  }
]);