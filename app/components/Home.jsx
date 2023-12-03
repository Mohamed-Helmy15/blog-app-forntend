"use client";
import Link from "next/link";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styles } from "../globals.css";
import axios from "axios";
import Loading from "./Loading";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("success");
  useEffect(() => {}, [loading, alert]);

  const loginSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });

  const initialValuesLogin = {
    name: "",
    email: "",
    password: "",
  };

  const handleFormSubmit = (values, onSubmitProps) => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    localStorage.setItem("token", Math.random() * 1000);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: 1,
        name: values.name,
        email: values.email,
        role: "user",
        created_at: Date.now(),
      })
    );
    router.push("/blogs");
    // axios
    //   .post("https://helmy-blog.000webhostapp.com/api/login", values)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    //     router.push("/blogs");
    //   })
    //   .catch((err) => {
    //     setState("error");
    //     console.log(err);
    //     setMessage(err.message);
    //     setLoading(false);
    //     setAlert(true);
    //     setTimeout(() => {
    //       setAlert(false);
    //     }, 5000);
    //   });
  };
  return loading ? (
    <Loading />
  ) : (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
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
        <div className="form-wrapper ">
          {alert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity={state}>
                {message}
              </Alert>
            </Stack>
          )}

          <div className="overlay">
            <p>Blog App</p>
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
                    value={values.name}
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
                    LOGIN
                  </Button>
                </Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Link href="/register">Don't have an account?</Link>
                  <Link href="/forgot-password">Forgot the Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
