import React from 'react';
import DS from '../images/2DS.png';
import Games from '../images/games.png';
import Musica from '../images/musica.png';
import Filmes from '../images/filme.png';
import instrumentos from '../images/instrumentos.png';
import '../css/about.css';
import '../css/about_habilities.css';
import '../css/about_hobbies.css';
import '../css/about_jobs.css';
import '../css/about_text.css';
import '../css/about_languages.css';

const infoAbout = [
    <Informacoes />,
    <Habilidades />,
    //<Software />,
    <Hobbies />,
    <Languages />,
    <Jobs />
]

function Job({ year, org, period, descricao }) {
    return (
        <>
            <div className="job_section">
                <h3>{year}</h3>
                <div className="job_item">
                    <span>{org}</span>
                    <small>{period}</small>
                    <div className="job_desc">
                        <ul>
                            <li>{descricao}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

function Jobs() {
    return (
        <div className="about_job">
            <Job year="2019" org="LaTIn IFPB" period="(Apr 2019 - Dec 2019)" descricao="Desenvolvedor de Smart Contracts (Solidity)" />
            <Job year="2018" org="IFPB Campus Campina Grande" period="(Jun 2018 - Dec 2018)" descricao="Monitor de Algoritmos (Python)" />
            <Job year="2016 / 2015" org="Colégio Alfredo Dantas" period="(2015 - Dec 2016)" descricao="Equipe de Robótica (EV3)" />
        </div>
    );
}

function Hobbies() {
    return (
        <div id="page-hobbies">
            <h6>HOBBIES</h6>
            <div bp="grid" className="hobbies">
                <div bp="6@sm 4@md" className="hobbie_item">
                    <div id="img"><img src={Musica} /></div>
                    <div><p>Music</p></div>
                </div>
                <div bp="6@sm 4@md" className="hobbie_item">
                    <div id="img"><img src={instrumentos} /> </div>
                    <div><p>Sing and play</p></div>
                </div>
                <div bp="4@md" className="hobbie_item">
                    <div id="img"><img src={Filmes} /></div>
                    <div><p>Films</p></div>
                </div>
                <div bp="6@sm" className="hobbie_item">
                    <div id="img"><img src={DS} /></div>
                    <div><p>My 2DS &lt;3</p></div>
                </div>
                <div bp="6@sm" className="hobbie_item">
                    <div id="img"><img src={Games} /></div>
                    <div><p>Games</p></div>
                </div>
            </div>
            <p id="referencia">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
    );
}

function Habilidades() {
    return (
        <div id="habilities">
            <h6>ABILITIES</h6>
            <p id="html">HTML 5</p>
            <p id="css">CSS</p>
            <p id="js">JavaScript</p>
            <p id="react">React</p>
            <hr />
            <p id="sql">PostgreSQL</p>
            <hr />
            <p id="c">C</p>
            <p id="cpp">C++</p>
            <p id="py">Python</p>
            <p id="java">Java</p>
            <hr />
            <p id="sol">Solidity</p>
        </div>
    );
}

function Software() {
    return (
        <div>
            Linux
            Windows
            KDEnlive
            Adobe Photoshop
            GitHub
        </div>
    );
}

function Informacoes() {
    return (
        <div>
            <p className="text">Olá me chamo João, campinense de 18 anos e estou envolvido com desenvolvimento desde meus 12 anos, quando um professor me chamou pra participar de uma seleção para a equipe de robótica do colégio e começou a dar aulas de C. O ápice da empolgação foi quando consegui fazer minha primeira questão: Flíper (OBI 2014), a partir de então me interessei bastante pela área, a empolgação foi tanta que fui fazer o Técnico em Informática no IFPB para saber se eu realmente queria isso pra minha vida, e olha só, hoje sou graduando em Ciência da Computação na UFCG. As áreas que mais me fascinam atualmente são Web e Data Science.</p>
        </div>
    );
}

function Languages() {
    return (
        <div id="languages">
            <h6>LANGUAGES</h6>
            <p>Português</p>
            <div id="espanhol">
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
            </div>
            <p>English</p>
            <div id="espanhol">
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
            </div>
            <p>Español</p>
            <div id="espanhol">
                <div id="block"></div>
                <div id="block"></div>
                <div id="block"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
                <div id="transparent"></div>
            </div>


        </div>
    );
}
export default infoAbout;