import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { taskSeach } from "../../../Store/DataReducer/taskReducer";
import { useEffect, useState } from "react";

export default function BasicTextFields() {
  let dispatch = useDispatch();
  let [text, setText] = useState("");
  let {isDay} = useSelector(state => state.nightMode)

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(taskSeach(text));
    }, 800);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
        display: "flex",
        justifyContent: "center",
        padding: "30px 0",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
        sx={
          isDay
            ? {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1976d2",
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  caretColor: "#fff",
                },
              }
            : {}
        }
      />
    </Box>
  );
}
