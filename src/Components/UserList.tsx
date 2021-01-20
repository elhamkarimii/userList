import React from "react";
import UserInfo from "./UserInfo";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface Data {
  data: Info[];
  handleDeleteUser: (id: number) => void;
  handleEditUser: (user: Info) => void;
}

export default function UserList({
  data,
  handleDeleteUser,
  handleEditUser,
}: Data) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>USER AVATAR</TableCell>
            <TableCell align="right">FIRST NAME</TableCell>
            <TableCell align="right">LAST NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">OPTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <UserInfo
                handleDeleteUser={() => handleDeleteUser(item.id)}
                handleEditUser={() => handleEditUser(item)}
                info={item}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
