let savedForLaterBtns = document.getElementsByClassName("saveForLater") /* gets all "save for later" buttons */

let savedArticles = [] /* empty array to hold the saved console sections */

function saveArticle() {
    let consoleContent = this.parentElement.parentElement.parentElement.outerHTML /* gets outerHTML for the whole console section */

    savedArticles.push(consoleContent) /* pushes the content into the array */

    alert(`You have saved ${savedArticles.length} article(s)`) /* alerts how many articles have been saved */

    localStorage.setItem("savedArticles", JSON.stringify(savedArticles)) /* sets the "savedArticles" value in local storage so the user can look at them later */
}

for (let i = 0; i < savedForLaterBtns.length; i++) { /* applies saveArticle() to each button */
    savedForLaterBtns[i].addEventListener("click", saveArticle)
}

let likeBtns = document.getElementsByClassName("like") /* gets all "like" buttons */

function likeBtn() { /* function to toggle the "liked" class on an element */
    this.classList.toggle("liked")
}

for (let i = 0; i < likeBtns.length; i ++) { /* adds the likeBtn() function to all like buttons */
    likeBtns[i].addEventListener("click", likeBtn)
}