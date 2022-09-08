import React, { useState } from "react";
import './styles.css';
import Resume from '../Resume';
import Languages from '../Languages';
import Hobbies from '../Hobbies';
import Skills from '../Skills';
import Summary from '../Summary';

const infoAbout = [
    <Summary />,
    <Skills />,
    <Hobbies />,
    <Languages />,
    <Resume />
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
        infoAbout[id]
    );
}

const Touch = () => {
    const [id, setId] = useState(0);

    return (
        <div className="touch">
            <div className="touch-content">
                <div className="t">
                <Info id={id} />
                </div>
            </div>
            <div className="touch-footer">
                <Previous id={id} setId={setId} />
                <Next id={id} setId={setId} />
            </div>
        </div>
    )
};

export default Touch;