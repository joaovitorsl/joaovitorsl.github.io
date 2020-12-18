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
            <Job year="2020" org="Everdata / LSD UFCG" period="(Out 2020 - Current)" descricao="Software developer (Flask, React)" />
            <Job year="2019" org="LaTIn IFPB" period="(Apr 2019 - Dec 2019)" descricao="Smart contracts developer (Solidity)" />
            <Job year="2018" org="IFPB Campus Campina Grande" period="(Jun 2018 - Dec 2018)" descricao="Algorithms monitor (Python)" />
            <Job year="2016 / 2015" org="Colégio Alfredo Dantas" period="(2015 - Dec 2016)" descricao="Robotics team (EV3)" />
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
            <h6>SKILLS</h6>
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
            <p className="text">Hello, my name is João, 18 years old from Campina Grande, Brazil. I have been involved in development since I was 12 years old when a teacher asked me to participate in a selection for the school's robotics team and I started to learn C. The height of enthusiasm was when I managed to answer my first question: <a href="https://olimpiada.ic.unicamp.br/pratique/pj/2014/f1/fliper/">Flíper (OBI 2014)</a>, from then on I became very interested in the area, the excitement was so great that I decided to do Computer Technician at the IFPB integrated with the high school to find out if I really wanted this for my life, and look, today I am majoring in Computer Science at UFCG. The areas that most fascinate me today are Web and Data Science.</p>
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