import Footer from "./footer";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#DAFCFF] via-[#EFF2FF] to-[#F2D9E6] ">
      {/* Top Header Bar */}
      <div className="bg-[#183C8B] h-3 w-full"></div>

      {/* Page Title */}
      <div className="text-center">
        <div className="bg-white shadow-md py-4 px-6 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-[#2A66C4]">About Us</h1>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-16 text-black  ">
        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center mt-20">
            Who We Are
          </h2>
          <p className="text-[18px] leading-[32px]">
          VyralwithAI is a cutting-edge AI-powered platform designed to
            revolutionize digital advertising. We use advanced AI technology to
            automate and optimize ad campaigns, ensuring businesses reach their
            potential customers effectively and efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center">
            Our Mission
          </h2>
          <p className="text-[18px] leading-[32px]">
            Our mission is to simplify digital advertising for businesses of all
            sizes, making it accessible and effective. We aim to empower
            businesses to grow by providing powerful AI tools that handle the
            complexities of ad design, targeting, and optimization.
          </p>
        </section>

        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center">
            Use and processing of collected information
          </h2>
          <p className="text-[18px] leading-[32px]">
            In order to make the Mobile Application available to you, or to meet
            a legal obligation, we need to collect and use certain Business
            Information. If you do not provide the information that we request,
            we may not be able to provide you with the requested products or
            services. Any of the information we collect from you may be used to
            help us run and operate the Website and Services. Processing your
            Personal Information depends on how you interact with the Website
            and Services, where you are located in the world and if one of the
            following applies: (i) you have given your consent for one or more
            specific purposes; this, however, does not apply, whenever the
            processing of Personal Information is subject to Indian Consumer
            Privacy Act or European data protection law; (ii) provision of
            information is necessary for the performance of an agreement with
            you and/or for any pre-contractual obligations thereof; (iii)
            processing is necessary for compliance with a legal obligation to
            which you are subject; (iv) processing is related to a task that is
            carried out in the public interest or in the exercise of official
            authority vested in us; (v) processing is necessary for the purposes
            of the legitimate interests pursued by us or by a third party. Note
            that under some legislations we may be allowed to process
            information until you object to such processing (by opting out),
            without having to rely on consent or any other of the following
            legal bases below. In any case, we will be happy to clarify the
            specific legal basis that applies to the processing, and in
            particular whether the provision of Personal Information is a
            statutory or contractual requirement, or a requirement necessary to
            enter into a contract.
          </p>
        </section>

        {/* Add more sections same way */}

        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center">
            What We Offer
          </h2>
          <p className="text-[18px] leading-[32px]">
            AI-powered ad design and content creation Automated campaign
            publishing and optimization Comprehensive reporting and CRM tools
            Support for multiple platforms including Facebook, Instagram, and
            Google Ads
          </p>
        </section>
        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center">
            Why Choose VyralwithAI?
          </h2>
          <p className="text-[18px] leading-[32px] pb-50">
          VyralwithAIstands out by using AI at every critical aspect of your ad
            campaign, from creative design to targeting and optimization. Our
            goal is to deliver superior results and high ROI, helping your
            business thrive in the competitive digital landscape. © 2026 VyralAI
            Digital Solutions Pvt Ltd. All rights reserved.
          </p>
        </section>
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
