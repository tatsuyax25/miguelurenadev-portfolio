import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      await client.connect();
      const database = client.db("portfolio"); // Choose your DB name
      const collection = database.collection("contacts"); // Collection name

      // Insert the form data into the collection
      const result = await collection.insertOne({
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Data successfully stored!", result });
    } catch (error) {
      res.status(500).json({ message: "Error saving data", error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}