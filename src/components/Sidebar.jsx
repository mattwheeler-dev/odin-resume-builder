import PersonalDataForm from "./PersonalDataForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<section id="sidebar">
			<PersonalDataForm />
			<ExperienceForm />
			<EducationForm />
		</section>
	);
};

export default Sidebar;
