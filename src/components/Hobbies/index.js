import React from "react";
import DS from '../../assets/img/2DS.png';
import Games from '../../assets/img/games.png';
import Musica from '../../assets/img/musica.png';
import Filmes from '../../assets/img/filme.png';
import instrumentos from '../../assets/img/instrumentos.png';
import './styles.css';

const Hobbies = () => {
    return (
        <div className="page-hobbies">
            <h6>HOBBIES</h6>
            <div bp="grid" className="hobbies">
                <div bp="6@sm 4@md" className="hobbie-item">
                    <div><img src={Musica} alt="Music" /></div>
                    <div><p>Music</p></div>
                </div>
                <div bp="6@sm 4@md" className="hobbie-item">
                    <div><img src={instrumentos} alt="Flute and Microphone" /> </div>
                    <div><p>Sing and play</p></div>
                </div>
                <div bp="4@md" className="hobbie-item">
                    <div><img src={Filmes} alt="Films" /></div>
                    <div><p>Films</p></div>
                </div>
                <div bp="6@sm" className="hobbie-item">
                    <div><img src={DS} alt="Nintendo 2DS" /></div>
                    <div><p>My 2DS &lt;3</p></div>
                </div>
                <div bp="6@sm" className="hobbie-item">
                    <div><img src={Games} alt="Games" /></div>
                    <div><p>Games</p></div>
                </div>
            </div>
            <p className="referencia">Some icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
    );
}

export default Hobbies;