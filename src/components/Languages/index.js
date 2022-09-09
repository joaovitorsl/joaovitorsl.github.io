import React from "react";
import language from "../../info/language";
import './styles.css';

const Language = ({ language, level }) => {
    const blocks = [];

    for (let i = 1; i <= 10; i++) {
        if (i > level) blocks.push(<div className="transparent" />);
        else blocks.push(<div className="block" />);
    }

    return (
        <div className="language">
            <p>{language}</p>
            <div className="language-level">
                {blocks}
            </div>
        </div>
    )
};

const Languages = () => {
    const languages = language.map((language) => <Language language={language.language} level={language.level} />);
    return (
        <div className="languages">
            <h6>LANGUAGES</h6>
            {languages}
        </div>
    )
};

export default Languages;