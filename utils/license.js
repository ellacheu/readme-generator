// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT:'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0':'https://img.shields.io/badge/License-Apache%202.0-blue.svg',

    None: ''
  };

  const badgeURL = licenseBadges[license];

  return `(${badgeURL})`;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[License: MIT] (https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[License: Apache 2.0] (https://opensource.org/licenses/Apache-2.0)',
    
    None: ''
  
  };

  const licenseURL = licenseLinks[license];

  return `(${licenseURL})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
  badge: `${renderLicenseBadge}`, 
  link: `${renderLicenseLink}`,
  None: ''

};

const licenseRender = licenseSection[license];

return `[License](${licenseRender})`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
