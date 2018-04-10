import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form/immutable';
import { Form } from 'antd';
import _ from 'lodash';

// import TranslatedMessage from 'components/TranslatedMessage';
import TextInput from './TextInput';
// import CheckboxInput from './CheckboxInput';
// import RadioInput from './RadioInput';
import NumberInput from './NumberInput';
// import DateInput2 from './DateInput2';
// import TableInput from './TableInput';
// import ArrayInput from './ArrayInput';
// import SelectInput from './SelectInput';
import SelectInput from './SelectInput';
// import SelectHorizontal from './SelectHorizontal';
// import TextArea from './TextArea';
// import EditableTextArea from './EditableTextArea';
// import FileField from './FileField';
// import Static from './Static';
// import Hidden from './Hidden';
// import Step from './Step';
// import EditableCard from './EditableCard';
// import ProfileLogoFile from './ProfileLogoFile';
import Avatar from './Avatar';
import SwitchButton from './SwitchButton';
// import messages from './messages';
import './style.scss';

const FormItem = Form.Item;

const allFields = {
  textInput: TextInput,
  // email: TextInput,
  passwordInput: TextInput,
  // checkbox: CheckboxInput,
  // radioInput: RadioInput,
  numberInput: NumberInput,
  // numberNoSpin: NumberInput,
  // date: DateInput2,
  // table: TableInput,
  // array: ArrayInput,
  // selectInput: SelectInput,
  selectInput: SelectInput,
  // selectHorizontal: SelectHorizontal,
  // textArea: TextArea,
  // editableTextArea: EditableTextArea,
  // file: FileField,
  // static: Static,
  // hidden: Hidden,
  // step: Step,
  // editableCard: EditableCard,
  // profileLogo: ProfileLogoFile,
  switchButton: SwitchButton,
  avatar: Avatar,
};

export const Group = ({ fieldsObject, ...otherProps }) => {
  const renderFieldObject = (fieldObject, name) => {
    const isRequired = fieldObject.validate ? fieldObject.validate.some((d) => d.name === 'isRequired') : false;
    if (fieldObject.isFieldArray) {
      return (
        <FieldArray isRequired={isRequired} {...fieldObject} {...otherProps} component={allFields[fieldObject.type]} key={name} name={name} />
      );
    }
    return (
      <Field isRequired={isRequired} {...fieldObject} {...otherProps} component={allFields[fieldObject.type]} key={name} name={name} />
    );
  };

  return (
    <FormItem>
      {_.map(fieldsObject, renderFieldObject)}
    </FormItem>
  );
};

Group.propTypes = {
  fieldsObject: PropTypes.object,
};

// const AntDesignFormField = ({ input, type, placeholder, meta: { dirty, error } }) => { // only for SignUpForm
const AntDesignFormField = () => (
  // const errMsg = messages[error] ? <TranslatedMessage messages={messages} messageId={error} tagName="span" /> : error;
  <FormItem bsSize="large">
    {/* <FormControl type={type} placeholder={placeholder} {...input} /> */}
    {/* {dirty && <div className="text-danger error">{errMsg}</div>} */}
  </FormItem>
  );

AntDesignFormField.propTypes = {
  input: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.any,
};

export default AntDesignFormField;
