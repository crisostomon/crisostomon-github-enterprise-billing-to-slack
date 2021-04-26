# GitHub Enterprise Billing to Slack

This action allows sending a message to a Slack channel using Slack's Webhook containing usage data from a GitHub Enterprise.

## Usage

```yaml
name: Send GitHub Enterprise Usage data to Slack

on:
  workflow_dispatch:
  
jobs:
  send-slack-message:
    runs-on: ubuntu-latest

    steps:
      - name: Run action
        uses: crisostomon/github-enterprise-billing-to-slack@main
        with:
          enterprise: 'enterprise'
          enterprise_admin_token: ${{ secrets.ENTERPRISE_TOKEN }}
          slack_webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
```
## Workflow options

You can change these options in the workflow `.yml` file to meet your Enterprise configuration. **They are all mandatory.**
| Setting | Description |
| --- | --- |
| `enterprise` | The name of the Enterprise |
| `enterprise_admin_token` | The personal access token |
| `slack_webhook_url` | The Slack Webhook URL defined in `Slack API APP settings -> Incoming Webhooks` |

## GitHub token permissions

The `enterprise_admin_token` is a Personal Access Token (PAT) that needs to be generated with the following permissions: `admin:enterprise` (`manage_billing:enterprise` and `read:enterprise`).