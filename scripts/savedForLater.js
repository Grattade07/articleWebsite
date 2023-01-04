let main = document.getElementById("main")

function onLoad() { /* loads the saved articles when the Saved for later page is opened */
    let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) /* gets the saved articles list */
   
    for (let i = 0; i < savedArticles.length; i++) { /* creates a new paragraph for each article, then appends it to the "main" element */
        let contentHolder = document.createElement("p")

        contentHolder.innerHTML = savedArticles[i] /* updates the innerHTML of the paragraph to the saved article */

        main.appendChild(contentHolder)
    }

    let saveLaterBtn = document.getElementsByClassName("saveForLater")

    for (let i = 0 ; i < saveLaterBtn.length; i++) { /* changes the display of all "Save for later" buttons to none to hide them */
        saveLaterBtn[i].style.display = "none"
    }

    let likeBtn = document.getElementsByClassName("like")

    for (let i = 0; i < likeBtn.length; i ++) { /* changes the display of all "like" buttons to none to hide them */
        likeBtn[i].style.display = "none"
    }
}