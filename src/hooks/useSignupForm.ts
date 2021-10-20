import * as Yup from 'yup';
import { useFormik } from 'formik';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const useSignupForm = () =>
  useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    },
  });

export default useSignupForm;
