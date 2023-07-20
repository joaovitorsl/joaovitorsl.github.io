import React from "react";
import Badge from "../Badge";
import badges from "../../info/badges";
import './styles.scss';

const Footer = () => {
    const grid = badges.map(
        (badge, index) => <Badge number={index + 1} badge={badge.icon} title={`${badge.name} | ${JSON.stringify(badge.win)}`} />
    )

    return (
        <div className="footer">
            <div className="footer-badges">
                <span>BADGES</span>
                <div className="badges">
                    {grid}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Footer;