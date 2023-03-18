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
};
const EventReginster = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{lacture.workshopTitle}</h1>
      <img src={lacture.workshopImage.src} alt={lacture.workshopImage.alt} />
      <h2>{lacture.workshopDesc}</h2>
      {lacture.workshopHashtags.map((tag) => {
        return <span>{tag}</span>;
      })}
      <p>{lacture.workshopDate}</p>
      <p>{lacture.workshopTeacher}</p>
    </div>
  );
};

export default EventReginster;
