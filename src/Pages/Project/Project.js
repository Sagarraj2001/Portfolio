import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Project() {
    const projectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-section');
                    } else {
                        entry.target.classList.remove('animate-section'); // Allow repeated animation
                    }
                });
            },
            {
                threshold: 0.2, 
            }
        );

        const projectSection = projectRef.current;
        if (projectSection) {
            observer.observe(projectSection);
        }

        return () => {
            if (projectSection) {
                observer.unobserve(projectSection);
            }
        };
    }, []);

    return (
        <>
            <h1 className="text-center text-warning mt-5" id="project">
                <u>Projects</u>
            </h1>
            <div
                ref={projectRef}
                className="row row-cols-1 row-cols-md-4 g-4 mt-3 m-3"
            >
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/QR.png`}
                    title="QR Code generator"
                    view="https://sagarraj2001.github.io/Qr-code-with-sagarraj/"
                    code="https://github.com/Sagarraj2001/Qr-code-with-sagarraj"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/portfolio.png`}
                    title="Portfolio"
                    view="https://sagarrajportfolio.netlify.app/"
                    code="https://github.com/Sagarraj2001/portfolio.io"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/form.png`}
                    title="Registration Form "
                    view="https://sagarraj2001.github.io/Registration_Form-/"
                    code="https://github.com/Sagarraj2001/Registration_Form-"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/background.png`}
                    title="BG Generator"
                    view="https://sagarraj2001.github.io/Bg_Generator/"
                    code="https://github.com/Sagarraj2001/Bg_Generator"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/CRUD.png`}
                    title="CRUD App"
                    view="https://cerulean-flan-625db2.netlify.app/"
                    code="https://github.com/Sagarraj2001/CRUDAPP"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/Learning.png`}
                    title="LearnBuddy"
                    view="https://clever-lolly-f7ceb1.netlify.app/"
                    code="https://github.com/Sagarraj2001/Learnbuddy"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/Text.png`}
                    title="Text Analyzer"
                    view="https://gorgeous-cobbler-378c90.netlify.app/"
                    code="https://github.com/Sagarraj2001/Text_Analyzer"
                />
                <ProjectCard
                    src={`${process.env.PUBLIC_URL}/Project_Image/landing.png`}
                    title="Landing Page"
                    view="https://sagarraj2001.github.io/Landing_page/"
                    code="https://github.com/Sagarraj2001/Landing_page"
                />
            </div>
            <style>
                {`
                    .animate-section {
                        animation: fadeInUp 1.5s ease-out forwards;
                    }
                    @keyframes fadeInUp {
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

export default Project;

