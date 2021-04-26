const buildMessage = require("../src/buildMessage");

const enterpriseDataObj = {
  total_gigabytes_bandwidth_used: 5,
  total_paid_gigabytes_bandwidth_used: 0,
  included_gigabytes_bandwidth: 100,
  days_left_in_billing_cycle: 13,
  estimated_paid_storage_for_month: 0,
  estimated_storage_for_month: 45,
  total_minutes_used: 41238,
  total_paid_minutes_used: 0,
  included_minutes: 50000,
  minutes_used_breakdown: { MACOS: 1440, UBUNTU: 39744, WINDOWS: 54 },
};

describe("buildMessage", () => {
  it("should return the correct message strucuture and content", async () => {
    expect(buildMessage(enterpriseDataObj)).toEqual({
      text:
        "ACTIONS*\n\n41238 of 50000\n\n*DATA TRANSFER OUT INCLUDED*\n\n5GB of 100GB\n\n*INCLUDED STORAGE*\n\n45GB of 50GB",
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "─────────────────────────────────────────────",
          },
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":github: GitHub Enterprise usage data",
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "─────────────────────────────────────────────",
          },
        },
        { type: "section", text: { type: "mrkdwn", text: "*ACTIONS*" } },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: "*Minutes consumed:*" },
            {
              type: "mrkdwn",
              text: "41238 of 50000 minutes\n_Private used_",
            },
          ],
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: "*OS breakdown:*" },
            {
              type: "plain_text",
              text: ":ubuntu: 39744\n :appleinc: 1440\n :windows: 54",
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "─────────────────────────────────────────────",
          },
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: "*DATA TRANSFER OUT*" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: "*Data consumed:*" },
            { type: "mrkdwn", text: "5GB of 100GB\n_Used in Packages_" },
          ],
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "─────────────────────────────────────────────",
          },
        },
        { type: "section", text: { type: "mrkdwn", text: "*STORAGE*" } },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: "*Storage consumed:*" },
            {
              type: "mrkdwn",
              text: "45GB of 50GB\n_Used in Actions and Packages_",
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "─────────────────────────────────────────────",
          },
        },
      ],
    });
  });
});
