import * as Yup from 'yup';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { login } from "../../../Store/AuthReducer/authReducer";
import { leftTask } from "../../../Store/AuthReducer/authTask";


const schem = Yup.object({
    email : Yup.string()
    .email('incorrect')
    .required('write email!'),

    password : Yup.string()
    .min(6, 'minimum 6 sybole')
    .required('write password!')
})

function Profile() {

  let {userId,loginPage} = useSelector(state => state.auth)
  let {isDay} = useSelector(state => state.nightMode)
  let navigation = useNavigate()
  let dispatch = useDispatch()

  const signUp = ({email,password}) => {
    dispatch(login(email,password))
  };

  useEffect(() => {
    if(userId){
      navigation('/')
      dispatch(leftTask(false))
    }
  },[userId])
  
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schem}
      onSubmit={signUp}
    >
      {({ values, handleChange, handleSubmit,touched,errors,handleBlur }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background : isDay ? '#3c3c3c' : ''
          }}
        >
          <Paper
            sx={{
              width: 350,
              p: 3,
            }}
          >
            <Typography variant="h5" mb={3}>
              Sign In
            </Typography>

            <TextField
              fullWidth
              name="email"
              label="Email"
              margin="normal"
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={userId === undefined ? 'incorrect mail' : touched.email && errors.email}
              value={values.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              name="password"
              type="password"
              label="Password"
              margin="normal"
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              value={values.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Paper>
        </Box>
      )}
    </Formik>
  );
}

export default Profile;