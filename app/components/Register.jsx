"use client";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Register = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [state, setState] = useState("success");

  const registerSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup.string().required("required"),
  });

  const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    setState("success");
    setMessage("The account has been created successfully!");
    setAlert(true);
    setTimeout(() => {
      router.push("/");
    }, 1500);
    // axios
    //   .post("https://helmy-blog.000webhostapp.com/api/signup", values)
    //   .then((res) => {
    //     setState("success");
    //     setMessage("The account has been created successfully!");
    //     setAlert(true);
    //     setTimeout(() => {
    //       router.push("/");
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     setState("error");
    //     setMessage(err.response.data.message);
    //     setAlert(true);
    //     setTimeout(() => {
    //       setAlert(false);
    //     }, 5000);
    //   });
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <div className="form-wrapper">
          {alert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity={state}>
                {message}
              </Alert>
            </Stack>
          )}
          <div className="overlay">
            <p>Create New Account</p>
            <div className="wrap-form">
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                >
                  <TextField
                    label="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="name"
                    error={Boolean(touched.name) && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmPassword}
                    name="confirmPassword"
                    error={
                      Boolean(touched.confirmPassword) &&
                      Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box>
                  <Button
                    fullWidth
                    type="submit"
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                    }}
                  >
                    Create a New account
                  </Button>
                </Box>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
