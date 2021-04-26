const enterpriseData = require("../src/enterpriseData");
jest.mock("../src/enterpriseData");

describe("enterpriseData", () => {
  const octokit = {};
  const enterprise = "enterprise";
  const actionsData = {
    total_minutes_used: 41238,
    total_paid_minutes_used: 0,
    included_minutes: 50000,
    minutes_used_breakdown: {
      MACOS: 1440,
      UBUNTU: 39744,
      WINDOWS: 54,
    },
  };
  const storageData = {
    days_left_in_billing_cycle: 13,
    estimated_paid_storage_for_month: 0,
    estimated_storage_for_month: 45,
  };
  const packagesData = {
    total_gigabytes_bandwidth_used: 5,
    total_paid_gigabytes_bandwidth_used: 0,
    included_gigabytes_bandwidth: 100,
  };
});
