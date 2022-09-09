import React from "react";
import jobs from "../../info/jobs";
import Job from "../Job";
import './styles.css';

const Resume = () => {
    const resume = jobs.map((job) => <Job org={job.organization} period={`(${job.period})`} role={job.function} technologies={job.technologies.join(', ')} />);

    return (
        <div className="resume">
            {resume}
        </div>
    );
}

export default Resume;