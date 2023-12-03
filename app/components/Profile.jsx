"use client";
import React, { useEffect, useState } from "react";
import { styles } from "../globals.css";
import axios from "axios";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
const Profile = () => {
  const allBlogs = [
    {
      id: 1,
      title: "Blog 1",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 2,
      title: "Blog 2",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 3,
      title: "Blog 3",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 4,
      title: "Blog 4",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 5,
      title: "Blog 5",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 6,
      title: "Blog 6",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
  ];
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [state, setState] = useState("success");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [passwordState, setPasswordState] = useState("success");

  const profileSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Invalid email"),
  });

  const initialValuesProfile = {
    name: user.name,
    email: user.email,
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
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
    setState("success");
    setMessage(`the Profile has been updated successfully`);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
    // axios
    //   .patch(
    //     `https://helmy-blog.000webhostapp.com/api/employers/${user.id}}`,
    //     values
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setState("success");
    //     setMessage(`the Profile has been updated successfully`);
    //     setAlert(true);
    //     setTimeout(() => {
    //       setAlert(false);
    //     }, 5000);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setState("error");
    //     setMessage(`something went wrong`);
    //     setAlert(true);
    //     setTimeout(() => {
    //       setAlert(false);
    //     }, 5000);
    //   });
  };

  const resetPasswordSchema = yup.object().shape({
    password: yup.string().required("required"),
    confirmPassword: yup.string().required("required"),
  });

  const initialValuesResetPassword = {
    password: "",
    confirmPassword: "",
  };

  const handlePasswordFormSubmit = async (values, onSubmitProps) => {
    if (values.password === values.confirmPassword) {
      setPasswordState("success");
      setPasswordMessage(`the password has been updated successfully`);
      setPasswordAlert(true);
      setTimeout(() => {
        setPasswordAlert(false);
      }, 5000);
      // axios
      //   .patch(
      //     `https://helmy-blog.000webhostapp.com/api/employers/${user.id}}`,
      //     values
      //   )
      //   .then((res) => {
      //     console.log(res);
      //     setPasswordState("success");
      //     setPasswordMessage(`the password has been updated successfully`);
      //     setPasswordAlert(true);
      //     setTimeout(() => {
      //       setPasswordAlert(false);
      //     }, 5000);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setPasswordState("error");
      //     setPasswordMessage(`something went wrong`);
      //     setPasswordAlert(true);
      //     setTimeout(() => {
      //       setPasswordAlert(false);
      //     }, 5000);
      //   });
    } else {
      setPasswordState("error");
      setPasswordMessage(`passwords do not match`);
      setPasswordAlert(true);
      setTimeout(() => {
        setPasswordAlert(false);
      }, 5000);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
    setBlogs(
      allBlogs.filter(
        (blog) =>
          blog.employer.user_id ==
          JSON.parse(localStorage.getItem("currentUser")).id
      )
    );
    // axios
    //   .get("https://helmy-blog.000webhostapp.com/api/blogs", {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((response) => {
    //     setBlogs(
    //       response.data.data.filter(
    //         (blog) =>
    //           blog.employer.user_id ==
    //           JSON.parse(localStorage.getItem("currentUser")).id
    //       )
    //     );
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div
        style={{
          padding: "20px 0",
        }}
      >
        <h1
          style={{
            padding: "0 0 20px 0",
            color: "#0755ff",
          }}
        >
          {user.name} Profile
        </h1>
        <div className="info">
          {edit ? (
            <div
              style={{
                flex: "1",
              }}
            >
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValuesProfile}
                validationSchema={profileSchema}
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
                  <div
                    className="form-edit"
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    {alert && (
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Alert variant="filled" severity={state}>
                          {message}
                        </Alert>
                      </Stack>
                    )}
                    <h3>Change the User Information</h3>
                    <div className="edit-user-info">
                      <form className="edit-user" onSubmit={handleSubmit}>
                        <Box
                          display="grid"
                          gap="30px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                          <TextField
                            label="User Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                            name="name"
                            error={
                              Boolean(touched.name) && Boolean(errors.name)
                            }
                            helperText={touched.name && errors.name}
                            sx={{ gridColumn: "span 4" }}
                          />
                        </Box>
                        <Box
                          display="grid"
                          gap="30px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                          <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={
                              Boolean(touched.email) && Boolean(errors.email)
                            }
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                          />
                        </Box>
                        <Box>
                          <div className="edit">
                            <button
                              type="submit"
                              style={{
                                display: "block",
                                width: "100%",
                                outline: "none",
                                border: "none",
                                margin: "10px 0",
                              }}
                            >
                              <p>Submit</p>
                            </button>
                            <p onClick={() => setEdit(false)}>Cancel</p>
                          </div>
                        </Box>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
              <Formik
                onSubmit={handlePasswordFormSubmit}
                initialValues={initialValuesResetPassword}
                validationSchema={resetPasswordSchema}
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
                  <div className="form-edit">
                    {passwordAlert && (
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Alert variant="filled" severity={passwordState}>
                          {passwordMessage}
                        </Alert>
                      </Stack>
                    )}
                    <h3>Change the password</h3>
                    <div className="edit-user-info">
                      <form className="edit-user" onSubmit={handleSubmit}>
                        <Box
                          display="grid"
                          gap="30px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                          <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={
                              Boolean(touched.password) &&
                              Boolean(errors.password)
                            }
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                          />
                        </Box>
                        <Box
                          display="grid"
                          gap="30px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
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
                          <div className="edit">
                            <button
                              type="submit"
                              style={{
                                display: "block",
                                width: "100%",
                                outline: "none",
                                border: "none",
                                margin: "10px 0",
                              }}
                            >
                              <p>Submit</p>
                            </button>
                            <p onClick={() => setEdit(false)}>Cancel</p>
                          </div>
                        </Box>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          ) : (
            <>
              <div className="user-info">
                <p style={{ color: "#0755ff" }}>User Information</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <div className="date">
                  <h5>
                    Joined at{" "}
                    <span>
                      {new Date(user.created_at).toLocaleString("default", {
                        month: "long",
                      })}
                    </span>{" "}
                    <span>{new Date(user.created_at).getDate()}</span>{" "}
                    <span>{new Date(user.created_at).getFullYear()}</span>
                  </h5>
                </div>
              </div>
              <div className="edit">
                <p onClick={() => setEdit(true)}>Edit Profile</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <h1
          style={{
            padding: "0 0 20px 0",
            color: "#0755ff",
          }}
        >
          {user.name}'s Articles
        </h1>
        {blogs.map((blog) => (
          <div key={blog.id} onClick={() => router.push(`/blogs/${blog.id}`)}>
            <div
              className="content"
              style={{
                background: "#eee",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <div className="catTitle">
                <h3>{blog.category} Category</h3>
                <h2>{blog.title}</h2>
              </div>
              <div className="author">
                <p>
                  Created by{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {blog.employer.user.name}
                  </span>
                </p>
              </div>
              <div className="date">
                <h5>
                  Established at{" "}
                  <span>
                    {new Date(blog.created_at).toLocaleString("default", {
                      month: "long",
                    })}
                  </span>{" "}
                  <span>{new Date(blog.created_at).getDate()}</span>{" "}
                  <span>{new Date(blog.created_at).getFullYear()}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
