// Criação da coleção "payments"
db.createCollection("payments");

// Inserção dos documentos na coleção "payments"
db.payments.insertMany([
  {
    "id_payment": 1,
    "id_user": 123,
    "id_ticket": 456,
    "id_coupon": 789,
    "payment_method": "credit_card",
    "amount": 100.00,
    "payment_status": "paid",
    "payment_date": ISODate("2023-11-01T12:00:00Z"),
    "created_at": ISODate("2023-10-30T10:00:00Z"),
    "updated_at": ISODate("2023-11-01T12:00:00Z")
  },
  {
    "id_payment": 2,
    "id_user": 456,
    "id_ticket": 789,
    "id_coupon": null,
    "payment_method": "paypal",
    "amount": 50.00,
    "payment_status": "pending",
    "payment_date": ISODate("2023-11-02T15:30:00Z"),
    "created_at": ISODate("2023-11-02T15:00:00Z"),
    "updated_at": ISODate("2023-11-02T15:30:00Z")
  },
  {
    "id_payment": 3,
    "id_user": 789,
    "id_ticket": 159,
    "id_coupon": 357,
    "payment_method": "bank_transfer",
    "amount": 75.00,
    "payment_status": "paid",
    "payment_date": ISODate("2023-11-03T09:45:00Z"),
    "created_at": ISODate("2023-11-02T18:00:00Z"),
    "updated_at": ISODate("2023-11-03T09:45:00Z")
  },
  {
    "id_payment": 4,
    "id_user": 159,
    "id_ticket": 357,
    "id_coupon": null,
    "payment_method": "debit_card",
    "amount": 80.00,
    "payment_status": "paid",
    "payment_date": ISODate("2023-11-04T14:15:00Z"),
    "created_at": ISODate("2023-11-04T14:00:00Z"),
    "updated_at": ISODate("2023-11-04T14:15:00Z")
  },
  {
    "id_payment": 5,
    "id_user": 357,
    "id_ticket": 753,
    "id_coupon": 951,
    "payment_method": "apple_pay",
    "amount": 120.00,
    "payment_status": "paid",
    "payment_date": ISODate("2023-11-05T11:30:00Z"),
    "created_at": ISODate("2023-11-05T11:00:00Z"),
    "updated_at": ISODate("2023-11-05T11:30:00Z")
  }
]);