import GitHub from '../assets/img/github.png';

const icon = {
    GitHub: {
        icon: GitHub,
        alt: "GitHub link"
    }
}

const project = [
    {
        title: "BLOCKFY",
        description: "A stream counter in React that uses a smart contract written in the Solidity language and runs on an Ethereum test network",
        url: "https://github.com/latin-ifpb/blockfy",
        icon: icon.GitHub
    }, {
        title: "Livro de Receitas",
        description: "A React site with internet recipes that worked to make it easier to find later",
        url: "https://github.com/joaovitorsl/livro-de-receitas",
        icon: icon.GitHub
    }, {
        title: "O que o IF faz por mim?",
        description: "A project that emerged in 2018 amid attacks on Universities and Federal Institutes to publicize the achievements to the community",
        url: "https://github.com/oqueoiffazpormim/oqueoiffazpormim.github.io",
        icon: icon.GitHub
    }, {
        title: "Sistema de controle acadêmico",
        description: "A Java prototype of an Academic Control System integrated with PostgreSQL",
        url: "https://github.com/joaovitorsl/Sistema-de-Controle-Academico",
        icon: icon.GitHub
    }
];

export default project;