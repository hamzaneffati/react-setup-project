const prod = {
	url: {
		API_URL: 'http://127.0.0.1:8080'
	}
};
const dev = {
	url: {
		API_URL: 'http://127.0.0.1:8080'
	}
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
