const express = require('express');
const router = express.Router();
const referralStore = require('../lib/referralStore');

router.get('/referral-metrics', (req, res) => {
  const { referrerId } = req.query;
  const metrics = referralStore.getMetrics(referrerId);

  res.json(metrics);
});

module.exports = router;
