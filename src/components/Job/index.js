import React from "react";
import './styles.css';

const Job = ({ year, org, period, descricao }) => {
    return (
        <div className="job-section">
            <h3>{year}</h3>
            <div className="job-item">
                <span>{org}</span>
                <small>{period}</small>
                <div className="job-description">
                    <ul>
                        <li>{descricao}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Job;