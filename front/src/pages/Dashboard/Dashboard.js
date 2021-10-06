import React from "react";
import PropTypes from "prop-types";
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
  let dailyActivity = data[1];
  let sessionsDatas = data[2];
  let activityType = data[3];

  return (
    <>
      <MainNav userID={userDatas.id} />
      <main className="dashboard">
        <SideBar />
        <header>
          <h1>
            Bonjour <span>{userDatas.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className="grid-container">
          <Activity activity={dailyActivity} />
          <Sessions sessions={sessionsDatas} />
          <Radar kind={activityType} />
          <Score objective={userDatas} />
          <Card title={userDatas.keyData} />
        </div>
      </main>
    </>
  );
};

Dashboard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default Dashboard;
