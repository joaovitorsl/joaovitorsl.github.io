import React, { useState } from "react";
import './styles.css';
import Resume from '../Resume';
import Languages from '../Languages';
import Hobbies from '../Hobbies';
import Skills from '../Skills';
import Summary from '../Summary';
import './my-sass.scss';

const infoAbout = [
    <Summary />,
    <Skills />,
    <Hobbies />,
    <Languages />,
    <Resume />
]

const infoTitle = [
    "SUMMARY",
    "SKILLS",
    "HOBBIES",
    "LANGUAGES",
    "RESUME"
]

function Next({ id, setId }) {
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

function Previous({ id, setId }) {
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

function Info({ id }) {
    return (
        <div className="t2">
            {infoAbout[id]}
        </div>
    );
}

const Touch = () => {
    const [id, setId] = useState(0);

    return (
        <div className="touch">
            <div className="touch-header">
                <a href="http://localhost:3000" className="touch-header-back">X</a>
                <div className="touch-header-title">{infoTitle[id]}</div>
                <div className="touch-header-space"></div>
                <Previous id={id} setId={setId} />
                <Next id={id} setId={setId} />
            </div>
            <div className="touch-content">
                <div className="TV">
                    <div className="tv-content">
                        <div className="t">
                            <div className="scanlines">
                                <Info id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Touch;