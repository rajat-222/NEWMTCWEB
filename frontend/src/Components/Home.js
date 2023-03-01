import React from "react";

function Home() {
  return (
    <>
      <section id="hero">
        <div
          class="hero-container aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 class="mb-4 pb-0">
            <span>Microsoft</span> Technical
            <br />
            <span>Community</span>
          </h1>
          <p class="mb-4 pb-0">
            <font size="5px">Technology is making people's lives easier.</font>
            <br />
            We, here at MTC are, constantly <br />
            Innovating, Inventing and Improvising.
          </p>
          <a
            href="https://youtu.be/-XeqtC2wEi8"
            class="glightbox play-btn mb-4"
          ></a>
          <a href="#about" class="about-btn scrollto">
            About MTC
          </a>
          <a href="techfuse.html" class="about-btn scrollto">
            Tech Fuse : CyberSecurity
          </a>
          {/* <!-- <a href="protocode.html" class="about-btn">Protocode</a> -->
        <!-- <a href="wecaresecurity.html" class="about-btn scrollto" target="blank"
          <!-- >We Care Security</a>  */}

          {/* <!--<a href="CodiVent1.html "  class="about-btn scrollto">CodiVent 2021</a>-->
        <!--<a href="Schedule.html" class="about-btn scrollto" style="font-size:18px;">Java Paathshala 2021</a>--> */}
        </div>
      </section>
    </>
  );
}

export default Home;
