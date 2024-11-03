require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();

    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

async function insert(user) {
    const db = await connect();
    return db.collection("users").insertOne(user);
}

async function find() {
    const db = await connect();
    return db.collection("users").find().toArray();
}

async function remove(id) {
    const db = await connect();
    return db.collection("users").deleteOne({ _id: new ObjectId(id) });
}

async function update(id, userData) {
    const db = await connect();
    return db.collection("users").updateOne(
        { _id: new ObjectId(id) },
        { $set: userData }
    );
}

async function findOne(query) {
    const db = await connect();
    return db.collection("users").findOne(query);
}

module.exports = { insert, find, remove, update, findOne };