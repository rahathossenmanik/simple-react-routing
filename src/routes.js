export const authProtectedRoutes = [
	{ path: '/', element: <h2>Welcome Home</h2> },
	{ path: '/home', element: <h2>Welcome Home</h2> },
	{ path: '/services', element: <h2>Services</h2> },
	{ path: '/about', element: <h2>About</h2> },
	{ path: '/contact', element: <h2>Contact</h2> },
];

export const publicRoutes = [
	{ path: '/login', element: <h2>Login</h2> },
	{ path: '/registration', element: <h2>Registration</h2> },
	{ path: '/forgot-password', element: <h2>Forgot Password</h2> },
];
