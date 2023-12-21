function subscriptionKey() {
    const subscriptionKey = document.querySelector('input[type="text"][name="dips-subscription-key"]').value
    document.getElementById("resultater").innerHTML = "<b>Aktivert dips-subscription-key: </b>" + subscriptionKey;
}

//function getAPI() {
    
async function getAPI() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getAPI2() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
