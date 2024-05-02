import { useContext } from "react";
import { AppContext } from "../App";

const ExperienceDisplay = () => {
	const { experienceData } = useContext(AppContext);

	return (
		<article className="experience-display">
			<h3>Experience</h3>
			{experienceData.map((exp) => {
				return (
					<div className="experience" key={exp.id}>
						<h4>
							{exp.company}
							<span>
								{exp.startDateExp} - {exp.endDateExp}
							</span>
						</h4>
						<p>{exp.position}</p>
						<p>{exp.responsibilities}</p>
					</div>
				);
			})}
		</article>
	);
};

export default ExperienceDisplay;
