/**
*
* ProfileForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  reduxForm,
} from 'redux-form/immutable';
import pick from 'lodash/pick';
import { Row, Col } from 'antd';

import {
  loadFormAction,
  updateFormAction,
} from 'containers/App/actions';
import Button from 'components/Button';
import Loader from 'components/Loader';
import formValidators from 'utils/formValidators';
import * as FormField from 'forms/formFields/AntDesign';
import './style.scss';

const {
  isRequired,
  isPhone,
} = formValidators;

const formFieldsObject = {
  logo: {
    type: 'avatar',
    // validate: [isRequired],
    hasLabel: true,
    icon: 'user',
    width: 40,
    height: 40,
  },
  nickName: {
    type: 'textInput',
    validate: [isRequired],
    hasLabel: true,
    placeholder: 'placeholderNickName',
    className: 'ant-col-8',
  },
  phoneNumber: {
    type: 'textInput',
    validate: [isRequired, isPhone],
    hasLabel: true,
    placeholder: 'placeholderPhoneNumber',
    className: 'ant-col-8 ant-col-offset-4',
  },
  firstName: {
    type: 'textInput',
    validate: [isRequired],
    hasLabel: true,
    placeholder: 'placeholderFirstName',
    className: 'ant-col-8',
  },
  lastName: {
    type: 'textInput',
    validate: [isRequired],
    hasLabel: true,
    placeholder: 'placeholderLastName',
    className: 'ant-col-8 ant-col-offset-4',
  },
};

class ProfileForm extends React.Component {
  componentDidMount() {
    this.props.onMount(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { authUserId: CurrentAuthUserId } = this.props;
    const { authUserId } = nextProps;
    if (!CurrentAuthUserId && CurrentAuthUserId !== authUserId) {
      this.props.onMount(this.props);
    }
  }

  render() {
    const { initialized, handleSubmit, dirty, isLoading, ...otherProps } = this.props;
    const pickIds = ['logo', 'nickName', 'phoneNumber', 'firstName', 'lastName'];
    const groups = {
      sample: pick(formFieldsObject, pickIds),
    };
    const keys = Object.keys(groups);

    return (
      <div className="profile-form">
        { !initialized && <Loader /> }
        <form onSubmit={handleSubmit}>
          {Object.values(groups).map((group, i) =>
            <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
          )}
          <Row>
            <Col span="4">
              <Button htmlType="submit" type="primary" width="100%" disabled={!dirty} label="save" loading={isLoading} />
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const getFirebaseEndPoint = (props) => ['users', props.authUserId];
const getReduxEndPoint = (props) => ['app', 'users', props.authUserId];

ProfileForm.defaultProps = {
  isLoading: false,
};

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool,
  initialized: PropTypes.bool,
  authUserId: PropTypes.string,
  isLoading: PropTypes.bool,
  onMount: PropTypes.func,
  onUpload: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    onMount: (props) =>
      dispatch(loadFormAction(getFirebaseEndPoint(props), getReduxEndPoint(props))),
    onSubmit: (formMap, _dispatch, props) =>
      dispatch(updateFormAction(formMap, getFirebaseEndPoint(props), getReduxEndPoint(props))),
  };
}

const form = injectIntl(reduxForm({
  form: 'ProfileForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ProfileForm));

const connectedForm = connect((state, props) => ({
  initialValues: state.getIn(getReduxEndPoint(props)),
}))(form);

export default connect(mapStateToProps, mapDispatchToProps)(connectedForm);
