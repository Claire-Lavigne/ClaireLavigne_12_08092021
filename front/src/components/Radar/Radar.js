import React from "react";
import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar as RadarRecharts,
  ResponsiveContainer,
} from "recharts";
import "./radar.css";

/**
 *
 * This composent displays the user activities type and datas within a Radar Chart
 *
 */
const Radar = (props) => {
  /**
   * Custom data to be used in the RadarChart component
   * copy from props.kind.data array
   * add new object from props.kind.kind array
   */
  const datas = props.kind.data.map((elt) => {
    return {
      ...elt,
      activity: props.kind.kind[elt.kind],
    };
  });
  console.log("activityType", datas);
  return (
    <div className="Radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="48%" outerRadius="60%" innerRadius="5%" data={datas}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            axisLine={false}
            tickLine={false}
            tickSize={12}
          />
          <RadarRecharts dataKey="value" fill="red" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

Radar.propTypes = {
  type: PropTypes.shape({
    activity: PropTypes.string,
    kind: PropTypes.number,
    value: PropTypes.number,
  }),
};
export default Radar;
