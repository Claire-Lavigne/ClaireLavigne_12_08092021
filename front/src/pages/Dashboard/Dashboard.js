import React from "react";
import MainNav from "../../components/MainNav/MainNav";
import useAxios from "../../services/fetchDatas";
import SideBar from "../../components/SideBar/SideBar";
import Radar from "../../components/Radar/Radar";
import Score from "../../components/Score/Score";
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
          <Activity activity={dailyActivity} />
          <Sessions sessions={sessionsDatas} />
          <Radar type={activityType} />
          <Score objective={userDatas.todayScore || userDatas.score} />
          <Card title={userDatas.keyData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
