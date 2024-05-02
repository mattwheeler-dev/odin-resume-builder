import { useContext } from "react";
import { AppContext } from "../App";

const EducationDisplay = () => {
	const { educationData } = useContext(AppContext);
	return (
		<article className="education-display">
			<h3>Education</h3>
			{educationData.map((edu) => {
				return (
					<div className="education" key={edu.id}>
						<h4>
							{edu.school}
							<span>
								{edu.startDateEdu} - {edu.endDateEdu}
							</span>
						</h4>
						<p>{edu.degree}</p>
					</div>
				);
			})}
		</article>
	);
};

export default EducationDisplay;
