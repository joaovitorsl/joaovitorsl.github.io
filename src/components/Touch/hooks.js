import React from "react";
import Resume from '../Resume';
import Languages from '../Languages';
import Hobbies from '../Hobbies';
import Skills from '../Skills';
import Summary from '../Summary';

const useTouch = () => {
    const infoAbout = [
        <Summary />,
        <Skills />,
        <Hobbies />,
        <Languages />,
        <Resume />
    ];
    
    const infoTitle = [
        "SUMMARY",
        "SKILLS",
        "HOBBIES",
        "LANGUAGES",
        "RESUME"
    ];

    const Info = ({ id }) => {
        return (
            <div className="t2">
                {infoAbout[id]}
            </div>
        );
    }

    const Next = ({ id, setId }) => {
        function handleClick() {
            if (id < 4) {
                setId(id + 1);
            } else {
                setId(0);
            }
        }
    
        return (
            <div className="controller" type="button" onClick={handleClick}>
                &gt;
            </div>
        );
    }
    
    const Previous = ({ id, setId }) => {
        function handleClick() {
            if (id > 0) {
                setId(id - 1);
            } else {
                setId(4);
            }
        }
    
        return (
            <div className="controller" type="button" onClick={handleClick}>
                &lt;
            </div>
        );
    }

    return { Next, Previous, infoAbout, infoTitle, Info };
}

export { useTouch };