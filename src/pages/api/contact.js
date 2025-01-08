import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB connection string
let cachedClient = null; // Cache the MongoDB client for reuse

async function connectToDatabase() {
  if (cachedClient) return cachedClient; // Reuse the cached client
  const client = new MongoClient(uri);
  await client.connect(); // Establish connection if not cached
  cachedClient = client; // Cache the client
  return client;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await connectToDatabase();
      const database = client.db("portfolio"); // Specify your database name
      const collection = database.collection("contacts"); // Specify the collection

      // Insert the form data into the collection
      const result = await collection.insertOne({
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      });

      console.log("Data inserted:", result); // Debugging log
      res.status(200).json({ message: "Data successfully stored!" });
    } catch (error) {
      console.error("Error saving data:", error); // Log detailed error
      res
        .status(500)
        .json({ message: "Error saving data", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
