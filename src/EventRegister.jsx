import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";

const getCurrentDate = () => {
  const dateObj = new Date();
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  return day + "/" + month + "/" + year;
};

const lacture = {
  workshopTitle: "the mistory of creepy",
  workshopDesc: "this is a very creepy lecture...",
  workshopMiniDesc: "shady lecturer to a shady lecture",
  workshopHashtags: ["creep", "shady", "strong heart"],
  workshopImage: {
    src: "https://res.cloudinary.com/ontopo/image/upload/q_auto:eco,c_crop,x_0,y_85,w_1024,h_379/w_950,c_scale/v1671968906/assets/62399069302c8c1fa0a48f4e/6239906b302c8c1fa0a48f51/2.png",
    alt: "some ALT...",
  },
  workshopDate: getCurrentDate(),
  workshopTeacher: "Avi Nahoom",
  workshopEventContant:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, sequi culpa iure molestiae ad omnis repudiandae itaque? Vel omnis recusandae, eaque ex dicta sint mollitia velit ratione maiores quia? Enim dolorum nulla facilis sit velit modi debitis nostrum distinctio, laudantium doloremque error odit neque ipsum? Impedit, officiis excepturi. Perferendis quia id doloremque quas recusandae a maxime porro laboriosam itaque placeat dolor iure dolorem, eveniet sit provident hic molestiae perspiciatis debitis necessitatibus eos possimus molestias cum error sint? Nobis doloremque vero culpa sunt facilis, perferendis ad. Eum aut fugiat eligendi veritatis, dolorem assumenda in dolor totam pariatur soluta tenetur, aliquam saepe.",
};

const EventReginster = () => {
  const [userList, setUserList] = useState([
    {
      name: "shimon",
      phoneNumber: "0501111111",
      email: "shimon@hotmail",
    },
  ]);

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
    <div style={{ textAlign: "center" }}>
      <h1>{lacture.workshopTitle}</h1>
      <img src={lacture.workshopImage.src} alt={lacture.workshopImage.alt} />
      <h2>{lacture.workshopDesc}</h2>
      {lacture.workshopHashtags.map((tag) => {
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

      {/* date and teacher */}

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <p>{lacture.workshopEventContant}</p>
        <Fab variant="extended">
          <p sx={{ mr: 1 }} className="workShop__detials">
            At: {lacture.workshopDate}{" "}
          </p>
        </Fab>
        <Fab variant="extended">
          <p sx={{ mr: 1 }}>By: {lacture.workshopTeacher}</p>
        </Fab>
      </Box>

      {/* input field */}

      <Box className="input-field">
        <TextField
          label="Name"
          variant="outlined"
          type={"text"}
          ref={inputRef_name}
        />
        <TextField
          label="Phone"
          variant="outlined"
          type={"nuber"}
          ref={inputRef_phoneNumber}
        />
        <TextField
          label="email"
          variant="outlined"
          type={"email"}
          ref={inputRef_email}
        />
        <Button variant="contained" onClick={() => addRegisteredList()}>
          Register Now!
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
};

export default EventReginster;
