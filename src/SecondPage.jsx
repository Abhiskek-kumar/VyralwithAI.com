import React from "react";
import People from "./assets/People.png";
import Call from "./assets/Call.png";
import Internet from "./assets/Internet.png";
import Whatsapp from "./assets/Whatsapp.png";
import Image2 from "./assets/Image2.png";
import SoftwareInstaller from "./assets/SoftwareInstaller.png";

export default function SecondPage() {
  return (
    <div className="services">
      <h2>
        Our <span>Services</span>
      </h2>

      <p>
        VyralwithAI gives easy yet{" "}
        <span className="highlight">
          impactful digital advertising solutions
        </span>{" "}
        <br></br>
        to help Indian businesses grow via digital ads.
      </p>

      <p className="paragraph">
        At VyralwithAI, businesses can{" "}
        <span className="highlight1">run ads with various objectives</span> -
        such as
      </p>
      <div className="timeline">
        {/* RIGHT - Lead Generation */}
        <div className="timeline-row">
          <div></div>

          <div className="icon">
            <img src={People} alt="" />
          </div>

          <div className="card right">
            <h3>Lead Generation</h3>
            <p>Capture the contact information of potetial customers in CRM</p>
          </div>
        </div>

        {/* LEFT - WhatsApp */}
        <div className="timeline-row">
          <div className="card left">
            <h3>Get WhatsApp Message</h3>
            <p>
              Receive message from potential customers directly on your WhatsApp
            </p>
          </div>

          <div className="icon">
            <img src={Whatsapp} alt="" />
          </div>

          <div></div>
        </div>

        {/* RIGHT - Calls */}
        <div className="timeline-row">
          <div></div>

          <div className="icon">
            <img src={Call} alt="" />
          </div>

          <div className="card right">
            <h3>Get New Calls</h3>
            <p>
              Get direct calls from potential customers interested in your
              products or services
            </p>
          </div>
        </div>

        {/* LEFT - More Message */}
        <div className="timeline-row">
          <div className="card left">
            <h3>Get More Message</h3>
            <p>
              Receive inquiry messages from customers through Instagram /
              Facebook Messenger
            </p>
          </div>

          <div className="icon">
            <img src={Image2} alt="" />
          </div>

          <div></div>
        </div>

        {/* RIGHT - Website Traffic (WHITE CARD) */}
        <div className="timeline-row">
          <div></div>

          <div className="icon">
            <img src={Internet} alt="" />
          </div>

          <div className="card right white">
            <h3>Get Website Traffic</h3>
            <p>
              Redirect potential customers to your website to drive online sales
            </p>
          </div>
        </div>

        {/* LEFT - App Install */}
        <div className="timeline-row">
          <div className="card left">
            <h3>App Install</h3>
            <p>
              Get new installs on Play Store or App Store by targeting right
              audience
            </p>
          </div>

          <div className="icon">
            <img src={SoftwareInstaller} alt="" />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
