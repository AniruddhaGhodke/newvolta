import React, { useCallback } from "react";
import { Line } from "react-chartjs-2";

var dataFirst = {
  label: "Car A - Speed (mph)",
  data: [0, 59, 75, 20, 20, 55, 40],
  lineTension: 0,
  fill: false,
  backgroundColor: "#f09",
  borderColor: "#f09",
};

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst],
};

var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "top",
    labels: {
      boxWidth: 80,
      fontColor: "black",
    },
  },
};

function lineChart({ data, label, type }) {
  const labels = data[0].data.map((datum) => {
    return datum.time.slice(11, 16);
  });

  if (type === "capacity") {
    dataFirst = {
      ...dataFirst,
      backgroundColor: "#4286f4",
      borderColor: "#4286f4",
    };
  } else {
    dataFirst = { ...dataFirst, backgroundColor: "#f09", borderColor: "#f09" };
  }

  dataFirst = { ...dataFirst, label };
  speedData = { datasets: [dataFirst], labels };

  return (
    <React.Fragment>
      <Line data={speedData} options={chartOptions} />
    </React.Fragment>
  );
}

export default lineChart;
