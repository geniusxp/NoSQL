// Criação da coleção "lectures"
db.createCollection("lectures");

// Inserção dos documentos na coleção "lectures"
db.lectures.insertMany([
  {
    "id_lecture": 1,
    "title": "Introduction to AI",
    "speaker": "Dr. Alice Smith",
    "date": ISODate("2023-11-10T10:00:00Z"),
    "duration": 60, // em minutos
    "description": "A comprehensive overview of artificial intelligence and its applications.",
    "event_id": 1, // ID do evento relacionado
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_lecture": 2,
    "title": "The Future of Technology",
    "speaker": "Prof. Bob Johnson",
    "date": ISODate("2023-11-10T11:30:00Z"),
    "duration": 75,
    "description": "An exploration of emerging technologies and trends.",
    "event_id": 1,
    "created_at": ISODate("2023-10-01T10:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:30:00Z")
  },
  {
    "id_lecture": 3,
    "title": "Sustainability in Tech",
    "speaker": "Dr. Clara Lee",
    "date": ISODate("2023-12-01T14:00:00Z"),
    "duration": 90,
    "description": "Discussing sustainable practices in technology development.",
    "event_id": 2, // ID do evento relacionado
    "created_at": ISODate("2023-11-01T09:00:00Z"),
    "updated_at": ISODate("2023-12-01T10:00:00Z")
  },
  {
    "id_lecture": 4,
    "title": "Data Science Essentials",
    "speaker": "Mr. David Brown",
    "date": ISODate("2024-01-15T10:00:00Z"),
    "duration": 120,
    "description": "A deep dive into the fundamentals of data science.",
    "event_id": 3,
    "created_at": ISODate("2023-12-01T08:30:00Z"),
    "updated_at": ISODate("2024-01-01T09:00:00Z")
  },
  {
    "id_lecture": 5,
    "title": "Innovations in Cybersecurity",
    "speaker": "Ms. Emily Davis",
    "date": ISODate("2024-02-20T13:00:00Z"),
    "duration": 60,
    "description": "Latest trends and innovations in cybersecurity.",
    "event_id": 4,
    "created_at": ISODate("2024-01-15T11:00:00Z"),
    "updated_at": ISODate("2024-02-01T14:00:00Z")
  }
]);