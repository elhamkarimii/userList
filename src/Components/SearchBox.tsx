import React, { useState } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
        marginTop: "20px"
    },
  })
);

interface TargetValue {
  value: string;
}
interface Event {
  target: TargetValue;
}
interface OnChangeFunction {
  onchange: (value: string) => void;
}

export default function SearchBox({ onchange }: OnChangeFunction) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  function handleChange({ target }: Event) {
    setValue(target.value);
    onchange(target.value);
  }
  return (
    <div className={classes.input}>
      <label>search by first name...</label>
      <TextField
        
        label="search"
        variant="outlined"
        id="mui-theme-provider-outlined-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
