import React from "react";
import './styles.css';

const Job = ({ year, org, period, role, technologies }) => {
    return (
        <div className="job-item">
            <span>{org}</span><br />
            <small>{period}</small>
            <div className="job-description">
                <ul>
                    <li>{role}<br />({technologies})</li>
                </ul>
            </div>
        </div>
    );
}

export default Job;