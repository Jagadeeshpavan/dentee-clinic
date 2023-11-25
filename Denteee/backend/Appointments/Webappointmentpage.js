const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/Webappointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BillingSchema = new mongoose.Schema({
  patientName: String,
  mobileNumber: String,
  doctorName: String,
  email: String,
  startTime: String,
  endTime: String,
  status: String,
});

const Billing = mongoose.model('Webappointment', BillingSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/Webappointment', async (req, res) => {
  try {
    const data = await Billing.find();
    res.json(data);
  } catch (error) {
    console.log(error); // Log any errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a billing record by ID
app.delete('/Webappointment/:id', async (req, res) => {
  try {
    const deletedRecord = await Billing.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a billing record
app.post('/Webappointment', async (req, res) => {
  try {
    const billingData = req.body; // Assuming you are sending the billing data in the request body
    const newBillingRecord = new Billing(billingData);
    await newBillingRecord.save();
    res.json({ message: 'Billing record created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});