import React from 'react';
import project from '../../info/projects';
import './styles.css';

function Project({ titulo, descricao, link, logo }) {
    return (
        <div bp="12 6@md 4@lg 3@xl" className="project">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div>
                <a href={link}>
                    <img src={logo.icon} alt={logo.alt} />
                </a>
            </div>
        </div>
    );
}

const Projects = () => {
    const projects = project.map((project) => <Project titulo={project.title} descricao={project.description} link={project.url} logo={project.icon} />);
    return (
        <div className="project-page">
            <h3 className="project-titulo">MY PROJECTS</h3>
            <div className="projects" bp="grid">
                {projects}
            </div>
        </div>
    )
}

export default Projects