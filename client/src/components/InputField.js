import React from 'react';
import Form from 'react-bootstrap/Form';

function InputField({ name, label, type, placeholder, error, fieldRef }) {
  return (
    <Form.Group controlId={name} className="my-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type || 'text'}
        placeholder={placeholder}
        ref={fieldRef}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
}

export default InputField;
