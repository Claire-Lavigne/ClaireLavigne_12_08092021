import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import "./sessions.css";

/**
 *
 * This function returns the user sessions duration within a LineChart
 *
 */
const Sessions = (props) => {
  const sessions = props.sessions.sessions;
  console.log("sessionsSessions", sessions);

  /**
   * This function returns the day with the initial (string) instead of numeric format (number)
   */
  const dayFormatter = (day) => {
    switch (day) {
      case 1:
        day = "L";
        break;
      case 2:
        day = "M";
        break;
      case 3:
        day = "M";
        break;
      case 4:
        day = "J";
        break;
      case 5:
        day = "V";
        break;
      case 6:
        day = "S";
        break;
      case 7:
        day = "D";
        break;
      default:
        return day;
    }
    return day;
  };

  const CustomizedLegend = () => {
    return <p className="custom-legend">Durée moyenne des sessions</p>;
  };

  /**
   * @param   {boolean} 	active   the active tooltip
   * @param   {Array} 		payload  the source data to be displayed in tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value + " min"}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Sessions">
      <ResponsiveContainer>
        <LineChart data={sessions}>
          <Legend
            content={<CustomizedLegend />}
            wrapperStyle={{
              top: 10,
              left: 10,
              fontSize: 15,
              color: "white",
              opacity: 0.5,
              width: 145,
            }}
          />
          <XAxis
            dataKey="day"
            tickFormatter={dayFormatter}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            stroke="white"
            tickMargin="10"
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            wrapperStyle={{
              width: 40,
              height: 25,
              color: "#000",
              backgroundColor: "#fff",
              fontSize: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Sessions.propTypes = {
  sessions: PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number,
  }),
};

export default Sessions;
