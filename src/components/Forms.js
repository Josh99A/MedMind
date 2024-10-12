import { Button, Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Attachment from './Attachment';
import {
  Checkbox,
  Dropdown,
  NextButton,
  PreviousButton,
  TextArea,
  TextField,
} from './FormComponents';
import { ButtonSpinner } from './SpinnerComponents';

import './../assets/styles/KYC.css';
import './../assets/styles/icons.css';

import { countries } from '../constants/countries';
import { nationalities } from '../constants/nationalities';
import {
  defaultFormData,
  regions,
  sectors,
  services,
} from '../constants/Datasets';

import {
  directorValidationSchema,
  businessValidationSchema,
  addressValidationSchema,
  ServicesValidationSchema,
  LoginValidationSchema,
} from '../validation/ValidationSchemas';

import { updateForm } from '../store/slices/kyc';
import { postApplication } from '../store/slices/application';

import { sendRedirectEmail } from '../helper/requests';

function DirectorInfoForm(props) {
  const dispatch = useDispatch();

  const { setActiveKey } = props;

  const handleNext = () => {
    setActiveKey('bInfo');
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          AgentNin: '',
          DateOfBirth: '',
          Sex: '',
          Nationality: '',
          Residence: '',
        }}
        validationSchema={directorValidationSchema}
        onSubmit={(values) => {
          dispatch(
            updateForm({
              ...values,
              DirectorName: `${values.firstName} ${values.lastName}`,
              Sex: values.Sex === 'male' ? 1 : 2,
              DateOfBirth: new Date(values.DateOfBirth).toISOString(),
              ...defaultFormData,
            })
          );
          handleNext();
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="John"
                errors={errors}
                type="text"
                className="col-md-6"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>
            <TextField
              name="AgentNin"
              label="ID Number"
              placeholder="ID Number"
              errors={errors}
              type="text"
            />
            <TextField
              name="DateOfBirth"
              label="Date of Birth"
              errors={errors}
              type="date"
            />

            <div className="mb-3">
              <div className="row align-items-center">
                <div className="col-3 form-label" id="my-radio-group">
                  Gender
                </div>
                <div className="form-check form-check-inline col-3">
                  <label>
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="Sex"
                      value="male"
                    />
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline col-3">
                  <label>
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="Sex"
                      value="female"
                    />
                    Female
                  </label>
                </div>
              </div>
              {errors.Sex && (
                <div className="text-danger" id="feedback">
                  {errors.Sex}
                </div>
              )}
            </div>

            <div className="row">
              <Dropdown
                name="Nationality"
                label="Nationality"
                errors={errors}
                dataSet={nationalities}
                className="col-md-6"
              />

              <Dropdown
                name="Residence"
                label="Country of Residence"
                errors={errors}
                className="col-md-6"
                dataSet={countries}
              />
            </div>

            <hr />

            <div className="row justify-content-around">
              <Button
                variant="outline-primary"
                className="rounded-pill col-md-4 my-1"
              >
                Cancel
              </Button>
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function BusinessInfoForm(props) {
  const dispatch = useDispatch();
  const { setActiveKey } = props;

  const handleNext = () => {
    setActiveKey('aInfo');
  };

  const handlePrevious = () => {
    setActiveKey('dInfo');
  };

  return (
    <div>
      <p className="h5">Business Information</p>
      <Formik
        initialValues={{
          AgentName: '',
          Email: '',
          Phone: '',
          TIN_No: '',
          CompanyRegistrationNumber: '',
          NatureofBusiness: '',
          BusinessSector: '',
        }}
        validationSchema={businessValidationSchema}
        onSubmit={(values) => {
          dispatch(updateForm(values));
          handleNext();
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              name="AgentName"
              label="Business Name"
              placeholder="John & Sons Ltd"
              errors={errors}
              type="text"
            />

            <div className="row">
              <TextField
                name="Email"
                label="Business Email"
                placeholder="info@business.com"
                errors={errors}
                type="email"
                className="col-md-6"
              />
              <TextField
                name="Phone"
                label="Business Phone Number"
                placeholder="0712345678"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>

            <div className="row">
              <TextField
                name="CompanyRegistrationNumber"
                label="URSB Number"
                placeholder=""
                errors={errors}
                type="text"
                className="col-md-6"
              />
              <TextField
                name="TIN_No"
                label="Tax Identification Number (TIN)"
                placeholder="1023456789"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>
            <Dropdown
              name="BusinessSector"
              label="Business Sector"
              errors={errors}
              dataSet={sectors}
            />
            <TextArea
              name="NatureofBusiness"
              label="Business Description"
              errors={errors}
            />

            <hr />

            <div className="row justify-content-around">
              <PreviousButton onClick={handlePrevious} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function AddressInfoForm(props) {
  const dispatch = useDispatch();
  const { setActiveKey } = props;

  const handleNext = () => {
    setActiveKey('sInfo');
  };

  const handlePrevious = () => {
    setActiveKey('bInfo');
  };

  return (
    <div>
      <p className="h5">Address Information</p>
      <Formik
        initialValues={{
          Region: '',
          PhysicalLocation: '',
          PostalAddress: '',
        }}
        validationSchema={addressValidationSchema}
        onSubmit={(values) => {
          dispatch(updateForm(values));
          handleNext();
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Dropdown
                name="Region"
                label="Region"
                errors={errors}
                dataSet={regions}
                className="col-md-6"
              />

              <TextField
                name="PhysicalLocation"
                label="Physical Address"
                placeholder="Plot 44 Kampala Road"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>

            <TextField
              name="PostalAddress"
              label="P.O. Box"
              placeholder="1200, Kampala"
              errors={errors}
              type="text"
            />

            <hr />

            <div className="row justify-content-around">
              <PreviousButton onClick={handlePrevious} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function ServicesForm(props) {
  const dispatch = useDispatch();

  const { setActiveKey } = props;

  const handleNext = () => {
    setActiveKey('docs');
  };

  const handlePrevious = () => {
    setActiveKey('aInfo');
  };

  return (
    <div>
      <p className="h5">Services Selection</p>
      <Formik
        validationSchema={ServicesValidationSchema}
        initialValues={{
          Services: [],
        }}
        onSubmit={(values) => {
          let Services = values.Services;
          dispatch(updateForm({ ...values, Services: { ...Services } }));
          handleNext();
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Checkbox
              label="Select one or more services"
              name="Services"
              dataSet={services}
              errors={errors}
            />

            <hr />

            <div className="row justify-content-around">
              <PreviousButton onClick={handlePrevious} />

              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function DocumentsForm(props) {
  const dispatch = useDispatch();
  const { setActiveKey } = props;
  const { isLoading, error } = useSelector((store) => store.postApp);

  const handlePrevious = () => {
    setActiveKey('sInfo');
  };

  const formData = useSelector((store) => store.kyc.formData);
  return (
    <>
      <div>
        <Attachment
          attach={'Certificate of Incorporation'}
          name="CertificateOfIncorporation"
        />
        <Attachment
          attach={"Director's Passport or National ID"}
          description={'(front and back)'}
          name="IdentityCard"
        />
        <Attachment
          attach={'Tax Registration Certificate'}
          name="TaxRegistrationCertificate"
        />
        <Attachment attach={'Trading License'} name="TradingLicence" />
        <Attachment attach={'Company Form 20'} name="CompanyForm20" />
        <Attachment attach={'Signed NDA'} name="SignedNDA" />
      </div>

      <hr />
      <div className="d-flex justify-content-center mb-3">
        {error ? (
          <p className="alert alert-danger my-1 py-1 w-50">{error}</p>
        ) : null}
      </div>

      <div className="row justify-content-around">
        <PreviousButton onClick={handlePrevious} />

        {isLoading ? (
          <ButtonSpinner />
        ) : (
          <Button
            className="rounded-pill col-md-4 my-1"
            type="submit"
            onClick={() => {
              dispatch(postApplication(formData));
              // postApplication(formData);
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </>
  );
}

const LoginForm = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          Email: '',
          Password: '',
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          sendRedirectEmail(values.Email, navigate);
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <p className="alert alert-info py-1">
              In order to login, an email with a redirect URL will be sent to
              the provided email address.
            </p>

            <TextField
              name="Email"
              label="Email"
              placeholder="johndoe45@gmail.com"
              errors={errors}
              type="email"
            />
            <TextField
              name="Password"
              label="Password"
              placeholder="Password"
              errors={errors}
              type="password"
            />

            <p className="fw-bold text-align-left">Don't have an account? <a href='/signup'>Sign up</a></p>
            <div className="d-flex flex-column align-items-center">
              
              
              <Button
                type="submit"
                className="w-100 rounded-pill bg-light-navy-blue"
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const SignupForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          Phone: '',
          Email: '',
          Password: '',
        }}
        onSubmit={(values) => {
          alert(values);
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="John"
                errors={errors}
                type="text"
                className="col-md-6"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>

            <div className="row">
              <TextField
                name="Email"
                label="Email"
                placeholder="info@business.com"
                errors={errors}
                type="email"
                className="col-md-6"
              />
              <TextField
                name="Phone"
                label="Phone Number"
                placeholder="0712345678"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>

            <TextField
              name="Password"
              label="Password"
              placeholder="Password"
              errors={errors}
              type="password"
            />
            <TextField
              name="Password"
              label="Confirm Password"
              placeholder="Confirm Password"
              errors={errors}
              type="password"
            />

            <div className="d-flex flex-column align-items-center">
              <Button
                href="/login"
                className="w-100 rounded-pill bg-light-navy-blue"
              >
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export {
  DirectorInfoForm,
  BusinessInfoForm,
  AddressInfoForm,
  DocumentsForm,
  ServicesForm,
  LoginForm,
  SignupForm,
};
