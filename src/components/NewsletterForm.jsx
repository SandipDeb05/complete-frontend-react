import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required!";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Length should be less than 15!";
  }

  if (!values.lastname) {
    errors.lastname = "Required!";
  } else if (values.lastname.length > 20) {
    errors.lastname = "Length should be less than 20!";
  }

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address!";
  }

  return errors;
};

const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validate,
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
            name="firstname"
            id="firstname"
            className="form-control"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            name="lastname"
            id="lastname"
            className="form-control"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            name="email"
            id="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

export default NewsletterForm;
