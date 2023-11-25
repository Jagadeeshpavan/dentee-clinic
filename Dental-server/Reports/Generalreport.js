const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5002; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/generalReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const generalReportSchema = new mongoose.Schema({
  patientName: String,
  mobileNumber: String,
  registrationDate: String,
  address: String,
  gender: String,
  emailAddress: String,
});

const GeneralReportModel = mongoose.model('GeneralReport', generalReportSchema);

// Define API routes
app.get('/general-report', async (req, res) => {
  try {
    const data = await GeneralReportModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
