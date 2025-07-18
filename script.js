//onsole.log('Hello World')
function changeAllArticleColors() {
    const articles=document.querySelectorAll('article')
    for(let article of articles){
        article.classList.add('sale')
        article.style.backgroundColor=' #ffddd2'
    }
    console.log(article.classList)
  // ... function body
}

changeAllArticleColors()
