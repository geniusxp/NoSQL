// Criação da coleção "users"
db.createCollection("users");

// Inserção dos documentos na coleção "users"
db.users.insertMany([

  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "S3cur3P@ss!",
    "cpf": "123.456.789-00",
    "birth_date": ISODate("1980-05-15T00:00:00Z"),
    "description": "Frequent event attendee and passionate networker",
    "interests": ["event management", "technology", "entrepreneurship"],
    "avatar_url": "https://example.com/avatars/johndoe.jpg",
    "created_at": ISODate("2022-09-01T12:00:00Z"),
    "updated_at": ISODate("2023-06-15T14:30:00Z")
  },
  {
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "password": "P@ssw0rdJane",
    "cpf": "987.654.321-00",
    "birth_date": ISODate("1990-10-30T00:00:00Z"),
    "description": "Event planner and entrepreneur",
    "interests": ["networking", "marketing", "design"],
    "avatar_url": "https://example.com/avatars/janesmith.jpg",
    "created_at": ISODate("2023-01-15T09:00:00Z"),
    "updated_at": ISODate("2023-10-01T10:00:00Z")
  },
  {
    "name": "Michael Johnson",
    "email": "michaeljohnson@example.com",
    "password": "M!chaelJ0hnson",
    "cpf": "543.216.789-00",
    "birth_date": ISODate("1985-03-22T00:00:00Z"),
    "description": "Tech enthusiast and conference speaker",
    "interests": ["technology", "speaking", "education"],
    "avatar_url": "https://example.com/avatars/michaeljohnson.jpg",
    "created_at": ISODate("2022-02-12T08:00:00Z"),
    "updated_at": ISODate("2023-09-10T14:00:00Z")
  },
  {
    "name": "Emily Davis",
    "email": "emilydavis@example.com",
    "password": "Em!lyD@vis2023",
    "cpf": "321.654.987-00",
    "birth_date": ISODate("1995-12-01T00:00:00Z"),
    "description": "Marketing specialist with a love for events",
    "interests": ["marketing", "events", "social media"],
    "avatar_url": "https://example.com/avatars/emilydavis.jpg",
    "created_at": ISODate("2023-03-30T09:30:00Z"),
    "updated_at": ISODate("2023-10-02T10:00:00Z")
  },
  {
    "name": "David Wilson",
    "email": "davidwilson@example.com",
    "password": "D@vidW!lson2023",
    "cpf": "654.321.987-00",
    "birth_date": ISODate("1992-07-25T00:00:00Z"),
    "description": "Aspiring entrepreneur and event organizer",
    "interests": ["entrepreneurship", "networking", "business"],
    "avatar_url": "https://example.com/avatars/davidwilson.jpg",
    "created_at": ISODate("2023-04-15T12:00:00Z"),
    "updated_at": ISODate("2023-09-20T11:30:00Z")
  },
  {
    "id_user": 123,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "coupons": [
      {
        "id_coupon": 1,
        "code": "SAVE10",
        "discount": 10, // desconto em porcentagem
        "valid_until": ISODate("2024-12-31T23:59:59Z"),
        "status": "active"
      }
    ],
    "tickets": [
      {
        "id_ticket": 1,
        "event_id": 1,
        "ticket_type": "VIP",
        "price": 200.00,
        "status": "purchased",
        "purchase_date": ISODate("2023-10-01T09:00:00Z")
      }
    ],
    "events_attending": [
      {
        "event_id": 1,
        "lecture_ids": [1, 2], // IDs das palestras para as quais está inscrita
        "registration_date": ISODate("2023-10-01T09:00:00Z")
      }
    ],
    "created_at": ISODate("2023-01-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
}]);
