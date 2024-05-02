import { useContext } from "react";
import { AppContext } from "../App";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";
import "../styles/resume.css";

const Resume = () => {
	const { personalData } = useContext(AppContext);
	return (
		<section id="resume">
			<div>
				<article className="personal-display">
					<h3>{personalData.name}</h3>
					<p>{personalData.email}</p>
					<p>{personalData.phone}</p>
					<p>{personalData.location}</p>
				</article>

				<ExperienceDisplay />

				<EducationDisplay />
			</div>
		</section>
	);
};

export default Resume;
