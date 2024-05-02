import { useState, useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faChevronUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const EducationForm = () => {
	const [expanded, setExpanded] = useState(false);
	const { educationData, setEducationData } = useContext(AppContext);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const cryptoUuid = () => {
		return crypto.randomUUID();
	};

	const submitForm = (e) => {
		e.preventDefault();
		setEducationData((prev) => [
			...prev,
			{
				id: cryptoUuid(),
				school: e.target[0].value,
				degree: e.target[1].value,
				startDateEdu: e.target[2].value,
				endDateEdu: e.target[3].value,
			},
		]);
	};

	const deleteEdu = (e) => {
		let targetEdu = e.target.parentElement.dataset.key;
		setEducationData((data) => data.filter((edu) => edu.id !== targetEdu));
	};

	return (
		<>
			<h2>
				<FontAwesomeIcon icon={faGraduationCap} />
				Education
				<FontAwesomeIcon
					className="toggler"
					icon={expanded ? faChevronUp : faChevronDown}
					onClick={toggleExpand}
				/>
			</h2>

			{expanded && (
				<>
					<form onSubmit={submitForm}>
						<label htmlFor="university">University</label>
						<input type="text" id="university" placeholder="University Name" />

						<label htmlFor="degree">Degree</label>
						<input
							type="text"
							id="degree"
							placeholder="Degree or field of study"
						/>

						<label htmlFor="start-date-edu">Start Date</label>
						<input type="text" id="start-date-edu" placeholder="MM/YYYY" />

						<label htmlFor="end-date-edu">End Date</label>
						<input type="text" id="end-date-edu" placeholder="MM/YYYY" />

						<input type="submit" value="Add" />
					</form>

					{educationData.map((edu) => {
						return (
							<div className="edu-edit" key={edu.id} data-key={edu.id}>
								<p>{edu.school}</p>
								<p>{edu.degree}</p>
								<button onClick={deleteEdu}>Delete</button>
							</div>
						);
					})}
				</>
			)}
		</>
	);
};

export default EducationForm;
