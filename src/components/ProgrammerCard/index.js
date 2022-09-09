import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';
import joao from '../../assets/img/joao.jpg';
import Resume from '../Resume';
import Languages from '../Languages';
import Hobbies from '../Hobbies';
import Skills from '../Skills';
import Summary from '../Summary';

const infoAbout = [
    <Summary />,
    <Skills />,
    <Hobbies />,
    <Languages />,
    <Resume />
]

function Next({id, setId}) {
    function handleClick() {
        if (id < 4) {
            setId(id+1);
        } else {
            setId(0);
        }
    }

    return (
        <div id="controller" type="button" onClick={handleClick}>
            &gt;
        </div>
    );
}

function Previous({id, setId}) {
    function handleClick() {
        if (id > 0) {
            setId(id-1);
        } else {
            setId(4);
        }
    }

    return (
        <div id="controller" type="button" onClick={handleClick}>
            &lt;
        </div>
    );
}

const ProgrammerCard = () => {
    const [id, setId] = useState(0);

    return (
        <>
            <div className="about-page">
                <div className="titulo">
                    <Header />
                </div>

                <div bp="grid" className="content">
                    <div bp="12 8@lg" className="info">
                        <div id="prev" className="controlador"> <Previous id={id} setId={setId}/> </div>
                        <Info id={id}/>
                        <div id="next" className="controlador"> <Next id={id} setId={setId}/> </div>
                    </div>
                    <div bp="8" className="photo">
                        <img src={joao} alt="Self portrait in pixel art" />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

function Info({id}) {
    return (
        infoAbout[id]
    );
}

export default ProgrammerCard
