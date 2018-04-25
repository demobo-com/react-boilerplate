/**
*
* TranslatedMessage
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { FormattedPlural } from 'react-intl';

import TranslatedMessage from '../';
import messages from './messages';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('messages and messageId',
    withInfo('messages and messageId state')(
      () => (
        <TranslatedMessage messages={messages} messageId="login" />
      )
    )
  )
  .add('id only',
    withInfo('id only state')(
      () => (
        <TranslatedMessage id="app.components.IntroductionModule.teamInfo" />
      )
    )
  )
  .add('unit and value',
    withInfo('unit and value state')(
      () => (
        <TranslatedMessage id="app.values.fraction" values={{ numerator: 3, denominator: 8 }} />
      )
    )
  )
  .add('multiline',
    withInfo('multiline')(
      () => (
        <TranslatedMessage id="app.sentence.sample" tagName="pre" />
      )
    )
  )
  .add('number',
    withInfo('expected: 1,000,000,000,000Days')(
      () => (
        <TranslatedMessage type="number" value={1000000000000} unit="days" />
      )
    )
  )
  .add('plural',
    withInfo('expected: 1 day 2 days 1天 2天')(
      () => (
        <div>
          <TranslatedMessage type="number" value={1000000000000} unit="day" /><br />
          <TranslatedMessage type="number" isPlural value={0} unit="day" /><br />
          <TranslatedMessage type="number" isPlural value={1} unit="day" /><br />
          <TranslatedMessage type="number" isPlural value={2} unit="day" /><br />
          <TranslatedMessage type="number" isPlural value={10000} unit="day" />
        </div>
      )
    )
  )
  .add('dollar',
    withInfo('expected: $1,000,000,000,000')(
      () => (
        <TranslatedMessage type="number" value={1000000000000} unit="dollar" />
      )
    )
  )
  .add('dateTime',
    withInfo('expected: 2/18/2018 2018年2月18日')(
      () => (
        <TranslatedMessage type="dateTime" value="2018-02-18" />
      )
    )
  )
  .add('FormattedPlural',
    withInfo('FormattedPlural: 2/18/2018 2018年2月18日')(
      () => (
        <div>
          <FormattedPlural
            value={0}
            other="other"
            zero="zero"
            one="one"
            two="two"
          /><br />
          <FormattedPlural
            value={1}
            other="other"
            zero="zero"
            one="one"
            two="two"
          /><br />
          <FormattedPlural
            value={2}
            other="other"
            zero="zero"
            one="one"
            two="two"
          /><br />
          <FormattedPlural
            value={10}
            other="other"
            zero="zero"
            one="one"
            two="two"
          /><br />
          <FormattedPlural
            value={-1}
            other="other"
            zero="zero"
            one="one"
            two="two"
          />
        </div>
      )
    )
  );
