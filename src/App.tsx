import React, { useEffect, useReducer, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./Components/Pages/MainApp/index";
import EditUser from "./Components/Pages/EditUser/index";
import UserForm from "./Components/Pages/UserForm/index";
import { StateContext } from "./Components/Context";
import useData from "./Components/useData"

interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface TargetType {
  val: string;
  name: string;
}

function App() {

  const { dispatch, value } = useData()

  // function handleSearchInput(value: string) {
  //   dispatch({
  //     type: "HANDLE_SEARCHED_VALUE",
  //     payload: value,
  //   });
  // }

  // function handleSort(val: number) {
  //   dispatch({
  //     type: "HANDLE_SORT_DATA",
  //     payload: val,
  //   });
  // }

  // function handleDeleteUser(id: number) {
  //   dispatch({
  //     type: "HANDLE_DELETE_USER",
  //     payload: id,
  //   });
  // }

  function handleSaveUser(mode: string) {
    dispatch({
      type: "HANDLE_SAVE_USER",
      payload: mode,
    });
  }

  function handleInputChange({ name, val }: TargetType) {
    dispatch({
      type: "HANDLE_USER_INPUT",
      payload: {
        name: name,
        val: val,
      },
    });
  }

  // function handleEditUser(user: Info) {
  //   dispatch({
  //     type: "HANDLE_EDIT_USER",
  //     payload: user,
  //   });
  // }

  function handleBackButton() {
    dispatch({
      type: "HANDLE_BACK_BUTTON",
    });
  }

  return (
    <>
      <StateContext.Provider value={value}>
        <Router>
          <Switch>
            <Route path="/" exact component={MainApp} >

            </Route>
            <Route path="/addUser" >
              <UserForm
                handleSaveUser={() => handleSaveUser("add")}
                handleInputChange={handleInputChange}
                handleBackButton={handleBackButton}
              />
            </Route>
            <Route path="/editUser" >
              <EditUser
                handleInputChange={handleInputChange}
                handleSaveUser={() => handleSaveUser("edit")}
                handleBackButton={handleBackButton}
              />
            </Route>
          </Switch>
        </Router>
      </StateContext.Provider>
    </>
  );
}

export default App;
