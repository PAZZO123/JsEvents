//1.console.log('Hello World')

/* 2
function changeAllArticleColors() {
    const articles=document.querySelectorAll('article')
    for(let article of articles){
        article.classList.add('sale')
        article.style.backgroundColor=' #ffddd2'
    }
    console.log(article.classList)
  // ... function body
}

changeAllArticleColors() */

//3. Events
function attachBuyEvents() {
    var button=document.getElementById('products')
    button.addEventListener('click',function(e){
        if(e.target.tagName==='BUTTON'){
            alert('BUY')
        }
    })
    
  // ... function body
}

attachBuyEvents()
