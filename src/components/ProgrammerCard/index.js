import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import photo from '../../assets/img/joao.jpg';
import useProgrammerCard from './hook';
import './styles.scss';

const Next = ({ id, setId }) => {
    const handleClick = () => {
        if (id < 4) {
            setId(id + 1);
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

const Previous = ({ id, setId }) => {
    const handleClick = () => {
        if (id > 0) {
            setId(id - 1);
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
    const { infoAbout } = useProgrammerCard();

    return (
        <div className="programmer-card">
            <Header />

            <div className="content">
                <div className='hide-info'></div>
                <div className="info">
                    <div id="prev" className="controlador"> <Previous id={id} setId={setId} /> </div>
                    <div className='info'>
                        {infoAbout[id]}
                    </div>
                    <div id="next" className="controlador"> <Next id={id} setId={setId} /> </div>
                </div>
                <div className="photo">
                    <img src={photo} alt="Self portrait in pixel art" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProgrammerCard
