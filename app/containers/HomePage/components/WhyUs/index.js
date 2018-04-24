/**
*
* WhyUs Stateless Component
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Card } from 'antd';

import TranslatedMessage from 'components/TranslatedMessage';
import './style.scss';
import { CARDS } from '../../constants';

const { Meta } = Card;

function WhyUs() {
  return (
    <div className="why-us">
      <h1>
        <TranslatedMessage id="app.components.WhyUs.header" />
      </h1>
      <Row
        type="flex"
        justify="center"
        style={{ paddingBottom: 30 }}
        className="displayCard"
      >
        {
          CARDS.map((card) => (<Card
            hoverable="hoverable"
            bordered="bordered"
            key={card.title}
            style={{
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <Meta
              title={
                <TranslatedMessage id={`app.components.WhyUs.${card.title}`} />
                }
              description={
                <TranslatedMessage id={`app.components.WhyUs.${card.title}`} />
                }
            />
          </Card>))
        }
      </Row>
    </div>
  );
}

WhyUs.propTypes = {

};

export default WhyUs;
