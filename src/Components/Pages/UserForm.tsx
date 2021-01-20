import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

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
    cotainer: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#D3D3D3',
    },
    root: {
      flexGrow: 1,
      maxWidth: "50%" ,
      display: "flex ",
      justifyContent: "center ",
      alignItems: "center ",
      backgroundColor:'#F2F2F2',
      borderRadius:'7px',
      boxShadow:'2px 2px 15px #555555'

    },
    paper: {
      padding: "10px",
      textAlign: "center",
      color: theme.palette.text.secondary,
      flexBasis: "none",
      display: "flex",
      justifyContent: "center",
      marginTop:'10px'

    },
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      
    },
    box: {
      display: "flex",
      width: "100px",
      alignItems: "center",
    },
    textField: {
      marginTop: "25px",
    },
    buttons: {
      padding: "10px 40px",
      margin: "40px 10px",
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
    <div className={classes.cotainer}>
      <Grid xs={12} container className={classes.root}>
        <Grid xs={12} className={classes.paper} spacing={1}>
          <form>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>First name:</label>
              </Box>
              <TextField
                className={classes.textField}
                value={first_name}
                name="first_name"
                onChange={(e) =>
                  handelInputChange({
                    name: e.target.name,
                    val: e.target.value,
                  })
                }
                error
                id="outlined-error-helper-text"
                label="first name"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>Last name:</label>
              </Box>
              <TextField
                className={classes.textField}
                value={last_name}
                name="last_name"
                onChange={(e) =>
                  handelInputChange({
                    name: e.target.name,
                    val: e.target.value,
                  })
                }
                error
                id="outlined-error-helper-text"
                label="first name"
                helperText="Incorrect entry."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>Email:</label>
              </Box>
              <TextField
                className={classes.textField}
                type="email"
                value={email}
                name="email"
                onChange={(e) =>
                  handelInputChange({
                    name: e.target.name,
                    val: e.target.value,
                  })
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
        <Grid item xs={12} className={classes.paper}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveUser}
            className={classes.buttons}
          >
            SAVE!
          </Button>

          <Link to="/">
            <Button
              variant="contained"
              onClick={handleBackButton}
              className={classes.buttons}
            >
              BACK
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
