import React from "react";
import MainNav from "../../components/MainNav/MainNav";
import useAxios from "../../services/fetchDatas";
import SideBar from "../../components/SideBar/SideBar";
import Performance from "../../components/Performance/Performance";
import Activity from "../../components/Activity/Activity";
import Sessions from "../../components/Sessions/Sessions";
import Card from "../../components/Card/Card.js";
import "./dashboard.css";

const Dashboard = (props) => {
  const userID = props.match.params.id;

  const { isLoading, isError, data } = useAxios(userID);

  if (isLoading) {
    return <div>Chargement des données en cours...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  let userDatas = data[0];
  let dailyActivity = data[1].sessions;
  let sessionsDatas = data[2].sessions;
  let activityType = data[3];

  console.log("user infos", userDatas);
  console.log("activity datas", dailyActivity);
  console.log("sessions", sessionsDatas);
  console.log("activity type", activityType);

  return (
    <div className="wrapper">
      <MainNav userID={userDatas.id} />
      <SideBar />
      <main className="dashboard">
        <header>
          <h1>
            Bonjour <span>{userDatas.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className="grid-container">
          <Activity className="Activity" />
          <Sessions className="Sessions" />
          <Performance className="Graph" />
          <Performance className="score" />
          <div className="keys">
            <Card title={userDatas.keyData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
