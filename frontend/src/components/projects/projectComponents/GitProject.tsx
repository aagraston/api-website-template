import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './GitProject.scss';

interface GitProjectProps {
    title: string;
    gitLink: string;
    // commits: number;
    // lastCommitDate: string;
}

const GitProject: React.FC<GitProjectProps> = ({  title, gitLink }) => {

    // const date = new Date(lastCommitDate);

    // Format the date as day-month-year
    // const formattedDate = date.toLocaleDateString('en-US', {
    //     month: '2-digit',
    //     day: '2-digit',
    //     year: 'numeric',
    // });

    return (
        <div className="git-project card">
            <div className="top-row">
                <div className="icon"><FaGithub /></div>
                <div className="project-info">
                    <h3 className='ghost-effect' data-text={title}>{title}</h3>
                </div>
                <div className="right-column"><a href={gitLink} className="icon-link" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a></div>
            </div>
            <div className="middle-row">
            </div>
            <div className="bottom-row">
                {/* <div className="left-column">
                    <h4 className='ghost-effect' data-text='Commits'>Commits</h4>
                    <p className="large ghost-effect" data-text={commits}>{commits}</p>
                </div>
                <div className="middle-column">
                    <h4 className='ghost-effect' data-text='Last Commit'>Last Commit</h4>
                    <p className="large ghost-effect" data-text={formattedDate}>{formattedDate}</p>
                </div>
                <div className="right-column">
                </div> */}
            </div>
        </div>
    );
};

export default GitProject;