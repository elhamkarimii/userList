import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./Components/Pages/MainApp";
import EditUser from "./Components/Pages/EditUser";
import UserForm from "./Components/Pages/UserForm";
// import {GlobalFont} from './fonts/fonts'
interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface NewUserType {
  first_name: string;
  last_name: string;
  email: string;
}
interface TargetType {
  val: string;
  name: string;
}
interface Event {
  target: TargetType;
}

function App() {
  const [data, setData] = useState<Info[]>([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [value, setValue] = useState<Info>({
    first_name: "",
    last_name: "",
    email: "",
    id: 0,
    avatar: "",
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  const filteredData = useMemo(() => {
    const copyData = [...data];
    const filteredData = copyData.filter((item: Info) =>
      item["first_name"].toLowerCase().includes(searchedValue.toLowerCase())
    );
    return filteredData;
  }, [searchedValue, data]);

  function handleInputChange(value: string) {
    setSearchedValue(value);
  }

  function handleSort(val: number) {
    const copyData = [...data];
    const sortData = copyData.sort((a, b) => {
      if (a["first_name"] < b["first_name"]) {
        return -1 * val;
      } else if (a["first_name"] > b["first_name"]) {
        return 1 * val;
      } else {
        return 0;
      }
    });
    setData(sortData);
  }

  function handleDeleteUser(id: number) {
    const copyData = [...data];
    const newData = copyData.filter((item) => item.id !== id);
    setData(newData);
  }

  function handleSaveUser(mode: string) {
    const copyData = [...data];
    if (mode === "add") {
      const newItem = {
        ...value,
        id: data.length + 1,
        avatar: "http://unsplash.it/221/221",
      };
      copyData.push(newItem);
    } else {
      const index = copyData.findIndex((item) => item.id === value.id);
      copyData[index] = value;
    }
    setData(copyData);
  }

  function handelInputChange({ name, val }: TargetType) {
    setValue({
      ...value,
      [name]: val,
    });
  }

  function handleEditUser(user: Info) {
    setValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      id: user.id,
      avatar: user.avatar,
    });
  }

  function handleBackButton() {
    setValue({
      first_name: "",
      last_name: "",
      email: "",
      id: 0,
      avatar: "",
    })
  }
  return (
    <>
    {/* <GlobalFont /> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainApp
              handleInputChange={handleInputChange}
              handleSort={handleSort}
              filteredData={filteredData}
              handleDeleteUser={handleDeleteUser}
              handleEditUser={handleEditUser}
            />
          </Route>
          <Route path="/addUser">
            <UserForm
              handleSaveUser={() => handleSaveUser("add")}
              handelInputChange={handelInputChange}
              handleBackButton={handleBackButton}
              value={value}
            />
          </Route>
          <Route path="/editUser">
            <EditUser
              value={value}
              handelInputChange={handelInputChange}
              handleSaveUser={() => handleSaveUser("edit")}
              handleBackButton={handleBackButton}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
