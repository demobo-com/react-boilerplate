/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected form component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'AbcForm',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const componentTemplate = './form/form.js.hbs';

    const actions = [{
      type: 'add',
      path: '../../app/forms/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/forms/{{properCase name}}/tests/index.test.js',
      templateFile: './form/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/forms/{{properCase name}}/stories/index.story.js',
      templateFile: './forms/story.js.hbs',
      abortOnFail: true,
    }];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/forms/{{properCase name}}/messages.js',
        templateFile: './form/messages.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
