"use strict";

const core = require("@actions/core");
const github = require("@actions/github");
const enterpriseData = require("./enterpriseData");
const buildMessage = require("./buildMessage");
const slackWebhook = require("@slack/webhook");
(async () => {
  try {
    const enterprise = core.getInput("enterprise");
    const githubToken = core.getInput("enterprise_admin_token");
    const webhookUrl = core.getInput("slack_webhook_url");
    const octokit = github.getOctokit(githubToken);
    const webhook = new slackWebhook.IncomingWebhook(webhookUrl);

    const githubEnterpriseData = await enterpriseData.getEnterpriseUsageData(
      octokit,
      enterprise
    );

    core.info(JSON.stringify(githubEnterpriseData));

    const slackMessage = buildMessage(githubEnterpriseData);

    const result = await webhook.send(slackMessage);

    core.info(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    core.setFailed(error);
  }
})();
