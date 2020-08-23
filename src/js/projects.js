import React from 'react';
import '../css/projects.css';
import github from '../images/github.png';

function Title() {
    return (
        <h3>MY PROJECTS</h3>
    );
}

function Project({ titulo, descricao, link, logo }) {
    return (
        <div id="project">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className="project-links">
                <a href={link} target="blank" rel="noopener noreferrer">
                    <img src={logo} />
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
                <div id="projects">
                    <Project titulo="BLOCKFY" descricao="Um contador de stream React que utiliza de Smart Contracts escritos na linguagem Solidity e executados em uma rede de testes Ethereum" link="https://github.com/latin-ifpb/blockfy" logo={github} />
                    <Project titulo="Livro de Receitas" descricao="Um site React com receitas da internet que deram certo para ficar mais fácil de achar depois" link="https://github.com/joaovitorsl/livro-de-receitas" logo={github}/>
                    <Project titulo="O que o IF faz por mim?" descricao="Um projeto que surgiu em 2018 em meio a ataques as Universidades e Institutos Federais visando divulgar os feitos para a comunidade" link="https://github.com/oqueoiffazpormim/oqueoiffazpormim.github.io" logo={github}/>
                    <Project titulo="Sistema de controle acadêmico" descricao="Uma protótipo em Java de um Sistema de Controle Acadêmico integrado com PostgreSQL" link="https://github.com/joaovitorsl/Sistema-de-Controle-Academico" logo={github}/>
                </div>
            </div>
        </>
    )
}

export default Projects