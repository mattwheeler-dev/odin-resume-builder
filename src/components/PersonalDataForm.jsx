import { useState, useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const PersonalDataForm = () => {
	const [expanded, setExpanded] = useState(true);
	const { setPersonalData } = useContext(AppContext);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const submitForm = (e) => {
		e.preventDefault();
		setPersonalData({
			name: e.target[0].value,
			email: e.target[1].value,
			phone: e.target[2].value,
			location: e.target[3].value,
		});
	};

	return (
		<>
			<h2>
				<FontAwesomeIcon icon={faAddressBook} />
				Personal
				<FontAwesomeIcon
					className="toggler"
					icon={expanded ? faChevronUp : faChevronDown}
					onClick={toggleExpand}
				/>
			</h2>
			{expanded && (
				<form onSubmit={submitForm}>
					<label htmlFor="full-name">Full Name</label>
					<input type="text" id="full-name" placeholder="First and Last name" />

					<label htmlFor="email">Email</label>
					<input type="text" id="email" placeholder="Preferred email address" />

					<label htmlFor="phone">Phone Number</label>
					<input type="text" id="phone" placeholder="Preferred phone number" />

					<label htmlFor="personal-location">Location</label>
					<input
						type="text"
						id="personal-location"
						placeholder="Ex: Seattle, WA / London, UK"
					/>

					<input type="submit" value="Save" />
				</form>
			)}
		</>
	);
};

export default PersonalDataForm;
