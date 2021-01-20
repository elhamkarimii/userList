import React from "react";
import UserForm from "./UserForm";

interface TargetType {
    val: string;
    name: string;
  }
interface NewUserType {
    first_name: string;
    last_name: string;
    email: string;
  }
  interface UserFormType {
    handleSaveUser: () => void;
    handelInputChange: (target: TargetType) => void;
    handleBackButton: () => void,
    value: NewUserType;
  }
export default function EditUser({value, handleSaveUser, handelInputChange, handleBackButton}:UserFormType) {
    
  return (
    <div>
      <UserForm
        handleSaveUser={handleSaveUser}
        handelInputChange={handelInputChange}
        handleBackButton={handleBackButton}
        value={value}
      />
    </div>
  );
}
