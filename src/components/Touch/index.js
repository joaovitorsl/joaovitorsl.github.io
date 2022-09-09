import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTouch } from "./hooks";
import './styles.css';
import './tv-lines.scss';

const Touch = () => {
    const [id, setId] = useState(0);
    const { Previous, Next, infoAbout, infoTitle, Info } = useTouch();

    return (
        <div className="touch">
            <div className="touch-header">
                <Link to="/main" className="touch-header-back">X</Link>
                <div className="touch-header-title">{infoTitle[id]}</div>
                <div className="touch-header-space"></div>
                <Previous id={id} setId={setId} />
                <Next id={id} setId={setId} />
            </div>
            <div className="touch-content">
                <div className="TV">
                    <div className="tv-content">
                        <div className="scanlines">
                            <Info id={id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Touch;