// Criação da coleção "events"
db.createCollection("events");

// Inserção dos documentos na coleção "events"
db.events.insertMany([
  {
    "id_event": 1,
    "title": "Tech Conference 2023",
    "description": "Join us for a day of technology talks and networking.",
    "date": ISODate("2023-11-15T09:00:00Z"),
    "location": "Convention Center, Downtown",
    "capacity": 500,
    "registered_count": 350,
    "status": "active",
    "created_at": ISODate("2023-10-01T10:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_event": 2,
    "title": "Art & Culture Festival",
    "description": "A celebration of art and culture with local artists.",
    "date": ISODate("2023-12-20T11:00:00Z"),
    "location": "City Park",
    "capacity": 1000,
    "registered_count": 700,
    "status": "active",
    "created_at": ISODate("2023-11-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-15T10:30:00Z")
  },
  {
    "id_event": 3,
    "title": "Annual Charity Gala",
    "description": "A gala to support local charities and community projects.",
    "date": ISODate("2024-01-15T19:00:00Z"),
    "location": "Grand Ballroom, Hotel Luxe",
    "capacity": 300,
    "registered_count": 250,
    "status": "active",
    "created_at": ISODate("2023-12-01T08:00:00Z"),
    "updated_at": ISODate("2024-01-01T14:00:00Z")
  },
  {
    "id_event": 4,
    "title": "Summer Music Festival",
    "description": "Enjoy live music from various genres in the summer sun.",
    "date": ISODate("2024-06-10T15:00:00Z"),
    "location": "Open Air Stage, City Center",
    "capacity": 2000,
    "registered_count": 1500,
    "status": "upcoming",
    "created_at": ISODate("2024-04-01T10:00:00Z"),
    "updated_at": ISODate("2024-05-01T11:15:00Z")
  },
  {
    "id_event": 5,
    "title": "Winter Wonderland",
    "description": "A festive event featuring holiday activities and fun.",
    "date": ISODate("2024-12-15T10:00:00Z"),
    "location": "Main Square",
    "capacity": 800,
    "registered_count": 600,
    "status": "upcoming",
    "created_at": ISODate("2024-11-01T09:30:00Z"),
    "updated_at": ISODate("2024-11-15T12:00:00Z")
  },
  {
    "id_event": 1,
    "title": "Tech Conference 2023",
    "description": "Join us for a day of technology talks and networking.",
    "date": ISODate("2023-11-15T09:00:00Z"),
    "location": "Convention Center, Downtown",
    "capacity": 500,
    "registered_count": 350,
    "status": "active",
    "lectures": [
      {
        "id_lecture": 1,
        "title": "Introduction to AI",
        "speaker": "Dr. Alice Smith",
        "duration": 60,
        "description": "A comprehensive overview of artificial intelligence."
      },
      {
        "id_lecture": 2,
        "title": "The Future of Technology",
        "speaker": "Prof. Bob Johnson",
        "duration": 75,
        "description": "An exploration of emerging technologies and trends."
      }
    ],
    "tickets": [
      {
        "id_ticket": 1,
        "ticket_type": "Regular",
        "price": 100.00,
        "available_quantity": 200,
        "sold_quantity": 150,
        "status": "available"
      },
      {
        "id_ticket": 2,
        "ticket_type": "VIP",
        "price": 200.00,
        "available_quantity": 50,
        "sold_quantity": 30,
        "status": "available"
      }
    ],
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  }
]);