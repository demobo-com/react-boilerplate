/**
*
* Button
*
*/

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withNotes} from '@storybook/addon-notes';
import Button from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
const opt = {

}
storiesOf(componentPath, module)
.add('login Button', withNotes('Notes for Normal state')(() => (<Button onClick={action('Button was clicked')} type="primary" label="登录" text="login" className="primaryButton"/>)))
.add('register Button', withNotes('Notes for Normal state')(() => (<Button onClick={action('Button was clicked')} type="primary" label="立即注册" text="register" className="primaryButton"/>)))
.add('purchase Button', withNotes('Notes for Normal state')(() => (<Button onClick={action('Button was clicked')} type="primary" label="立即购买" text="purchase" className="primaryButton"/>)));
