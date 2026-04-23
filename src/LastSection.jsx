import MusicRobot from "./assets/MusicRobot.png";
import Footer from "./footer";

export default function LastSection() {
  return (
    <section className="last-section">

    <h2 className="title">
      <span className="black">Why </span>
      <span className="blue">VyralwithAI?</span>
    </h2>
  
    <div className="desc">
      <p>
        At VyralwithAI, we{" "}
        <span className="gradient1">use AI</span> in every important part of your advertising campaign
        <br />
        <span className="gradient2">
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
  
    <Footer />
  
  </section>
  );
}