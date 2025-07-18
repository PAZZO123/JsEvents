//onsole.log('Hello World')
function changeAllArticleColors() {
    const articles=document.querySelectorAll('article')
    for(let article of articles){
        article.classList.add('sale')
    }
    console.log(article.classList)
  // ... function body
}

changeAllArticleColors()
