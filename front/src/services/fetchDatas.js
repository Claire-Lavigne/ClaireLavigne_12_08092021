import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (userID) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      await axios
        .all([
          axios.get(`/user/${userID}`),
          axios.get(`/user/${userID}/activity`),
          axios.get(`/user/${userID}/average-sessions`),
          axios.get(`/user/${userID}/performance`),
        ])
        .then(
          axios.spread((...responses) => {
            const allResp = [];
            const userMainInfos = responses[0].data.data;
            const userActivity = responses[1].data.data;
            const userSessions = responses[2].data.data;
            const userPerformance = responses[3].data.data;
            allResp.push(
              userMainInfos,
              userActivity,
              userSessions,
              userPerformance
            );
            setData(allResp);
            setIsLoading(false);
          })
        );
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useAxios;
