import SideBar from "./SideBar";

function Trends(props) {
  return props.trends.map((trend) => {
    return (
      <>
        <SideBar
          dotsrc={trend.dotsrc}
          trendy={trend.trendy}
          name={trend.name}
          numoftweets={trend.numoftweets}
          trendscontent={trend.trendscontent}
        />
      </>
    );
  });
}
export default Trends;
