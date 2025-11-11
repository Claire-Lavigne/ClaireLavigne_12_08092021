// https://blog.openreplay.com/data-fetching-techniques-with-react

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (userID) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // async makes the function return a promise (value)
  const fetchData = useCallback(async () => {
    try {
      // await : used in async function to wait for the promise to be resolved
      await axios
        // requests to get data from URL (server)
        .all([
          axios.get(`/user/${userID}`),
          axios.get(`/user/${userID}/activity`),
          axios.get(`/user/${userID}/average-sessions`),
          axios.get(`/user/${userID}/performance`),
        ])
        // handle response when promise solved
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
            // store response in data state
            setData(allResp);
            setIsLoading(false);
          })
        );
      // handle error
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("Error fetching data: ", error);
    }
  }, [userID]);

  // The fetchData function is called in the useEffect hook which runs once when the component is mounted
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, isError, data };
};

export default useAxios;
