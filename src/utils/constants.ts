import AdminRouter from "../routers/AdminRouter";
import AppRouter from "../routers/AppRouter";

export const APPS = [
	{
		subdomain: 'www',
		app: AppRouter,
		main: true,
	},
	{
		subdomain: 'admin',
		app: AdminRouter,
		main: false,
	}
];