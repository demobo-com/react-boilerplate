/**
*
* LoginLayout Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tabs, Icon } from 'antd';
import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import './style.scss';

const TabPane = Tabs.TabPane;

function LoginLayout(props) {
  const { onChange, tabPanes = [] } = props;
  return (
    <div className="login-layout page-container">
      <div className="login-tabs" >
        <Row type="flex" justify="center" >
          <Col span="24">
            {/* tabBarStyle={{ width: '50%' }}  */}
            <Tabs onChange={onChange} type="card" size="large" >
              {
                tabPanes.map(({ key = index, iconType = '', children = '' }, index) => {
                  const tab = (
                    <span className="font-bold">
                      { iconType && <Icon type={iconType} /> }
                      <TranslatedMessage messages={messages} messageId={key} />
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

LoginLayout.propTypes = {
  onChange: PropTypes.func,
  tabPanes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    iconType: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.string,
    ]),
  })),
};

export default LoginLayout;
