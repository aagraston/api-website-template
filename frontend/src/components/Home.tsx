import React, { useEffect, useState } from 'react';
import Projects from './projects/Projects';
import GitProject from './projects/projectComponents/GitProject';
import ScrollingMessage from './ScrollingMessage';
import axios from 'axios';

interface Project {
    'title': string;
    'url': string;
    // gitHubStats: {
    //     commit_count: number;
    //     latest_commit_date: Date;
    // };
}



const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    // fetch an array of projects from the api

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get<Project[]>(`${import.meta.env.VITE_BACKEND_URL}/api/git-projects`);
                setProjects(response.data);
            }
            catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        getProjects();
    }, []);

return (
    <div>
        <div className="header-container">
            <h1 className='ghost-effect' data-text="</closing tag>">{'</'}<span>closing tag</span>{'>'}</h1></div>

        <ScrollingMessage />

        <Projects>
            {projects.map((project, index) => (
                <GitProject key={index} title={project.title} url={project.url} />
            ))
            }
        </Projects>

    </div>
);
};

export default Home;