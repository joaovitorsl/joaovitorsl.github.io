import Resume from '../Resume';
import Languages from '../Languages';
import Hobbies from '../Hobbies';
import Skills from '../Skills';
import Summary from '../Summary';
import React from 'react';

const useProgrammerCard = () => {
    const infoAbout = [
        <Summary />,
        <Skills />,
        <Hobbies />,
        <Languages />,
        <Resume />
    ];

    return { infoAbout };
};

export default useProgrammerCard;