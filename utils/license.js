// function to render License Badges
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT:'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0':'https://img.shields.io/badge/License-Apache%202.0-blue.svg',

    None: ''
  };

  const badgeURL = licenseBadges[license];

  return `(${badgeURL})`;
  
}

// function to render License Links
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[License: MIT] (https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[License: Apache 2.0] (https://opensource.org/licenses/Apache-2.0)',
    
    None: ''
  
  };

  const licenseURL = licenseLinks[license];

  return `(${licenseURL})`;
}

// function to render License Section
function renderLicenseSection(license) {
  const licenseSection = {
  badge: `${renderLicenseBadge}`, 
  link: `${renderLicenseLink}`,
  None: ''

};

const licenseRender = licenseSection[license];

return `[License](${licenseRender})`;
}

// export to index.js
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
