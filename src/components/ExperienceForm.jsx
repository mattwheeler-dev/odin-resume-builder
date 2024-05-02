import { useState, useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faChevronUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const ExperienceForm = () => {
	const [expanded, setExpanded] = useState(false);
	const { experienceData, setExperienceData } = useContext(AppContext);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const cryptoUuid = () => {
		return crypto.randomUUID();
	};

	const submitForm = (e) => {
		e.preventDefault();
		setExperienceData((prev) => [
			...prev,
			{
				id: cryptoUuid(),
				company: e.target[0].value,
				position: e.target[1].value,
				responsibilities: e.target[2].value,
				startDateExp: e.target[3].value,
				endDateExp: e.target[4].value,
			},
		]);
	};

	const deleteExp = (e) => {
		let targetExp = e.target.parentElement.dataset.key;
		setExperienceData((data) => data.filter((exp) => exp.id !== targetExp));
	};

	return (
		<>
			<h2>
				<FontAwesomeIcon icon={faBriefcase} />
				Experience
				<FontAwesomeIcon
					className="toggler"
					icon={expanded ? faChevronUp : faChevronDown}
					onClick={toggleExpand}
				/>
			</h2>

			{expanded && (
				<>
					<form onSubmit={submitForm}>
						<label htmlFor="company-name">Company</label>
						<input type="text" id="company-name" placeholder="Company Name" />

						<label htmlFor="position">Position</label>
						<input
							type="text"
							id="position"
							placeholder="Position / Job Title"
						/>

						<label htmlFor="responsibilities">Responsibilities</label>
						<textarea
							name="responsibilities"
							id="responsibilities"
							cols="25"
							rows="5"
							placeholder="Summarize your primary responsibilities while in this role"
						></textarea>

						<label htmlFor="start-date-exp">Start Date</label>
						<input type="text" id="start-date-exp" placeholder="MM/YYYY" />

						<label htmlFor="end-date-exp">End Date</label>
						<input type="text" id="end-date-exp" placeholder="MM/YYYY" />

						<input type="submit" value="Add" />
					</form>
					{experienceData.map((exp) => {
						return (
							<div className="exp-edit" key={exp.id} data-key={exp.id}>
								<p>{exp.company}</p>
								<p>{exp.position}</p>
								<button onClick={deleteExp}>Delete</button>
							</div>
						);
					})}
				</>
			)}
		</>
	);
};

export default ExperienceForm;
