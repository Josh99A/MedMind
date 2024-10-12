import { string, object, date, array } from 'yup';
import Messages from './../constants/Messages';
import { Regexp } from './../constants/Regexps';

const directorValidationSchema = object().shape({
  firstName: string()
    .min(2, Messages.validMessage)
    .required(Messages.requiredMessage),
  lastName: string()
    .min(2, Messages.validMessage)
    .required(Messages.requiredMessage),
  AgentNin: string()
    .matches(Regexp.ninRegexp, Messages.validMessage)
    .required(Messages.requiredMessage),
  DateOfBirth: date(Messages.validMessage).required(Messages.requiredMessage),
  Sex: string().required(Messages.optionsMessage),
  Nationality: string().required(Messages.optionsMessage),
  Residence: string().required(Messages.optionsMessage),
});

const businessValidationSchema = object().shape({
  AgentName: string(Regexp.nameRegexp, Messages.validMessage)
    .min(2, Messages.validMessage)
    .matches(Regexp.twoNamesRegexp, Messages.validMessage)
    .required(Messages.requiredMessage),
  Email: string()
    .email(Messages.validMessage)
    .required(Messages.requiredMessage),
  Phone: string()
    .matches(Regexp.phoneNumberRegexp, Messages.validMessage)
    .required(Messages.requiredMessage),
  TIN_No: string()
    .matches(Regexp.tinRegexp, Messages.validMessage)
    .required(Messages.requiredMessage),
  CompanyRegistrationNumber: string()
    .matches()
    .required(Messages.requiredMessage),
  BusinessSector: string().required(Messages.optionsMessage),
  NatureofBusiness: string(Regexp.nameRegexp, Messages.validMessage)
    .min(2, Messages.validMessage)
    .matches(Regexp.twoNamesRegexp, Messages.validMessage)
    .required(Messages.requiredMessage),
});

const addressValidationSchema = object().shape({
  Region: string()
    .min(2, Messages.validMessage)
    .required(Messages.requiredMessage),
  PhysicalLocation: string()
    .min(2, Messages.validMessage)
    .required(Messages.requiredMessage),
    PostalAddress: string()
    .min(2, Messages.validMessage)
    .required(Messages.requiredMessage),
});

const ServicesValidationSchema = object().shape({
  Services: array().of(string()).required(Messages.requiredMessage),
});

const LoginValidationSchema = object().shape({
  Email: string()
    .email(Messages.validMessage)
    .matches(
      Regexp.businessEmailRegexp,
      'Please enter a business email address.'
    )
    .required(Messages.requiredMessage),
  Password: string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required"),
});

export {
  directorValidationSchema,
  businessValidationSchema,
  addressValidationSchema,
  ServicesValidationSchema,
  LoginValidationSchema,
};
