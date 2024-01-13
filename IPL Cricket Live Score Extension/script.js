async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=0582f017-2f88-42b3-beb7-16e493845dad&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success")return;
            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData = matchesList.filter(match => match.series_id == "725a99ae-93a5-48ea-99a7-9ad10b860481").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});
            
            document.getElementById("matches").innerHTML = relevantData.map(match =>`<li>${match}</li>`).join();

            return relevantData;

        })
}

getMatchData();