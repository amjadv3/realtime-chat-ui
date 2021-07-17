import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';

import styles from './TextContainer.module.css';

const TextContainer = ({ users }) => (
	<div className={styles.textContainer}>
		<div>
			<h1 className={styles.header}>Chat Application</h1>
		</div>
		{users ? (
			<div>
				<h1 className={styles.subHead}>Active people :</h1>
				<div className={styles.activeContainer}>
					<h2>
						{users.map(({ name }) => (
							<div key={name} className={styles.activeItem}>
								{name}
								<img alt="Online Icon" src={onlineIcon} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
