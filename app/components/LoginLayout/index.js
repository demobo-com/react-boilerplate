/**
*
* LoginLayout Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Row, Col, Tabs, Icon } from 'antd';

import TranslatedMessage, { formatMessage } from 'components/TranslatedMessage';
import messages from './messages';
import './style.scss';

const TabPane = Tabs.TabPane;

function LoginLayout(props) {
  const { intl, helmetTitleId, helmetContent, onChange, tabPanes, children } = props;
  return (
    <div className="login-layout">
      <Helmet
        title={formatMessage(intl, messages, helmetTitleId)}
        meta={[
          { name: 'description', content: helmetContent },
        ]}
      />
      <div className="login-tabs" >
        <Row type="flex" align="middle" justify="center" >
          <Col span="24">
            <Tabs onChange={onChange} type="card" forceRender="false" >
              {
                tabPanes.map(({ key = index, iconType = '' }, index) => {
                  const translationId = `app.components.LoginLayout.${key}`;
                  const tab = (
                    <span className="font-bold">
                      { iconType && <Icon type={iconType} /> }
                      <TranslatedMessage id={translationId} />
                    </span>
                  );
                  return (
                    <TabPane tab={tab} key={key} >
                      <Row type="flex" justify="center" >
                        <Col span="18">
                          { children }
                        </Col>
                      </Row>
                    </TabPane>
                  );
                })
              }
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
}

LoginLayout.defaultProps = {
  helmetTitleId: 'logInPage',
  helmetContent: 'logInPage content',
  onChange: (key) => key,
  tabPanes: [],
  children: <div></div>,
};

LoginLayout.propTypes = {
  intl: intlShape.isRequired,
  helmetTitleId: PropTypes.string,
  helmetContent: PropTypes.string,
  onChange: PropTypes.func,
  tabPanes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    iconType: PropTypes.string,
  })),
  children: PropTypes.any,
};

export default compose(
  injectIntl,
)(LoginLayout);
