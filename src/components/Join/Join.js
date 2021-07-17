import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Join.module.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	return (
		<div className={styles.joinOuterContainer}>
			<div className={styles.joinInnerContainer}>
				<h1 className={styles.heading}>Join</h1>
				<div>
					<input
						className={styles.joinNameInput}
						type="text"
						placeholder="Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div>
					<input
						className={styles.joinRoomInput}
						type="text"
						placeholder="Room"
						onChange={(e) => {
							setRoom(e.target.value);
						}}
					/>
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className={styles.button} type="submit">
						Sign in
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
