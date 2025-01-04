import React, { useRef, useEffect } from 'react';
import SkillCard from './SkillCard';

function Skill() {
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill');
          } else {
            entry.target.classList.remove('animate-skill'); // Allow repeated animation
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the section is visible
      }
    );

    const skillSection = skillRef.current;
    if (skillSection) {
      observer.observe(skillSection);
    }

    return () => {
      if (skillSection) {
        observer.unobserve(skillSection);
      }
    };
  }, []);

  return (
    <>
      <div id="skill" ref={skillRef}>
        <h1 className="text-center text-warning mb-4">
          <u>My Skills</u>
        </h1>
        <div className="d-flex align-items-center justify-content-center m-3">
          <div className="row justify-content-center row-cols-2 row-cols-md-5 g-4">
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/html.png`}
              alt="Html Icon"
              title="HTML 5"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/css.png`}
              alt="CSS Icon"
              title="CSS"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/javascript.png`}
              alt="JS Icon"
              title="JavaScript"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/nodejs.png`}
              alt="Nodejs Icon"
              title="Node Js"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/express.png`}
              alt="Express Js Icon"
              title="Express Js"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/mongoDb.png`}
              alt="Mongo DB Icon"
              title="MongoDB"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/react.png`}
              alt="React Icon"
              title="React Js"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/git.png`}
              alt="Git Icon"
              title="Git"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/github.png`}
              alt="Github Icon"
              title="GitHub"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/netlify.png`}
              alt="Netlify Icon"
              title="Netlify"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/java.png`}
              alt="Java Icon"
              title="Java"
            />
            <SkillCard
              src={`${process.env.PUBLIC_URL}/image/api.png`}
              alt="Api Icon"
              title="Postman"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .animate-skill {
            animation: fadeIn 1.5s ease-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default Skill;
