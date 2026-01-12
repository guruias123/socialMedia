import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FormField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    options = [],
    error,
    placeholder,
    as,
    ...rest
}) => {
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">{label}:</Form.Label>
            <Col sm="9">
                {type === 'select' ? (
                    <Form.Control
                        as="select"
                        name={name}
                        value={value}
                        onChange={onChange}
                        isInvalid={!!error}
                        style={{ color: value === "" ? "#6c757d" : "#333" }}
                        {...rest}
                    >
                        <option value="" style={{ color: "#6c757d" }}>Select...</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value} style={{ color: "#333" }}>
                                {opt.label}
                            </option>
                        ))}
                    </Form.Control>
                ) : (
                    <Form.Control
                        as={as || (type === 'textarea' ? 'textarea' : 'input')}
                        type={type !== 'textarea' && type !== 'select' ? type : undefined}
                        name={name}
                        value={value}
                        onChange={onChange}
                        isInvalid={!!error}
                        placeholder={placeholder}
                        {...rest}
                    />
                )}
                <Form.Control.Feedback type="invalid">
                    {error || "This field is Mandatory"}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
};

export default FormField;
