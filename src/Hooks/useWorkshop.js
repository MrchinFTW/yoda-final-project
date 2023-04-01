import { useQuery } from "react-query";

const useWorkshop = () => {
  const { data, isLoading, isError } = useQuery("workshop-data", () => {
    return fetch("/data.json").then((res) => res.json());
  });

  return { data, isLoading, isError };
};

export default useWorkshop;
