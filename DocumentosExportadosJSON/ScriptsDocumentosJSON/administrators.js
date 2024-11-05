// Criação da coleção "administrators"
db.createCollection("administrators");

// Inserção dos documentos na coleção "administrators"
db.administrators.insertMany([
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "password": "S3cur3P@ss!",
    "role": "Event Coordinator",
    "events_managed": [
      "60f2c4b1a9b1c1234567890",
      "60f2c4b1a9b1c1234567891"
    ],
    "last_login": ISODate("2023-10-01T09:00:00Z"),
    "created_at": ISODate("2022-01-15T10:00:00Z"),
    "updated_at": ISODate("2023-10-01T10:00:00Z"),
    "status": "Active",
    "permissions": [
      "create_events",
      "manage_users",
      "view_reports"
    ]
  },
  {
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "password": "B0bS@feP@ss",
    "role": "System Administrator",
    "events_managed": [
      "60f2c4b1a9b1c1234567892"
    ],
    "last_login": ISODate("2023-09-15T14:30:00Z"),
    "created_at": ISODate("2021-05-20T11:00:00Z"),
    "updated_at": ISODate("2023-09-15T15:00:00Z"),
    "status": "Active",
    "permissions": [
      "manage_system",
      "view_all_reports"
    ]
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "password": "Ch@rlieB0wn!",
    "role": "Marketing Manager",
    "events_managed": [
      "60f2c4b1a9b1c1234567893",
      "60f2c4b1a9b1c1234567894"
    ],
    "last_login": ISODate("2023-08-20T10:15:00Z"),
    "created_at": ISODate("2020-11-05T09:00:00Z"),
    "updated_at": ISODate("2023-08-20T11:00:00Z"),
    "status": "Inactive",
    "permissions": [
      "manage_marketing",
      "create_campaigns"
    ]
  },
  {
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "password": "D!anaP@ssw0rd",
    "role": "Content Manager",
    "events_managed": [],
    "last_login": ISODate("2023-10-10T12:00:00Z"),
    "created_at": ISODate("2022-07-15T08:30:00Z"),
    "updated_at": ISODate("2023-10-10T12:00:00Z"),
    "status": "Active",
    "permissions": [
      "create_content",
      "manage_content"
    ]
  },
  {
    "name": "Eve Adams",
    "email": "eve.adams@example.com",
    "password": "EveP@ssw0rd!",
    "role": "Finance Manager",
    "events_managed": [
      "60f2c4b1a9b1c1234567895"
    ],
    "last_login": ISODate("2023-09-25T15:45:00Z"),
    "created_at": ISODate("2021-09-10T14:00:00Z"),
    "updated_at": ISODate("2023-09-25T16:00:00Z"),
    "status": "Active",
    "permissions": [
      "manage_finances",
      "view_financial_reports"
    ]
  }
]);