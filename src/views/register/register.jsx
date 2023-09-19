import InputGroup from '../../components/InputGroup/InputGroup'
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/yup.schemas'
import { register } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    name: "",
    email: "",
    password: "",
}

const Register = () => {

    const navigate = useNavigate();

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        setSubmitting,
        setFieldError,
        setFieldValue,
      } = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: registerSchema,
        onSubmit: (values) => {
          /*const formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          formData.append('password', values.password);
    
          if (values.profilePicture) {
            console.log('values.profilePicture: ', values.profilePicture);
            formData.append('profilePicture', values.profilePicture);
          }*/
          register(values)
          .then(() => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            setFieldError('email', err.response.data.message);
          })
          .finally(() => {
            setSubmitting(false);
          });
      },
    });

    return (
        <div className="Register">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <InputGroup
                    label="Name"
                    name="name"
                    type="text"
                    value={values.name}
                    error={touched.name && errors.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                />
                <InputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    error={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                />
                <InputGroup
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    error={touched.password && errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your password"
                />

                <button type="submit" className={`btn btn-${isSubmitting ? 'secondary' : 'primary'}`}>
                    {isSubmitting ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    )
}

export default Register;