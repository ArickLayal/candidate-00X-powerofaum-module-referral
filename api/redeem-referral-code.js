const express = require('express');
const router = express.Router();
const referralStore = require('../lib/referralStore');

router.post('/redeem-referral-code', (req, res) => {
  const { code } = req.body;

  const isValid = referralStore.redeemCode(code);

  if (!isValid) {
    return res.status(404).json({ success: false, error: "Referral code not found" });
  }

  res.json({ success: true, message: "Referral applied!" });
});

module.exports = router;
