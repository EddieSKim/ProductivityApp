import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';

function Navbar() {
    const [mainSelected, setMainSelected] = useState(true);
    const [metricsSelected, setMetricsSelected] = useState(false);

    const navSelectorOnclick = () => {
        setMainSelected(!mainSelected);
        setMetricsSelected(!metricsSelected);
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.title}>
                Productivity App
            </div>
            <div className={styles.selectorsWrapper}>
                <div className={mainSelected ?
                    styles.selectorBack : styles.notSelectorBack}>
                    <Link
                        onClick={navSelectorOnclick}
                        className={mainSelected ?
                            styles.selectedLinkButton : styles.notSelectedLinkButton}
                        to="/">
                        <HomeIcon className={styles.icon} />
                        Home
                    </Link>
                </div>
                <div className={metricsSelected ?
                    styles.selectorBack : styles.notSelectorBack}>
                    <Link
                        onClick={navSelectorOnclick}
                        to="/metrics"
                        className={metricsSelected ?
                            styles.selectedLinkButton : styles.notSelectedLinkButton}>
                        <PieChartIcon className={styles.icon} />
                        Metrics
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;