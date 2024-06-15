import * as yup from 'yup';
import CONSTANTS from '../Constants';
const {
  VALID_USER,
  USER_REQUIRED,
  USER,
  PASSWORD_LENGTH,
  PASSWORD_REQUIRED,
  PASSWORD,
  MOBILE_LENGTH,
  MOBILE_REQUIRED,
  MOBILE,
  NAME_REQUIRED,
  NAME,
  FAMILY_REQUIRED,
  FAMILY,
  MAIL_REQUIRED,
  VALID_MAIL,
  MAIL,
  PHONE_REQUIRED,
  PHONE,
  ADDRESS_REQUIRED,
  ADDRESS,
  DEVICE_NAME_LENGTH,
  DEVICE_NAME_REQUIRED,
  DEVICE_NAME,
  IMEI_LENGTH,
  IMEI_REQUIRED,
  IMEI,
  MOVING_REQUIRED,
  MOVING,
} = CONSTANTS.SCHEMES;

const SIGN_IN_FORM = yup.object().shape({
  user: yup.string().required(USER_REQUIRED).label(USER),
  password: yup
    .string()
    .min(4, PASSWORD_LENGTH)
    .required(PASSWORD_REQUIRED)
    .label(PASSWORD),
});
const SIGN_UP_FORM = yup.object().shape({
  mobile: yup
    .string()
    .min(11, MOBILE_LENGTH)
    .required(MOBILE_REQUIRED)
    .label(MOBILE),
});
const FORGET_PASSWORD_FORM = yup.object().shape({
  mobile: yup
    .string()
    .min(11, MOBILE_LENGTH)
    .required(MOBILE_REQUIRED)
    .label(MOBILE),
});
const REGISTER_FORM = yup.object().shape({
  name: yup.string().required(NAME_REQUIRED).label(NAME),
  family: yup.string().required(FAMILY_REQUIRED).label(FAMILY),
  moving: yup.string().required(MOVING_REQUIRED).label(MOVING),
  password: yup.string().required(PASSWORD_REQUIRED).label(PASSWORD),
  repeatPassword: yup.string().required(PASSWORD_REQUIRED).label(PASSWORD),
});

const USER_ACCOUNT_FORM = yup.object().shape({
  name: yup.string().required(NAME_REQUIRED).label(NAME),
  family: yup.string().required(FAMILY_REQUIRED).label(FAMILY),
  mail: yup.string().email(VALID_MAIL).required(MAIL_REQUIRED).label(MAIL),
  phone: yup.string().required(PHONE_REQUIRED).label(PHONE),
  // city: yup.string().required(PASSWORD_REQUIRED).label(PASSWORD),
  // state: yup.string().required(PASSWORD_REQUIRED).label(PASSWORD),
  address: yup.string().required(ADDRESS_REQUIRED).label(ADDRESS),
});
const NEW_PASSWORD_FORM = yup.object().shape({
  password: yup
    .string()
    .min(4, PASSWORD_LENGTH)
    .required(PASSWORD_REQUIRED)
    .label(PASSWORD),
  newPassword: yup
    .string()
    .min(4, PASSWORD_LENGTH)
    .required(PASSWORD_REQUIRED)
    .label(PASSWORD),
});

const DEVICE_FORM = yup.object().shape({
  deviceName: yup
    .string()
    .min(4, DEVICE_NAME_LENGTH)
    .required(DEVICE_NAME_REQUIRED)
    .label(DEVICE_NAME),
  IMEI: yup.string().min(10, IMEI_LENGTH).required(IMEI_REQUIRED).label(IMEI),
});
export default {
  SIGN_IN_FORM,
  SIGN_UP_FORM,
  FORGET_PASSWORD_FORM,
  REGISTER_FORM,
  NEW_PASSWORD_FORM,
  USER_ACCOUNT_FORM,
  DEVICE_FORM,
};
