const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []

		},
		actions: {
			getCharacters: (url) => {
				fetch(url, {
					method: 'GET',
					redirect: 'follow',
					"Content-type": "application-json"
				  })
					.then(resp => JSON.parse(resp)
					)
					.then(data => {
						// setStore({ characters: data.results });
						console.log("FlUX", data)
					})
					.catch(error => {
						console.log(error);
					});
			}

		}
	}
};

export default getState;
