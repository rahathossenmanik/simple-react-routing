import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';
import { Container } from 'reactstrap';
import Topbar from './components/Topbar';
import { publicRoutes, authProtectedRoutes } from './routes';

const App = () => {
	const auth = true;
	return (
		<Router>
			<div className='App wrapper'>
				<Container fluid className='p-0 is-open'>
					<Topbar />
					<content>
						<Routes>
							{authProtectedRoutes.map((route, i) => (
								<Route exact path={route.path} element={route.element} />
							))}
							{auth &&
								publicRoutes.map((route, i) => (
									<Route exact path={route.path} element={route.element} />
								))}
						</Routes>
					</content>
				</Container>
			</div>
		</Router>
	);
};

export default App;
