import React, { useState } from "react";
import ReactDOM from "react-dom";
import AddUser from "../AddUser";
import SearchBox from "../SearchBox";
import SortBox from "../SortBox";
import UserList from "../UserList";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        paddingTop: "20px"
      },
    },
  })
);

interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface MainAppType {
  handleInputChange: (value: string) => void;
  handleSort: (val: number) => void;
  filteredData: Info[];
  handleDeleteUser: (id: number) => void;
  handleEditUser: (user: Info) => void;
}

export default function MainApp({
  handleInputChange,
  handleSort,
  filteredData,
  handleDeleteUser,
  handleEditUser,
}: MainAppType) {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} className={classes.root}>
        <Grid item xs={6}>
          <SearchBox onchange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <SortBox onHandleSort={handleSort} />
        </Grid>
      </Grid>
      <AddUser />
      <UserList
        data={filteredData}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
      />
    </div>
  );
}
