// Criação da coleção "polls"
db.createCollection("polls");

// Inserção dos documentos na coleção "polls"
db.polls.insertMany([
  {
    "id_poll": 1,
    "title": "Favorite event activity",
    "description": "Vote for your favorite activity at our upcoming event",
    "start_date": ISODate("2023-10-01T00:00:00Z"),
    "end_date": ISODate("2023-10-15T23:59:59Z"),
    "total_votes": 150,
    "options": [
      {
        "id_option": 1,
        "description": "Music performance",
        "votes": 65
      },
      {
        "id_option": 2,
        "description": "Interactive workshop",
        "votes": 45
      },
      {
        "id_option": 3,
        "description": "Food tasting",
        "votes": 40
      }
    ],
    "created_at": ISODate("2023-09-15T12:00:00Z"),
    "updated_at": ISODate("2023-10-16T09:00:00Z")
  },
  {
    "id_poll": 2,
    "title": "Event location preference",
    "description": "Where would you like the next event to be held?",
    "start_date": ISODate("2023-11-01T00:00:00Z"),
    "end_date": ISODate("2023-11-20T23:59:59Z"),
    "total_votes": 210,
    "options": [
      {
        "id_option": 1,
        "description": "Downtown venue",
        "votes": 120
      },
      {
        "id_option": 2,
        "description": "Outdoor park",
        "votes": 90
      }
    ],
    "created_at": ISODate("2023-10-15T14:00:00Z"),
    "updated_at": ISODate("2023-11-21T08:30:00Z")
  },
  {
    "id_poll": 3,
    "title": "Event timing preference",
    "description": "What time of day do you prefer for the event?",
    "start_date": ISODate("2023-12-01T00:00:00Z"),
    "end_date": ISODate("2023-12-15T23:59:59Z"),
    "total_votes": 180,
    "options": [
      {
        "id_option": 1,
        "description": "Afternoon (2-5 PM)",
        "votes": 100
      },
      {
        "id_option": 2,
        "description": "Evening (6-9 PM)",
        "votes": 80
      }
    ],
    "created_at": ISODate("2023-11-15T10:00:00Z"),
    "updated_at": ISODate("2023-12-16T11:45:00Z")
  },
  {
    "id_poll": 4,
    "title": "Event catering preference",
    "description": "What type of catering would you like for the event?",
    "start_date": ISODate("2024-01-01T00:00:00Z"),
    "end_date": ISODate("2024-01-15T23:59:59Z"),
    "total_votes": 220,
    "options": [
      {
        "id_option": 1,
        "description": "Buffet-style",
        "votes": 130
      },
      {
        "id_option": 2,
        "description": "Plated service",
        "votes": 90
      }
    ],
    "created_at": ISODate("2023-12-15T12:00:00Z"),
    "updated_at": ISODate("2024-01-16T09:00:00Z")
  },
  {
    "id_poll": 5,
    "title": "Event entertainment preference",
    "description": "What type of entertainment would you like at the event?",
    "start_date": ISODate("2024-02-01T00:00:00Z"),
    "end_date": ISODate("2024-02-20T23:59:59Z"),
    "total_votes": 190,
    "options": [
      {
        "id_option": 1,
        "description": "Live music",
        "votes": 110
      },
      {
        "id_option": 2,
        "description": "Comedy show",
        "votes": 80
      }
    ],
    "created_at": ISODate("2024-01-15T14:00:00Z"),
    "updated_at": ISODate("2024-02-21T11:30:00Z")
  }
]);