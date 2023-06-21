import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";

export default function LineChart({ graphTime, companyInfo }) {
  const [tickValues, setTickValues] = useState("");
  const [tickFormat, setTickFormat] = useState("");
  const [stockDataArray, setStockDataArray] = useState([]);

  useEffect(() => {
    const getFilterDate = () => {
      const filterDate = new Date("2023-05-24");
      switch (graphTime) {
        case "1m":
          filterDate.setMonth(filterDate.getMonth() - 1);
          setTickValues("every friday");
          setTickFormat("%a %d %b");
          break;
        case "6m":
          filterDate.setMonth(filterDate.getMonth() - 6);
          setTickValues("every 2 months");
          setTickFormat("%B %Y");
          break;
        case "1y":
          filterDate.setFullYear(filterDate.getFullYear() - 1);
          setTickValues("every 3 months");
          setTickFormat("%B %Y");
          break;
        case "5y":
          filterDate.setFullYear(filterDate.getFullYear() - 5);
          setTickValues("every year");
          setTickFormat("%Y");
          break;
        default:
          setTickValues("every 2 years");
          setTickFormat("%Y");
          return new Date("1900-01-01");
      }
      return filterDate;
    };
    setStockDataArray(
      companyInfo.stockPriceHistory
        .filter((item) => new Date(item.date) > getFilterDate())
        .map((item) => ({ x: item.date, y: item.closePrice }))
    );
  }, [graphTime, companyInfo.stockPriceHistory]);

  const stockData = [
    {
      id: companyInfo.companyName,
      color: "hsl(38, 70%, 50%)",
      data: stockDataArray,
    },
  ];
  return (
    <ResponsiveLine
      data={stockData}
      margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: tickFormat,
        tickValues: tickValues,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Close Price",
        legendOffset: -50,
        legendPosition: "middle",
      }}
      enablePoints={false}
      pointSize={10}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 38,
          translateY: -34,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
