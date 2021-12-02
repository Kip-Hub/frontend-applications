const FetchData = () => {
     return new Promise((resolve) => {
        fetch("https://api.tvmaze.com/shows/169/episodes")
        .then(response => response.json())
			.then(data => {
				const bbData = data.map(data => {
                    console.log(data)
					return data
				})

				resolve(bbData)
			})
    })
};

export default FetchData;