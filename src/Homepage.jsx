 
import speaker from "./assets/Speaker.png";
import image41 from "./assets/Image41.png";
import SecondPage from "./SecondPage.jsx";
import LastSection from "./LastSection.jsx";
export default function Homepage() {
  return (
    <div className="home">

      <div className="hero">

        <p className="hero-title">Empowering</p>

        <p className="hero-subtitle">
          <span className="blue">Indian Businesses</span> With
        </p>

        <div className="hero-row">
          <span className="tag">AI powered</span>

          <span className="hero-text">
            Advertising
          </span>

          <img src={speaker} className="speaker" alt="speaker" />
        </div>

        <img src={image41} className="hero-img" alt="banner" />
      </div>

      {/* Pages */}
      <SecondPage />
      <LastSection />
    </div>
  );
}