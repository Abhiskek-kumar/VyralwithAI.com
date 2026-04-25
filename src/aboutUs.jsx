export default function AboutUs() {
  const newLocal = "max-w-[1500px] mx-auto px-6 space-y-16 text-black overflow-hidden";
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#DAFCFF] via-[#EFF2FF] to-[#F2D9E6]">

      {/* Top Header Bar */}
      <div className="bg-[#183C8B] h-2 md:h-3 w-full"></div>

      {/* Page Title */}
      <div className="text-center" style={{ paddingBottom: '20px' }}>
        <div className="bg-white shadow-md py-3 md:py-4 px-4 sm:px-6 flex justify-center items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A66C4]">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-fullmx-auto px-4 sm:px-6 space-y-10 md:space-y-16 text-black" style={{ padding: '20px' }}>
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-center">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8">
            VyralAI is a cutting-edge AI-powered platform designed to revolutionize digital advertising. We use advanced AI technology to automate and optimize ad campaigns, ensuring businesses reach their potential customers effectively and efficiently.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-center">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8">
            Our mission is to simplify digital advertising for businesses of all sizes, making it accessible and effective. We aim to empower businesses to grow by providing powerful AI tools that handle the complexities of ad design, targeting, and optimization.
            We are committed to delivering exceptional results for our clients while maintaining the highest standards of integrity and customer service.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center pb-4">
            What We Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 pb-20 md:pb-40">
            1. AI-powered ad design and content creation <br />
            2. Intelligent audience targeting and segmentation <br />
            3. Automated campaign publishing and optimization <br />
            4. Comprehensive reporting and CRM tools <br />
            5. Support for multiple platforms including Facebook, Instagram, and Google Ads
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center pb-4">
            Why Choose VyralAI?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 pb-20 md:pb-40">
            VyralAI stands out by using AI at every critical aspect of your ad campaign, from creative design to targeting and optimization. Our goal is to deliver superior results and high ROI, helping your business thrive in the competitive digital landscape.
            © 2026 VyralAI Digital Solutions Pvt Ltd. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
