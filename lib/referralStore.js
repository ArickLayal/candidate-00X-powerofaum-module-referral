const referrals = {}; // code -> { referrerId, uses }
const referrerCodes = {}; // referrerId -> code

function saveCode(code, referrerId) {
  referrals[code] = { referrerId, uses: 0 };
  referrerCodes[referrerId] = code;
}

function redeemCode(code) {
  if (!referrals[code]) return false;
  referrals[code].uses += 1;
  return true;
}

function getMetrics(referrerId) {
  const code = referrerCodes[referrerId];
  if (!code || !referrals[code]) {
    return {
      referrerId,
      totalUses: 0,
      referrals: []
    };
  }

  return {
    referrerId,
    referralCode: code,
    totalUses: referrals[code].uses,
    referrals: ["mock_user_1", "mock_user_2"] // can replace with real users if needed
  };
}

module.exports = {
  saveCode,
  redeemCode,
  getMetrics
};
