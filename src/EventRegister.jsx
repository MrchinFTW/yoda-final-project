import ButtonGroup from "@mui/material/ButtonGroup";
import { useParams } from "react-router";
import useWorkshop from "./Hooks/useWorkshop";
import InputRegister from "./Components/InputRegister";

const EventRegister = () => {
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

        <InputRegister />
      </div>
    );
  }
};

export default EventRegister;
