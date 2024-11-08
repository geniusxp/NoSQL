// Criação da coleção "ticket_types"
db.createCollection("ticket_types");

// Inserção dos documentos na coleção "ticket_types"
db.ticket_types.insertMany([
  {
    "id_ticket_type": 1,
    "type": "Regular",
    "description": "Standard access to the event.",
    "price": 100.00,
    "max_quantity": 200,
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_ticket_type": 2,
    "type": "VIP",
    "description": "Includes premium seating and access to VIP lounge.",
    "price": 200.00,
    "max_quantity": 50,
    "created_at": ISODate("2023-10-01T09:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_ticket_type": 3,
    "type": "General Admission",
    "description": "Basic entry to the event without assigned seating.",
    "price": 75.00,
    "max_quantity": 500,
    "created_at": ISODate("2023-11-01T09:00:00Z"),
    "updated_at": ISODate("2023-12-01T10:30:00Z")
  },
  {
    "id_ticket_type": 4,
    "type": "Table for Two",
    "description": "Reserved table for two at the gala.",
    "price": 500.00,
    "max_quantity": 20,
    "created_at": ISODate("2023-12-01T08:30:00Z"),
    "updated_at": ISODate("2024-01-01T09:00:00Z")
  },
  {
    "id_ticket_type": 5,
    "type": "Family Pack",
    "description": "Includes tickets for two adults and two children.",
    "price": 300.00,
    "max_quantity": 100,
    "created_at": ISODate("2024-01-15T11:00:00Z"),
    "updated_at": ISODate("2024-02-01T14:00:00Z")
  }
]);