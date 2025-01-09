import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "contacts.json");

if (!fs.existsSync(path.dirname(dataFilePath))) {
  fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
}

export default async function handler(req, res) {
  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    try {
      const newEntry = {
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      };

      let existingData = [];
      try {
        if (fs.existsSync(dataFilePath)) {
          const rawData = fs.readFileSync(dataFilePath, "utf-8");
          existingData = JSON.parse(rawData);
        }
      } catch (error) {
        console.error("Error reading data file:", error);
        existingData = []; // Default to an empty array
      }

      existingData.push(newEntry);

      // Write updated data back to file
      fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
      console.log("Data saved:", newEntry);

      res.status(200).json({ message: "Data successfully stored!" });
    } catch (error) {
      console.error("Error in saving data:", error);
      res
        .status(500)
        .json({ message: "Failed to save data", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
