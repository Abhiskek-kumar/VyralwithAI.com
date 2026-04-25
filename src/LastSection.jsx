import MusicRobot from "./assets/MusicRobot.png";
import Footer from "./footer";

export default function LastSection() {
  return (
    <section className="last-section">

      <h4 className="text-2xl md:text-4xl font-bold text-center"  style={{marginBottom: "15px"}}>
        <span className="text-black">Why </span>
        <span className="text-blue-600">VyralwithAI?</span>
      </h4>

      <div className="mt-4 text-center" style={{marginBottom: "2rem"}}>
        <p className="text-base md:text-lg text-gray-600 leading-7">
          At VyralwithAI, we{" "}
          <span className="font-semibold text-black">use AI</span> in every important part of your advertising campaign
          <br />
          <span className="text-blue-600 font-medium">
            to make it more effective to get better ROI
          </span>
        </p>
      </div>

      <div className="circle-container">

        <div className="circle-card">
          <img src={MusicRobot} alt="" />
          <h3>Creative AI</h3>
          <p>
            Our Creative AI will create <b>impactful marketing images</b> based on trends
          </p>
        </div>

        <div className="circle-card">
          <div className="emoji">🎯</div>
          <h3>Targeting AI</h3>
          <p>
            Finds the <b>right audience</b> for your ads
          </p>
        </div>

        <div className="circle-card">
          <div className="emoji">🚀</div>
          <h3>Optimizing AI</h3>
          <p>
            Optimizes ads to deliver <b>best ROI</b>
          </p>
        </div>

      </div>
    </section>
  );
}