import React from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./score.css";

/**
 *
 * This composent displays the user average score within a RadialBarChart
 *
 */
const Score = (props) => {
  const score = props.objective.todayScore || props.objective.score;
  const percent = Math.round(score * 100);
  const percircle = Math.round(score * 360);
  console.log("score", percent);

  /**
   * Custom data to be used in the RadialBarChart and RadialBar components
   */
  const data = [
    {
      value: percent,
    },
  ];

  const CustomizedLegend = () => {
    return (
      <p className="custom-legend">
        <span>{percent}%</span> de votre objectif
      </p>
    );
  };

  return (
    <div className="Score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="90%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <PolarAngleAxis range={[0, percircle]} type="number" tick={false} />
          <RadialBar cornerRadius={50} dataKey="value" fill="#FF0000" />
          <Legend
            content={<CustomizedLegend />}
            wrapperStyle={{
              top: 90,
              left: 80,
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

Score.propTypes = {
  objective: PropTypes.shape({
    todayScore: PropTypes.number,
    score: PropTypes.number,
  }),
};
export default Score;
