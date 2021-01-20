import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function AddUser() {
  return (
    <div>
      <label>add new user</label>
      <Link to="/addUser">
        <Button variant="contained" color="primary">
          ADD
        </Button>
      </Link>
    </div>
  );
}
