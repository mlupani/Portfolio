import ReactTooltip from 'react-tooltip'
import styles from 'styles/About.module.css'

const SkillsIcons = () => {
	return (
		<div className={styles.flexContainer}>
			<i data-tip="React & React Native" className={`devicon-react-original colored ${styles.skillsIcon}`}></i>
			<i data-tip="Redux" className={`devicon-redux-original colored ${styles.skillsIcon}`}></i>
			<i data-tip="NextJS" className={`devicon-nextjs-original colored ${styles.skillsIcon}`}></i>
			<i data-tip="TypeScript" className={`devicon-typescript-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="Socketio" className={`devicon-socketio-original colored ${styles.skillsIcon}`}></i>
			<i data-tip="Firebase" className={`devicon-firebase-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="PHP" className={`devicon-php-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="NodeJS" className={`devicon-nodejs-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="Express" className={`devicon-express-original colored ${styles.skillsIcon}`}></i>
			<i data-tip="NestJS"className={`devicon-nestjs-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="MYSQL" className={`devicon-mysql-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="MongoDB" className={`devicon-mongodb-plain-wordmark colored ${styles.skillsIcon}`}></i>
			<i data-tip="GIT" className={`devicon-git-plain colored ${styles.skillsIcon}`}></i>
			<i data-tip="JQuery" className={`devicon-jquery-plain-wordmark colored ${styles.skillsIcon}`}></i>
			<i data-tip="Bootstrap"className={`devicon-bootstrap-plain colored ${styles.skillsIcon}`}></i>
			<ReactTooltip />
		</div>
	)
}

export default SkillsIcons
