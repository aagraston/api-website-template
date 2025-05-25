import React from 'react';
import Projects from './projects/Projects';
import GitProject from './projects/projectComponents/GitProject';
import ScrollingMessage from './ScrollingMessage';

interface Project {
    'git-link': {
        url: string;
    }
    'project-title': string;
    
    // gitHubStats: {
    //     commit_count: number;
    //     latest_commit_date: Date;
    // };
}



const Home: React.FC = () => {
    
    // fetch an array of projects from the api

    return (
        <div>
            <div className="header-container">
                <h1 className='ghost-effect' data-text="</closing tag>">{'</'}<span>closing tag</span>{'>'}</h1></div>
            
            <ScrollingMessage />


            
        </div>
    );
};

export default Home;