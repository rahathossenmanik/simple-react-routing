import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAlignLeft,
	faBarsStaggered,
	faListDots,
	faListUl,
} from '@fortawesome/free-solid-svg-icons';
import {
	Navbar,
	Button,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { rastercellLogo } from '../assets/images';

const Topbar = () => {
	const [topbarIsOpen, setTopbarOpen] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	useEffect(() => {
		windowWidth <= 576 ? setTopbarOpen(false) : setTopbarOpen(true);
	}, [windowWidth]);

	const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

	return (
		<Navbar dark className='navbar shadow' expand='sm'>
			<a href='https://rastercell.com' alt='Logo' target='_blank'>
				<img
					src={rastercellLogo}
					alt='Rastercell Logo'
					style={{ width: 150 }}
					className='mt-1 me-2'
				/>
			</a>
			<NavbarToggler onClick={toggleTopbar} />
			<Collapse isOpen={topbarIsOpen} navbar>
				<Nav className='ms-auto' navbar>
					<NavItem>
						<NavLink tag={Link} to={'/login'} className='p-3'>
							Login
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/registration'} className='p-3'>
							Registration
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/forgot-password'} className='p-3'>
							Forgot Password
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/services'} className='p-3'>
							Services
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/about'} className='p-3'>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/contact'} className='p-3'>
							Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Topbar;
