import { useState, createContext } from "react";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import SampleData from "./SampleData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logo.png";

export const AppContext = createContext();

const App = () => {
	// STATES
	const [personalData, setPersonalData] = useState(SampleData.personalData);
	const [experienceData, setExperienceData] = useState(
		SampleData.experienceData
	);
	const [educationData, setEducationData] = useState(SampleData.educationData);

	return (
		<>
			<h1>
				<FontAwesomeIcon icon={faFileLines} />
				Resume Builder
			</h1>
			<img id="logo" src={Logo} alt="logo of a M and W" />
			<AppContext.Provider
				value={{
					personalData,
					setPersonalData,
					experienceData,
					setExperienceData,
					educationData,
					setEducationData,
				}}
			>
				<Sidebar />
				<Resume />
			</AppContext.Provider>

			{/* <footer>
				Find Me:
				<a
					href="https://www.linkedin.com/in/mattwheeler-dev/"
					target="_blank"
					rel="noreferrer"
				>
				</a>
				<a
					href="https://github.com/mattwheeler-dev"
					target="_blank"
					rel="noreferrer"
				>
				</a>
				<a href="https://mattwheeler-dev.com/" target="_blank" rel="noreferrer">
				</a>
			</footer> */}
		</>
	);
};

export default App;
