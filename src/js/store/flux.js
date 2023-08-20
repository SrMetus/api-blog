const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			details: {},
			favorite: []

		},
		actions: {
			getCharacters: (url) => {
				fetch(url)
					.then(resp => resp.json()
					)
					.then(data => {
						setStore({ characters: data.results });
						console.log("FlUX", data)
					})
					.catch(error => {
						console.log(error);
					});
			},
			getLocations: (url) => {
				fetch(url)
				.then(resp => resp.json()
				)
				.then(data => {
					setStore({ locations: data.results });
					console.log("Flux", data.results)
				})
				.catch(error => {
					console.log(error);
				})
			},
			getCharactersDetails: (url) => {
				fetch(url)
				.then(resp => resp.json()
				)
				.then(data => {
					setStore({ details: data })
				})
				.catch(error => {
					console.log("error de fetch", error)
				})
			},
			addFavorite: fav => {
				const store = getStore();
				const updateFavorite = [...store.favorite, fav];
				setStore({favorite: updateFavorite});
			}


		}
	}
};

export default getState;
