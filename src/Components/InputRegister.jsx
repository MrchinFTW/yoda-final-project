import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";

const InputRegister = () => {
  const [userList, setUserList] = useState([]);

  let inputRef_name = useRef();
  let inputRef_phoneNumber = useRef();
  let inputRef_email = useRef();

  const addRegisteredList = () => {
    const newUserList = [...userList];

    const newUser = {
      name: inputRef_name.current.value,
      phoneNumber: inputRef_phoneNumber.current.value,
      email: inputRef_email.current.value,
    };

    newUserList.push(newUser);

    setUserList(newUserList);

    //reset input field
    inputRef_name.current.value = "";
    inputRef_phoneNumber.current.value = "";
    inputRef_email.current.value = "";
  };

  return (
    <div>
      <Box className="input-field">
        <TextField
          label="Name"
          variant="outlined"
          type={"text"}
          inputRef={inputRef_name}
        />
        <TextField
          label="Phone"
          variant="outlined"
          type={"nuber"}
          inputRef={inputRef_phoneNumber}
        />
        <TextField
          label="email"
          variant="outlined"
          type={"email"}
          inputRef={inputRef_email}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => addRegisteredList()}
        >
          Register Now
        </Button>
      </Box>

      {userList.map((user) => (
        <div className="userList">
          {user.name}
          {user.phoneNumber}
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default InputRegister;
