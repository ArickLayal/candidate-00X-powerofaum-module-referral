const express = require('express');
const router = express.Router();
const referralStore = require('../lib/referralStore');

function generateReferralCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'REF';
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

router.post('/generate-referral-code', (req, res) => {
  const { referrerId } = req.body;
  const code = generateReferralCode();

  referralStore.saveCode(code, referrerId);

  res.json({ success: true, code });
});

module.exports = router;
