const express = require('express');
const stripe = require('stripe')('sk_test_51OhtyxGZFYUu1l1u6o7XXw176A0cxPZqgzPXAk8Xh0fa3kE3kYFKOlj8yQd7M2d7rHrBP5yrKXNvnai1iwiMRJQl00Wqk5rapN');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to handle CORS headers

app.post('/charge', async (req, res) => {
  try {
    const { token, amount, email } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
      receipt_email: email,
    });

    // Handle success or any other logic here

    res.status(200).send({ success: true, charge });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred during payment processing.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
