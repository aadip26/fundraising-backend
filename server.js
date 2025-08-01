const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Aadi Pawar",
    referralCode: "aadipawar2025",
    totalDonations: 12345
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
