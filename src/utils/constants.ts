import AdminRouter from "../routers/AdminRouter";
import AppRouter from "../routers/AppRouter";
import ExampleRouter from "../routers/ExampleRouter";

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
	},
	{
		subdomain: 'example',
		app: ExampleRouter,
		main: false,
	}
];