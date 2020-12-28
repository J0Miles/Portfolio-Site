import React from "react";
import Chart from "chartjs";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "HTML",
          "CSS",
          "Git",
          "Javascript",
          "React",
          "Angular",
          "NodeJs",
          "AWS",
          "Azure",
          "Wordpress",
          "ExpressJs",
          "Typescript",
          "MYSQL",
          "MongoDB",
          "Python",
          "GoLang",
          "PHP",
          "C++"
        ],
        datasets: [
          {
            label: "Proficiency in languages I know",
            data: [
              100,
              100,
              100,
              100,
              90,
              80,
              80,
              85,
              80,
              82,
              73,
              80,
              72,
              75,
              69,
              50,
              30,
              20
            ],
            backgroundColor: "#ceb55f"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart-container">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,

            scales: {
              xAxes: [
                {
                  ticks: {
                    scaleLabel: { fontSize: 15 },
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif",
                    fontColor: "black"
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
export default BarChart;
