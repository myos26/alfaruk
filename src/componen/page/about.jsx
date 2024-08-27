import React, { useState, useEffect, useRef } from "react";
import frame from "../../assets/border-profile.png";


function About() {
  const [skillProgress, setSkillProgress] = useState({
   "Web Developer": 0,
    "Video Editor": 0,
    "Graphic Design": 0,
    "Public Speaking": 0,
    // "Web Developer": 0,
    // "Video Editor": 0,
    // "Graphic Design": 0,
    // "Public Speaking": 0,
  });

  const skillRef = useRef(null); // Referensi untuk elemen skill

  useEffect(() => {
    const targetProgress = {
      "Web Developer": 92,
      "Video Editor": 98,
      "Graphic Design": 90,
      "Public Speaking": 86,
      // "Web Developer": 92,
      // "Video Editor": 98,
      // "Graphic Design": 90,
      // "Public Speaking": 86,
    };

    const animateSkills = () => {
      const startTime = performance.now();

      const updateProgress = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const animationDuration = 1000; // Duration in milliseconds

        let updatedProgress = { ...skillProgress };
        let completed = true;

        for (const skill in targetProgress) {
          if (updatedProgress[skill] < targetProgress[skill]) {
            const progressIncrease = Math.min(
              targetProgress[skill] - updatedProgress[skill],
              (elapsedTime / animationDuration) * targetProgress[skill]
            );
            updatedProgress[skill] = Math.min(
              updatedProgress[skill] + progressIncrease,
              targetProgress[skill]
            );
            completed = false;
          }
        }

        setSkillProgress(updatedProgress);

        if (!completed) {
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    };

    // Setup Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkills();
          observer.disconnect(); // Disconnect after animation starts
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [skillProgress]);

  return (
    <>
      <div className="about-item">
        <div className="about-left">
          <div className="frame-about">
            <img src={frame} alt="FOTOKU" />
          </div>
        </div>
        <div className="about-right">
          <h1>About Me</h1>
          <p>
          I am a passionate developer with experience in building web applications
          and designing user-friendly interfaces. I enjoy working with modern
          technologies and always strive to enhance my skills. My expertise includes:
            {/* Saya adalah seorang pengembang yang penuh semangat dengan
            pengalaman dalam membangun aplikasi web dan merancang antarmuka
            pengguna yang ramah. Saya menikmati bekerja dengan teknologi modern
            dan selalu berusaha untuk meningkatkan keterampilan saya. Keahlian
            saya meliputi: */}
          </p>
          <div className="skill" ref={skillRef}>
            {Object.keys(skillProgress).map((skill) => (
              <div className="skill-item" key={skill}>
                <span>{skill}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${Math.min(skillProgress[skill], 100)}%` }}
                  ></div>
                  <span className="percentage">
                    {Math.min(skillProgress[skill], 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
