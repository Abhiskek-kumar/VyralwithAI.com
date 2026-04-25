import React from "react";
import People from "./assets/People.png";
import Call from "./assets/Call.png";
import Internet from "./assets/Internet.png";
import Whatsapp from "./assets/Whatsapp.png";
import Image2 from "./assets/Image2.png";
import SoftwareInstaller from "./assets/SoftwareInstaller.png";

const services = [
  {
    title: "Lead Generation",
    desc: "Capture the contact information of potential customers in CRM",
    icon: People,
  },
  {
    title: "Get WhatsApp Message",
    desc: "Receive messages from customers directly on WhatsApp",
    icon: Whatsapp,
  },
  {
    title: "Get New Calls",
    desc: "Get direct calls from potential customers",
    icon: Call,
  },
  {
    title: "Get More Message",
    desc: "Receive messages via Instagram / Facebook Messenger",
    icon: Internet,
  },
  {
    title: "Get Website Traffic",
    desc: "Drive users to your website for more sales",
    icon: Internet,
  },
  {
    title: "App Install",
    desc: "Increase installs on Play Store / App Store",
    icon: SoftwareInstaller,
  },
];

export default function SecondPage() {
  return (
    <div className="w-full py-16 px-6">

      {/* Heading */}
      <div className="text-center max-w-[1500px] mx-auto " style={{ marginBottom: "2rem"}}>
        <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: "1rem"}}>
          Our <span className="text-blue-600">Services</span>
        </h2>

        <p className="mt-4 text-gray-600">
          VyralwithAI gives easy yet{" "}
          <span className="font-semibold text-black">
            impactful digital advertising solutions
          </span>{" "}
          to help Indian businesses grow.
        </p>

        <p className="mt-2 text-gray-600">
          Run ads with various objectives like:
        </p>
      </div>

      {/* Services Grid */}
     <div className="max-w-[1500px] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center">

  {services.map((item, index) => (
    <div
      key={index}
      className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-xl hover:-translate-y-2 duration-300 h-full w-full max-w-[350px] mx-auto" style={{ padding: "15px" }}
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-16 h-16 mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-600">
        {item.desc}
      </p>
    </div>
  ))}

</div>
    </div>
  );
}