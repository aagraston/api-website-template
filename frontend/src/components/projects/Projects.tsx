import React, { ReactNode } from 'react';
import './projects.scss';

interface ProjectsProps {
    children: ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({ children }) => {

    return (
        <section className="projects">
            <h2 className='ghost-effect' data-text="</Github Projects>">{'</'}<span>GitHub Projects</span>{'>'}</h2>
            <div className="projects-container">
                {children}
            </div>
        </section>
    );
};

export default Projects;