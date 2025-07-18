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
/*
function attachBuyEvents() {
    var button=document.getElementById('products')
    button.addEventListener('click',function(e){
       // alert(e.currentTarget.nodeName)
       console.log(this.target)
        if(e.target.tagName==='BUTTON'){
            alert('BUY');alert(e.currentTarget)
        }
    })
    
  // ... function body
}

attachBuyEvents()*/
//4. Attributes
function attachBuyEvents() {
    var button=document.getElementById('products')
    button.addEventListener('click',function(e){
       
        if(e.target.tagName==='BUTTON'){
            let price=document.querySelector('p').textContent
            let names=button.querySelector('h2').textContent
            e.target.classList.toggle('sale')
            e.target.parentElement.style.backgroundColor='red';
            console.log('Name is:'+names +' Price :'+price)
            alert(e.target.classList)
            alert(e.target.parentElement.getAttribute('data-id'))
        }
    })
    
  // ... function body
}

attachBuyEvents()