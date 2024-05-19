const URL = "https://rasmusweb.no/hs.php"
const GameID = "MarcusHS"

let APIHSHard = 0
let APIHSNormal = 0
let APIHSEasy = 0
let APIplayerHard = 0
let APIplayerNormal = 0
let APIplayerEasy = 0
let postBody = {}

getRequest("Hard")
getRequest("Normal")
getRequest("Easy")

async function getRequest(difficulty) {
    const apiCallPromise = await fetch(URL + "?id=" + GameID + difficulty,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            }
        })


    // Getting the json from the response (NOTE: Also await!)
    const json = await apiCallPromise.json()
    console.log(json)
    if (typeof json === 'object' && "hs" in json) {
        console.log("HS: ", json.hs)
        if (difficulty == "Hard") {
            APIHSHard = json.hs
            APIplayerHard = json.player
        }
        if (difficulty == "Normal") {
            APIHSNormal = json.hs
            APIplayerNormal = json.player
        }
        if (difficulty == "Easy") {
            APIHSEasy = json.hs
            APIplayerEasy = json.player
        }

    }
    // appendPElm(htmlObj, "hs: " + json.hs)
    // appendPElm(htmlObj, "player: " + json.player)
    document.getElementById("highscoreHolderHard").innerHTML = "HARD DIFFICULTY: " + APIplayerHard + ", with a score of: " + APIHSHard
    document.getElementById("highscoreHolderNormal").innerHTML = "NORMAL DIFFICULTY: " + APIplayerNormal + ", with a score of: " + APIHSNormal
    document.getElementById("highscoreHolderEasy").innerHTML = "EASY DIFFICULTY: " + APIplayerEasy + ", with a score of: " + APIHSEasy
}

// Poster ny HS til php backend
async function postRequest(difficulty, score) {
    const htmlObj = document.getElementById("post_result")

    postBody.id = GameID + difficulty
    postBody.hs = score
    postBody.player = prompt("Gratulerer du satte ny highscore. Om du vil øke highscoren, trykk avbryt. Ellers, skriv navnet ditt her:")

    const apiCallPromise = await fetch(URL, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: JSON.stringify(postBody),
    })

    // Getting the json from the response:
    const responseJson = await apiCallPromise.json()
    console.log(responseJson)
}

function checkHS() {
    if (hardHS > APIHSHard) {
        postRequest("Hard", hardHS)

    } else if (easyHS > APIHSEasy) {
        postRequest("Easy", easyHS)

    } else if (normalHS > APIHSNormal) {
        postRequest("Normal", normalHS)

    }


}

