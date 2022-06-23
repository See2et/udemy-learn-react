import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18"
  };
  return <p style={contentStyle}>{children}</p>;
};
