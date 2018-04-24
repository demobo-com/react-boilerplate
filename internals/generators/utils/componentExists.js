/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../../app/containers'));
const pageForms = fs.readdirSync(path.join(__dirname, '../../../app/forms'));
const pageFormFields = fs.readdirSync(path.join(__dirname, '../../../app/forms/formFields'));
const appImages = fs.readdirSync(path.join(__dirname, '../../../app/images'));
const components = pageComponents.concat(pageContainers).concat(pageForms).concat(appImages).concat(pageFormFields);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
