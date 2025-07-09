import React from "react";
import {
	Nav,
	NavLink,
	NavbarContainer,
	Span,
	NavLogo,
	NavItems,
	GitHubButton,
	ButtonContainer,
	MobileIcon,
	MobileMenu,
	MobileLink,
} from "./NavbarStyledComponent";
// import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import logo from "../../Assets/logo-no-background.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const theme = useTheme();
	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<a
						href="/"
						style={{
							display: "flex",
							alignItems: "center",
							color: "white",
							// marginBottom: "20;",
							cursor: "pointer",
							textDecoration: "none",
						}}
					>
						{/* <DiCssdeck size="3rem" /> <Span>Portfolio</Span> */}
						<img src={logo} alt="Portfolio Logo" width="64px" />
						{/* <Logo /> */}
						<Span style={{ margin: "0.5rem" }}>Portfolio</Span>
					</a>
				</NavLogo>
				<MobileIcon
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{!isOpen && <FaBars />}
					{isOpen && <IoCloseSharp />}
				</MobileIcon>
				<NavItems>
					{/*<NavLink href="#about">About</NavLink>*/}
					<NavLink href="#skills">Skills</NavLink>
					<NavLink href="#experience">Experience</NavLink>
					<NavLink href="#projects">Projects</NavLink>
					<NavLink href="#education">Education</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</NavItems>
				<ButtonContainer>
					<GitHubButton href={Bio.github} target="_blank">
						Github Profile
					</GitHubButton>
				</ButtonContainer>
				{isOpen && (
					<MobileMenu isOpen={isOpen}>
						<MobileLink
							href="#skills"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Skills
						</MobileLink>
						<MobileLink
							href="#experience"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Experience
						</MobileLink>
						<MobileLink
							href="#projects"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Projects
						</MobileLink>
						<MobileLink
							href="#education"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Education
						</MobileLink>
						<MobileLink
							href="mailto:contact@dishangmehta12.me"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Contact
						</MobileLink>
						<GitHubButton
							style={{
								padding: "10px 16px",
								background: `${theme.primary}`,
								color: "white",
								width: "max-content",
							}}
							href={Bio.github}
							target="_blank"
						>
							Github Profile
						</GitHubButton>
					</MobileMenu>
				)}
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
