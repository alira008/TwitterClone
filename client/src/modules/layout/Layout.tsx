import React, { useState, useEffect } from 'react';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import { useHistory } from 'react-router-dom';
import { Main } from './Layout.styles';

const Layout: React.FC = ({ children }) => {
	const [isLogoutPage, setIsLogoutPage] = useState(false);
	const history = useHistory();
	const location = history.location.pathname;

	useEffect(() => {
		location == '/logout' ? setIsLogoutPage(true) : setIsLogoutPage(false);
	}, [location]);

	return (
		<>
			<header></header>
			<Main isLogoutPage={isLogoutPage}>
				{children}
				{isLogoutPage || <BottomMenu />}
			</Main>
		</>
	);
};

export default Layout;
