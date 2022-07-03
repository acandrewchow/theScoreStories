var json
var left = 0
var right = 2
fetch('js/stories.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        json = data
        const stories = document.createElement("div")
        stories.className="card"
        const storiesRow = document.createElement("div")
        storiesRow.className = "card-row"
        
        for (let story = 0; story < 3; story++) {
            const card = document.createElement("div")
            card.className="card-container"
            if(story == left){
                card.id = "left"
            }
            if(story == right){
                card.id = "right"
            }
            const img = document.createElement("img")
            img.className = "card-image"
            img.src = data.stories[story].picture
            img.alt = "Picture of " + data.stories[story].name
            const name = document.createElement("div")
            name.className = "card-name"
            name.innerText = data.stories[story].name
            card.appendChild(name)
            const text = document.createElement("p")
            text.className = "card-story"
            text.innerText = data.stories[story].story
            card.appendChild(text)
            storiesRow.appendChild(card)
        }

        stories.appendChild(storiesRow)
        document.body.appendChild(stories)
    })
    .catch(error => console.log(error));
