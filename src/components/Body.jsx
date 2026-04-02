import ErpProjectCard from "./ErpProjectCard";

const Body = ({ setZoomImg }) => {
  return (
    <div className="portfolio-body">
      {/* Dynamic Projects Grid */}
      <ErpProjectCard setZoomImg={setZoomImg} />
    </div>
  );
};

export default Body;