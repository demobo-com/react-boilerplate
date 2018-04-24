/**
*
* Button
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];

storiesOf(componentPath, module)
// .addWithInfo('test', `<h1>button</h1>`, () => (<Button onClick={action('Button was clicked')} label="register" />));
.add('register default Button',
withInfo('register default Button')(
  () => (<Button onClick={action('Button was clicked')} label="register" />)
))
.add('bordered Button',
withInfo('bordered Button')(
  () => (<Button onClick={action('Button was clicked')} label="register" hasBorder />)
))
.add('primary small Button',
withInfo('Notes for primary small state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" size="small" />)
))
.add('primary middle Button',
withInfo('Notes for primary small state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" />)
))
.add('primary large Button',
withInfo('Notes for primary large state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" size="large" />)
))
.add('waring Button',
withInfo('warining state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="warning" />)
))
.add('danger Button',
  withInfo('danger state')(
    () => (<Button onClick={action('Button was clicked')} label="logIn" type="danger" />)
))
.add('highlight Button',
  withInfo('highlight state')(
    () => (<Button onClick={action('Button was clicked')} label="logIn" type="highlight" />)
))
.add('loading primary Button',
withInfo('loading state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" loading type="primary" />)
))
.add('disabled Button',
withInfo('Notes for disabled state')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" disabled />)
))
.add('100% width Button',
withInfo('100% width primary Button')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" width="100%" />)
))
.add('100px width primary Button',
withInfo('100px width Button')(
  () => (<Button onClick={action('Button was clicked')} label="logIn" type="primary" width="100px" />)
));
