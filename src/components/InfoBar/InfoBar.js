import React from 'react';
import styles from './InfoBar.module.css';
import onlineIcon from '../../Icons/onlineIcon.png';

const infoBar = ({ room }) => {
	return (
		<div className={styles.infoBar}>
			<div className={styles.leftInnerContainer}>
				<img className={styles.onlineIcon} src={onlineIcon} alt="online" />
				<h3>{room}</h3>
			</div>
			<div className={styles.rightInnerContainer}>
				<a href="/">
					<h4 className={styles.logoutBtn}>signout</h4>
				</a>
			</div>
		</div>
	);
};

export default infoBar;
