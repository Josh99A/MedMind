import { Field } from 'formik';
import { Button } from 'react-bootstrap';

const Checkbox = (props) => {
  const { label, name, dataSet, errors } = props;
  return (
    <div className="mb-3">
      <label htmlFor="Services" className="form-label">
        {label}
      </label>
      <div role="group" aria-labelledby="checkbox-group">
        {dataSet.map((item, index) => (
          <label
            className="d-flex flex-row align-items-center mb-2"
            key={index}
          >
            <Field
              className="form-check-input"
              type="checkbox"
              name={name}
              value={item.value}
            />
            <div className="ps-3">
              {item.label} <br />
              <small className="text-muted" style={{ fontSize: 10 }}>
                {item.description}
              </small>
            </div>
          </label>
        ))}
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </div>
  );
};

const Dropdown = (props) => {
  const { name, label, errors, className, dataSet } = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field as="select" className="form-select" name={name}>
          <option value="">Choose an option</option>
          {dataSet.map((dataItem, index) => (
            <option value={dataItem.label} key={index}>
              {dataItem.label}
            </option>
          ))}
        </Field>
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

const NextButton = (props) => {
  return (
    <Button className="rounded-pill col-md-4 my-1" type="submit">
      Next
    </Button>
  );
};

const PreviousButton = (props) => {
  const { onClick } = props;
  return (
    <Button
      variant="outline-primary"
      className="rounded-pill col-md-4 my-1"
      onClick={onClick}
    >
      Previous
    </Button>
  );
};

const TextArea = (props) => {
  const { name, label, errors, placeholder, type, className } = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          as="textarea"
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
          rows="3"
        />
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

const TextField = (props) => {
  const { name, label, errors, placeholder, type, className} = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
        />
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

export { TextField, Dropdown, TextArea, PreviousButton, NextButton, Checkbox };
