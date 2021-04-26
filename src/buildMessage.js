/**
 ** Slack message construction module
 ** Responsible for create the Slack message sent
 **/

module.exports = function (data) {
  return {
    text: `ACTIONS*\n\n${data.total_minutes_used} of ${data.included_minutes}\n\n*DATA TRANSFER OUT INCLUDED*\n\n${data.total_gigabytes_bandwidth_used}GB of ${data.included_gigabytes_bandwidth}GB\n\n*INCLUDED STORAGE*\n\n${data.estimated_storage_for_month}GB of 50GB`,
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
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*ACTIONS*",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Minutes consumed:*",
          },
          {
            type: "mrkdwn",
            text: `${data.total_minutes_used} of ${data.included_minutes} minutes\n_Private used_`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*OS breakdown:*",
          },
          {
            type: "plain_text",
            text: `:ubuntu: ${data.minutes_used_breakdown.UBUNTU}\n :appleinc: ${data.minutes_used_breakdown.MACOS}\n :windows: ${data.minutes_used_breakdown.WINDOWS}`,
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
        text: {
          type: "mrkdwn",
          text: "*DATA TRANSFER OUT*",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Data consumed:*",
          },
          {
            type: "mrkdwn",
            text: `${data.total_gigabytes_bandwidth_used}GB of ${data.included_gigabytes_bandwidth}GB\n_Used in Packages_`,
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
        text: {
          type: "mrkdwn",
          text: "*STORAGE*",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Storage consumed:*",
          },
          {
            type: "mrkdwn",
            text: `${data.estimated_storage_for_month}GB of 50GB\n_Used in Actions and Packages_`,
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
  };
};
