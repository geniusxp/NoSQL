// Criação da coleção "tickets"
db.createCollection("tickets");

// Inserção dos documentos na coleção "tickets"
db.tickets.insertMany([
  {
    "id_ticket": 1,
    "event_id": 1, // ID do evento relacionado
    "ticket_type": "Regular",
    "price": 100.00,
    "available_quantity": 200,
    "sold_quantity": 150,
    "status": "available",
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_ticket": 2,
    "event_id": 1,
    "ticket_type": "VIP",
    "price": 200.00,
    "available_quantity": 50,
    "sold_quantity": 30,
    "status": "available",
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_ticket": 3,
    "event_id": 2, // ID do evento relacionado
    "ticket_type": "General Admission",
    "price": 75.00,
    "available_quantity": 500,
    "sold_quantity": 300,
    "status": "available",
    "created_at": ISODate("2023-11-01T09:00:00Z"),
    "updated_at": ISODate("2023-12-01T10:30:00Z")
  },
  {
    "id_ticket": 4,
    "event_id": 3,
    "ticket_type": "Table for Two",
    "price": 500.00,
    "available_quantity": 20,
    "sold_quantity": 10,
    "status": "available",
    "created_at": ISODate("2023-12-01T08:30:00Z"),
    "updated_at": ISODate("2024-01-01T09:00:00Z")
  },
  {
    "id_ticket": 5,
    "event_id": 4,
    "ticket_type": "Family Pack",
    "price": 300.00,
    "available_quantity": 100,
    "sold_quantity": 70,
    "status": "available",
    "created_at": ISODate("2024-01-15T11:00:00Z"),
    "updated_at": ISODate("2024-02-01T14:00:00Z")
  }
]);