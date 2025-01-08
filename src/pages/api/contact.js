import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "contacts.json"); // File to store the data

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(dataFilePath))) {
  fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const newEntry = {
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      };

      // Read existing data
      let existingData = [];
      if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        existingData = JSON.parse(rawData);
      }

      // Add the new entry
      existingData.push(newEntry);

      // Save the updated data back to the file
      fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

      console.log("Data saved:", newEntry); // Debugging log
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
