/** @type {import('@playwright/test').PlaywriteTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

export default config;
