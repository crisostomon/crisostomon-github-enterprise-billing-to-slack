/**
 ** GitHub Enterprise usage data module
 ** Responsible for getting all the data needed from the GitHub API
 **/

async function getEnterpriseUsageData(octokit, enterprise) {
  let enterpriseData = {};

  const actionsData = await getEnterpriseActionsData(octokit, enterprise);

  const storageData = await getEnterpriseSharedStorageData(octokit, enterprise);

  const packagesData = await getEnterprisePackagesData(octokit, enterprise);

  enterpriseData = {
    ...packagesData.data,
    ...storageData.data,
    ...actionsData.data,
  };

  return enterpriseData;
}

async function getEnterpriseActionsData(octokit, enterprise) {
  return await octokit.request(
    "GET /enterprises/{enterprise}/settings/billing/actions",
    {
      enterprise: enterprise,
    }
  );
}

async function getEnterpriseSharedStorageData(octokit, enterprise) {
  return await octokit.request(
    "GET /enterprises/{enterprise}/settings/billing/shared-storage",
    {
      enterprise: enterprise,
    }
  );
}

async function getEnterprisePackagesData(octokit, enterprise) {
  return await octokit.request(
    "GET /enterprises/{enterprise}/settings/billing/packages",
    {
      enterprise: enterprise,
    }
  );
}
module.exports = {
  getEnterpriseUsageData,
  getEnterpriseActionsData,
  getEnterpriseSharedStorageData,
  getEnterprisePackagesData,
};
