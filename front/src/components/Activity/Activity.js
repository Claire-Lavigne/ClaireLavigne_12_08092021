import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./activity.css";

/**
 *
 * This composent displays the user daily activities within a Bar Chart
 *
 */
const Activity = (props) => {
  const activity = props.activity.sessions;
  console.log("dailyActivity", activity);

  /**
   * @param   {boolean} 	date    the API date in format yyyy-mm-dd
   * @return  {number} 	          the day of the week (ie: 15)
   */
  const dayFormatter = (date) => {
    const day = new Date(date).getDate();
    return day;
  };

  /**
   * @param   {boolean} 	active   the active tooltip
   * @param   {Array} 		payload  the source data to be displayed in tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].payload.kilogram + "kg"}</p>
          <p>{payload[0].payload.calories + "Kcal"}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activity}
          barGap={10}
          margin={{ top: 100, left: 50, right: 20 }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            tickLine={false}
            stroke="#DEDEDE"
            dataKey="day"
            tickMargin={10}
            tickFormatter={dayFormatter}
            scale="point"
            padding={{ left: 15, right: 15 }}
          ></XAxis>
          <YAxis
            tickCount={4}
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={20}
            allowDataOverflow={true}
            domain={[0, "DataMax"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              fontSize: 7,
              width: 40,
              height: 63,
              color: "#fff",
              backgroundColor: "#E60000",
            }}
          />
          <Legend
            width={300}
            wrapperStyle={{
              top: 5,
              right: 25,
              color: "#74798C",
            }}
          />
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Poids (kg)"
            barSize={7}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Calories brulées (kCal)"
            barSize={7}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    calories: PropTypes.number,
    day: PropTypes.string,
    kilogram: PropTypes.number,
  }),
};

export default Activity;
