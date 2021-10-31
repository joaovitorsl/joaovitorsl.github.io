import React from 'react';
import '../css/projects.css';
import github from '../images/github.png';

function Title() {
    return (
        <h3 id="titulo">MY PROJECTS</h3>
    );
}

function Project({ titulo, descricao, link, logo }) {
    return (
        <div bp="12 6@md 4@lg 3@xl" id="project">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className="project-links">
                <a href={link} target="blank" rel="noopener noreferrer">
                    <img src={logo} alt="GitHub link"/>
                </a>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <>
            <div id="project-page">
                <Title />
                <div id="projects" bp="grid">
                    <Project titulo="BLOCKFY" descricao="A stream counter in React that uses a smart contract written in the Solidity language and runs on an Ethereum test network" link="https://github.com/latin-ifpb/blockfy" logo={github} />
                    <Project titulo="Livro de Receitas" descricao="A React site with internet recipes that worked to make it easier to find later" link="https://github.com/joaovitorsl/livro-de-receitas" logo={github}/>
                    <Project titulo="O que o IF faz por mim?" descricao="A project that emerged in 2018 amid attacks on Universities and Federal Institutes to publicize the achievements to the community" link="https://github.com/oqueoiffazpormim/oqueoiffazpormim.github.io" logo={github}/>
                    <Project titulo="Sistema de controle acadêmico" descricao="A Java prototype of an Academic Control System integrated with PostgreSQL" link="https://github.com/joaovitorsl/Sistema-de-Controle-Academico" logo={github}/>
                </div>
            </div>
        </>
    )
}

export default Projects