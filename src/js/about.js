import React, { useState } from 'react';
import '../css/about.css';
import OPI from '../images/opi.png';
import OBR from '../images/obr.png';
import TJR from '../images/tjr.png';
import OBG from '../images/obg.png';
import ORI from '../images/ori.png';
import joao from '../images/joao.jpg';
import infoAbout from './infoAbout';
import { HashRouter, useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

let id = 0;

function Next() {
    const history = useHistory();

    function handleClick() {
        if (id < 4) {
            id += 1;
        } else {
            id = 0;
        }
        history.push("/about/" + id);
    }

    return (
        <div id="controller" type="button" onClick={handleClick}>
            &gt;
        </div>
    );
}

function Previous() {
    const history = useHistory();

    function handleClick() {
        if (id > 0) {
            id -= 1;
        } else {
            id = 4;
        }
        history.push("/about/" + id);
    }

    return (
        <div id="controller" type="button" onClick={handleClick}>
            &lt;
        </div>
    );
}

function Header() {
    return (
        <div bp="grid" className="header">
            <h3 bp="12 6@sm" className="programmerCard">PROGRAMMER CARD</h3>
            <h3 bp="12 6@sm" className="nome"> JOÃO VITOR</h3>
        </div>
    );
}

function Badge({ src, number, text }) {
    return (
        <div class="tooltip" bp="3 1@md">
            <div className="badge" style={{ position: "relative" }}>
                <span style={{ position: "absolute", bottom: "5px", right: "5px", fontSize: "0.8rem" }}>{number}</span>
                <img src={src} />
            </div>
            <span class="tooltiptext">{text}</span>
        </div>
    );
}

function Badges() {
    return (
        <div className="footer">
            <h5>BADGES</h5>
            <div className="badges" bp="grid">
                <Badge number="1" src={OBR} text={"BRAZILIAN ROBOTICS OLYMPIAD | Bronze medal (2015)"} />
                <Badge number="2" src={TJR} text={"YOUNG ROBOTICS TOURNAMENT | Gold medal PB (2015)"} />
                <Badge number="3" src={OPI} text={"PARAIBA COMPUTER OLYMPICS | Silver medal (2019) / Honor to merit (2015, 2019)"} />
                <Badge number="4" src={ORI} text={"REGIONAL INFORMATICS OLYMPICS | Bronze medal (2019)"} />
                <Badge number="5" src={OBG} text={"GEOBRASIL OLYMPICS | Gold medal PB (2019)"} />
                <Badge number="6" />
                <Badge number="7" />
                <Badge number="8" />
            </div>
        </div>
    );
}

const About = () => {
    const [id, setId] = useState(0);
    return (
        <>
            <div className="about-page">
                <div className="titulo">
                    <Header />
                </div>

                <div bp="grid" className="content">
                    <div bp="12 8@lg" className="info">
                        <div id="prev" className="controlador"> <Previous /> </div>
                        <div id="t">
                            <HashRouter basename={process.env.PUBLIC_URL}>
                                <Switch>
                                    <Route path="/about/:id">
                                        <Info />
                                    </Route>
                                </Switch>
                            </HashRouter>
                        </div>
                        <div id="next" className="controlador"> <Next /> </div>
                    </div>
                    <div bp="12 8@lg" className="photo">
                        <img src={joao}></img>
                    </div>
                </div>

                <div className="olimpiadas">
                    <Badges />
                </div>
            </div>
        </>
    )
}

function Info() {
    let { id } = useParams();
    return (
        infoAbout[id]
    );
}

export default About