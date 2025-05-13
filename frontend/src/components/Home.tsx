import React from 'react';
import ScrollingMessage from './ScrollingMessage';

const Home: React.FC = () => {

    return (
        <div>
            <div className="header-container">
                <h1 className='ghost-effect' data-text="</closing tag>">{'</'}<span>closing tag</span>{'>'}</h1></div>
            
            <ScrollingMessage />
            
        </div>
    );
};

export default Home;