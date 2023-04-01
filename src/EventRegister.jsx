import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router";
import useWorkshop from "./Hooks/useWorkshop";

const getCurrentDate = () => {
  const dateObj = new Date();
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  return day + "/" + month + "/" + year;
};

const EventRegister = () => {
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

  const paramId = useParams();

  const { data: lectures, isLoading, isError } = useWorkshop();

  if (lectures) {
    const currentLecture = lectures.find(
      (lecture) => lecture._id === paramId.id
    );
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={currentLecture.workshopImage.src}
          alt={currentLecture.workshopImage.alt}
        />
        <h1>{currentLecture.workshopTitle}</h1>
        <h2>{currentLecture.workshopDesc}</h2>
        {currentLecture.workshopHashtags.map((tag) => {
          return (
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              className="workShop__tags"
            >
              #{tag}
            </ButtonGroup>
          );
        })}

        <p>{currentLecture.workshopMiniDesc}</p>

        {/* date and teacher */}

        <div className="dateAndTeacher">
          <div>Teacher: {currentLecture.workshopTeacher}</div>
          <div>Date: {currentLecture.workshopDate}</div>
        </div>

        {/* input field */}

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
          <h4>
            {user.name}
            {user.phoneNumber}
            {user.email}
          </h4>
        ))}
      </div>
    );
  }
};

export default EventRegister;
