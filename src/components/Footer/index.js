import React from "react";
import Badge from "../Badge";
import badges from "../../info/badges";
import './styles.css';

const Footer = () => {
    const grid = badges.map(
        (badge, index) => <Badge number={index + 1} badge={badge.icon} title={`${badge.name} | ${JSON.stringify(badge.win)}`} />
    )

    return (
        <div className="footer">
            <div className="footer-badges">
                <span>BADGES</span>
                <div className="badges">
                    <div bp="grid">
                        <div></div>
                        <div></div>
                        {grid}
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Footer;