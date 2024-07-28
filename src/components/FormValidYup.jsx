import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = Yup.object({
  firstname: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required!"),
  lastname: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required!"),
  email: Yup.string().email("Invalid email address").required("Required!"),
});

const FormValidYup = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("formik", formik);

  return (
    <div className="border p-3 mt-3">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            {...formik.getFieldProps("firstname")}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-danger">{formik.errors.firstname}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            {...formik.getFieldProps("lastname")}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-danger">{formik.errors.lastname}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidYup;
