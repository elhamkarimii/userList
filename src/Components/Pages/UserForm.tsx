import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface TargetType {
  val: string;
  name: string;
}
interface Event {
  target: TargetType;
}
interface NewUserType {
  first_name: string;
  last_name: string;
  email: string;
}
interface UserFormType {
  handleSaveUser: () => void;
  handelInputChange: (target: TargetType) => void;
  handleBackButton: () => void;
  value: NewUserType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "50%",
      border:'1px solid black',
      display:"flex !important",
      justifyContent:'center !important',
      alignItems:'center !important',
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      flexBasis: "none",
    },
  })
);

export default function UserForm({
  handleSaveUser,
  value,
  handelInputChange,
  handleBackButton,
}: UserFormType) {
  const { first_name, last_name, email } = value;
  const classes = useStyles();

  return (
    <Grid xs={12} container className={classes.root} >
    <Grid xs={12}>
      <form>
        <Grid item xs={12} className={classes.paper} >
          <Grid xs={10}>
          <label>First name:</label>
          </Grid>
          <TextField
            value={first_name}
            name="first_name"
            onChange={(e) =>
              handelInputChange({ name: e.target.name, val: e.target.value })
            }
            error
            id="outlined-error-helper-text"
            label="first name"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <label>Last name:</label>
          <TextField
            value={last_name}
            name="last_name"
            onChange={(e) =>
              handelInputChange({ name: e.target.name, val: e.target.value })
            }
            error
            id="outlined-error-helper-text"
            label="first name"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <label>Email:</label>
          <TextField
            type="email"
            value={email}
            name="email"
            onChange={(e) =>
              handelInputChange({ name: e.target.name, val: e.target.value })
            }
            error
            id="outlined-error-helper-text"
            label="first name"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </Grid>
      </form>
      </Grid>
      <Grid item xs={12} className={classes.paper} >
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSaveUser}>
            SAVE!
          </Button>
        </Grid>

        <Grid item xs={12} >
          <Link to="/">
            <Button variant="contained" onClick={handleBackButton}>
              BACK
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
