const config = {
	development: {
		port: 2023
	},
	production: {
		port: 2024
	}
}

const env = process.env.CONFIG || 'development';

module.exports = config[env];