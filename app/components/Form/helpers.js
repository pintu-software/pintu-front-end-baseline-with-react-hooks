export const ShowHelperText = ({ formik, fieldName }) => {
  if (formik.touched[fieldName] && Boolean(formik.errors[fieldName])) {
    return formik.errors[fieldName];
  }
  return null;
};
