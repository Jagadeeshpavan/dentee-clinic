const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/Recyclebin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const userActivityLogsSchema = new mongoose.Schema({
  description: String,
  deleteDate: Date,
  deleteBy: String,
});

const UserActivityLog = mongoose.model('Recyclebin', userActivityLogsSchema);

app.get('/Recyclebin', async (req, res) => {
  try {
    const logs = await UserActivityLog.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.delete('/Recyclebin/:id', async (req, res) => {
  try {
    const log = await UserActivityLog.findOneAndDelete({ _id: req.params.id });
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }

    const logs = await UserActivityLog.find(); // Fetch all logs again after deletion
    res.json(logs); // Return updated logs after deletion
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: 'Failed to delete log' });
  }
});



app.put('/Recyclebin/:id', async (req, res) => {
  try {
    const log = await UserActivityLog.findById(req.params.id);
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }

    if (req.body.description) {
      log.description = req.body.description;
    }
    if (req.body.deleteDate) {
      log.deleteDate = req.body.deleteDate;
    }
    if (req.body.deletedBy) {
      log.deleteBy = req.body.deletedBy;
    }

    await log.save();
    res.json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});