const getData = async (url) => {
    try {
        const data = await fetch("https://api.github.com/users/w3cdpass");
        console.log(data.json());
        return data;
    } catch (e) {
        console.log("There was an error fetching the data: " + error)
    }
}
getData()