// Criação da coleção "coupons"
db.createCollection("coupons");

// Inserção dos documentos na coleção "coupons"
db.coupons.insertMany([
  {
    "id_coupon": 6,
    "code": "SUMMER2023",
    "description": "Summer promotion coupon",
    "discount_type": "percentage",
    "discount_value": 15,
    "start_date": ISODate("2023-06-01T00:00:00Z"),
    "end_date": ISODate("2023-08-31T23:59:59Z"),
    "max_uses": 100,
    "uses_count": 75,
    "created_at": ISODate("2023-05-15T12:00:00Z"),
    "updated_at": ISODate("2023-07-20T10:30:00Z")
  },
  {
    "id_coupon": 7,
    "code": "NEWCUSTOMER10",
    "description": "10% discount for new customers",
    "discount_type": "percentage",
    "discount_value": 10,
    "start_date": ISODate("2023-01-01T00:00:00Z"),
    "end_date": ISODate("2023-12-31T23:59:59Z"),
    "max_uses": 500,
    "uses_count": 300,
    "created_at": ISODate("2022-12-15T09:00:00Z"),
    "updated_at": ISODate("2023-09-01T14:45:00Z")
  },
  {
    "id_coupon": 3,
    "code": "WINTERDISCOUNT",
    "description": "Winter sale coupon",
    "discount_type": "fixed_amount",
    "discount_value": 20,
    "start_date": ISODate("2023-11-01T00:00:00Z"),
    "end_date": ISODate("2024-01-31T23:59:59Z"),
    "max_uses": 200,
    "uses_count": 150,
    "created_at": ISODate("2023-10-15T14:00:00Z"),
    "updated_at": ISODate("2023-12-10T16:20:00Z")
  },
  {
    "id_coupon": 4,
    "code": "BLACKFRIDAY2023",
    "description": "Black Friday discount",
    "discount_type": "percentage",
    "discount_value": 25,
    "start_date": ISODate("2023-11-24T00:00:00Z"),
    "end_date": ISODate("2023-11-27T23:59:59Z"),
    "max_uses": 1000,
    "uses_count": 800,
    "created_at": ISODate("2023-10-01T08:00:00Z"),
    "updated_at": ISODate("2023-11-28T09:15:00Z")
  },
  {
    "id_coupon": 5,
    "code": "SPRINGSALE2023",
    "description": "Spring sale coupon",
    "discount_type": "fixed_amount",
    "discount_value": 15,
    "start_date": ISODate("2023-04-01T00:00:00Z"),
    "end_date": ISODate("2023-05-31T23:59:59Z"),
    "max_uses": 300,
    "uses_count": 250,
    "created_at": ISODate("2023-03-15T11:00:00Z"),
    "updated_at": ISODate("2023-05-25T13:30:00Z")
  },
  {
    "id_coupon": 1,
    "code": "SAVE10",
    "discount": 10, // desconto em porcentagem
    "valid_until": ISODate("2024-12-31T23:59:59Z"),
    "status": "active"
  },
  {
    "id_coupon": 2,
    "code": "FREESHIP",
    "discount": 5, // desconto em porcentagem
    "valid_until": ISODate("2024-11-30T23:59:59Z"),
    "status": "active"
  }
]);