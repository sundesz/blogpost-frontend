import { ErrorMessage, Field } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {
  FileProps,
  InputProps,
  SelectProps,
  TextAreaProps,
} from '../types/formHelper';

const GRID_LEFT = 4;
const GRID_RIGHT = 8;
export const SUPPORTED_IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

/**
 * Input type custom
 */
export const CustomInputField = ({
  id,
  field,
  placeholder,
  type = 'text',
}: InputProps): JSX.Element => {
  return (
    <>
      <Field
        id={id}
        className="form-control"
        placeholder={placeholder}
        type={type}
        {...field}
      />

      <div style={{ color: 'red' }}>
        <ErrorMessage name={field.name} />
      </div>
    </>
  );
};

/**
 * Input type "text"
 */
export const InputField = ({
  id,
  field,
  type = 'text',
  bootstrapClass = 'form-control',
  placeholder,
  label,
}: InputProps): JSX.Element => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={GRID_LEFT}>
        {label}
      </Form.Label>
      <Col sm={GRID_RIGHT}>
        <Field
          id={id}
          className={bootstrapClass}
          placeholder={placeholder}
          type={type}
          {...field}
        />

        <div style={{ color: 'red' }}>
          <ErrorMessage name={field.name} />
        </div>
      </Col>
    </Form.Group>
  );
};

/**
 * Input type "text area"
 */
export const TextAreaField = ({
  id,
  field,
  placeholder,
  label,
  rows = 15,
}: TextAreaProps): JSX.Element => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={GRID_LEFT}>
        {label}
      </Form.Label>
      <Col sm={GRID_RIGHT}>
        <Field
          id={id}
          className="form-control"
          placeholder={placeholder}
          rows={rows}
          component="textarea"
          {...field}
        />

        <div style={{ color: 'red' }}>
          <ErrorMessage name={field.name} />
        </div>
      </Col>
    </Form.Group>
  );
};

/**
 * Input type "select"
 */
export const SelectField = ({
  id,
  field,
  label,
  disabledValue = false,
  selectOptions,
}: SelectProps): JSX.Element => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={GRID_LEFT}>
        {label}
      </Form.Label>
      <Col sm={GRID_RIGHT}>
        <Field
          id={id}
          className="form-select"
          as="select"
          {...field}
          disabled={disabledValue}
        >
          <option value="">Select ...</option>
          {selectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </Field>

        <div style={{ color: 'red' }}>
          <ErrorMessage name={field.name} />
        </div>
      </Col>
    </Form.Group>
  );
};

/**
 * Handle change for file upload
 */
const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: any
) => {
  const file = event.currentTarget.files && event.currentTarget.files[0];
  if (file) {
    setFieldValue('image', file);
  }
};

/**
 * Input type "file"
 */
export const FileField = ({
  id,
  field,
  label,
  acceptType,
  formikProps,
}: FileProps): JSX.Element => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={GRID_LEFT}>
        {label}
      </Form.Label>
      <Col sm={GRID_RIGHT}>
        <input
          id={id}
          type="file"
          className="form-control"
          accept={acceptType}
          onChange={(event) =>
            handleFileChange(event, formikProps.setFieldValue)
          }
        />

        <div style={{ color: 'red' }}>
          <ErrorMessage name={field.name} />
        </div>
      </Col>
    </Form.Group>
  );
};

export const SubmitButton = ({
  id,
  name,
}: {
  id?: string;
  name: string;
}): JSX.Element => {
  return (
    <div className="mb-3 row">
      <Col sm={{ span: GRID_RIGHT, offset: GRID_LEFT }}>
        <Button id={id} type="submit">
          {name}
        </Button>
      </Col>
    </div>
  );
};
