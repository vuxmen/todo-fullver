import { PropTypes } from 'prop-types';
import React from 'react';
import { Input, Label, FormGroup, FormFeedback } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defautProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

export default function InputField (props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name]; 

    return (
        <FormGroup>
            {label && <Label for = {name}>{label}</Label>}
            <Input 
                id={name}
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}

                invalid={showError}
            />
            {showError && <FormFeedback>{errors[name]}</FormFeedback>}

        </FormGroup>
    );
}