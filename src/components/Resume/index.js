import React from "react";
import jobs from "../../info/jobs";
import Job from "../Job";

const Resume = () => {
    const resume = jobs.map((job) => <Job org={job.organization} period={`(${job.period})`} descricao={`${job.function} (${job.technologies.join(', ')})`} />);

    return (
        <div>
            {resume}
        </div>
    );
}

export default Resume;