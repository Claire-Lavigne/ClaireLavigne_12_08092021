import React from "react";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Activity = (props) => {
  const activity = props.activity;
  console.log("dailyActivity", activity);

  const dayFormatter = (date) => {
    const day = new Date(date).getDate();
    return day;
  };
  function CustomTooltip({ name, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${name} : `}</p>
          <p className="intro">{name}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={activity}>
        {/* activité quotidienne - poids & calories - tooltip au survol */}
        <XAxis
          stroke="#DEDEDE"
          name="Kcal"
          dataKey="day"
          tickFormatter={dayFormatter}
        />
        <XAxis
          stroke="#DEDEDE"
          name="kg"
          dataKey="day"
          tickFormatter={dayFormatter}
          hide
        />
        <YAxis dataKey="kilogram" />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            width: 40,
            height: 63,
            color: "#fff",
            backgroundColor: "#E60000",
          }}
        />
        <Legend
          width={300}
          wrapperStyle={{
            top: 25,
            right: 25,
            color: "#74798C",
          }}
        />
        <Bar
          name="Poids (kg)"
          barSize={7}
          dataKey="kilogramme"
          fill="#282D30"
        />
        <Bar
          name="Calories brulées (kCal)"
          barSize={7}
          dataKey="calories"
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
