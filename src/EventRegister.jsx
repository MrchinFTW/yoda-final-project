import { useState, useRef } from "react";

const lacture = {
  workshopTitle: "the mistory of creepy",
  workshopDesc: "this is a very creepy lecture...",
  workshopMiniDesc: "shady lecturer to a shady lecture",
  workshopHashtags: ["creep", "shady", "strong heart"],
  workshopImage: {
    src: "https://res.cloudinary.com/ontopo/image/upload/q_auto:eco,c_crop,x_0,y_85,w_1024,h_379/w_950,c_scale/v1671968906/assets/62399069302c8c1fa0a48f4e/6239906b302c8c1fa0a48f51/2.png",
    alt: "some ALT...",
  },
  workshopDate: "DATE",
  workshopTeacher: "Avi Nahoom",
  workshopEventContant:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, sequi culpa iure molestiae ad omnis repudiandae itaque? Vel omnis recusandae, eaque ex dicta sint mollitia velit ratione maiores quia? Enim dolorum nulla facilis sit velit modi debitis nostrum distinctio, laudantium doloremque error odit neque ipsum? Impedit, officiis excepturi. Perferendis quia id doloremque quas recusandae a maxime porro laboriosam itaque placeat dolor iure dolorem, eveniet sit provident hic molestiae perspiciatis debitis necessitatibus eos possimus molestias cum error sint? Nobis doloremque vero culpa sunt facilis, perferendis ad. Eum aut fugiat eligendi veritatis, dolorem assumenda in dolor totam pariatur soluta tenetur, aliquam saepe.",
};

// change to useRef
const EventReginster = () => {
  const [userList, setUserList] = useState([
    {
      name: "shimon",
      phoneNumber: "0501111111",
      email: "shimon@hotmail",
    },
  ]);

  const addRegisteredList = () => {
    const newUserList = [...userList];

    let nameValue = document.getElementById("name").value;
    let phoneValue = document.getElementById("phoneNumber").value;
    let emailValue = document.getElementById("email").value;

    console.log(nameValue);

    const newUser = {
      name: nameValue,
      phoneNumber: phoneValue,
      email: emailValue,
    };

    newUserList.push(newUser);

    setUserList(newUserList);

    //reset input field
    nameValue = document.getElementById("name").value = "";
    phoneValue = document.getElementById("phoneNumber").value = "";
    emailValue = document.getElementById("email").value = "";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{lacture.workshopTitle}</h1>
      <img src={lacture.workshopImage.src} alt={lacture.workshopImage.alt} />
      <h2>{lacture.workshopDesc}</h2>
      {lacture.workshopHashtags.map((tag) => {
        return <span>#{tag}</span>;
      })}
      <p>{lacture.workshopDate}</p>
      <p>{lacture.workshopTeacher}</p>
      <p>{lacture.workshopEventContant}</p>

      <form>
        <label>
          Name:
          <input type="text" id="name" />
        </label>
        <label>
          phone Number:
          <input type="number" id="phoneNumber" />
        </label>
        <label>
          Email:
          <input type="email" id="email" />
        </label>
      </form>
      <button onClick={() => addRegisteredList()}>Register Now!</button>
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
