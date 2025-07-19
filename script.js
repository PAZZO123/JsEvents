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

/*
function attachBuyEvents() {
    var button=document.getElementById('products')
    button.addEventListener('click',function(e){
       
        if(e.target.tagName==='BUTTON'){
            //const product=e.target.closest('article')
            let price=document.querySelector('p').textContent
            let names=button.querySelector('h2').textContent
            let input=button.querySelector('input')
            let btn=input.value;
            e.target.classList.toggle('sale')
            if ( e.target.parentElement.style.backgroundColor === 'red') {
                e.target.parentElement.style.backgroundColor = '';
          } 
          else {
                e.target.parentElement.style.backgroundColor = 'red';
               }
          
            console.log('Name is:'+names +' Price :'+price+' Quantity:'+btn)
            //alert(e.target.classList)
            //alert(e.target.parentElement.getAttribute('data-id'))
        }
          
    })
    
  // ... function body
}

attachBuyEvents() */

//5 . Creating Element
function attachBuyEvents() {
    var button=document.getElementById('products') // parent for delegation
    //var cart=document.getElementById('cart')
    var table=document.querySelector('table')//table to be updated
    let grandTotal=0
    button.addEventListener('click',function(e){ // adding event listener to the parent
       
        if(e.target.tagName==='BUTTON'){ //gettin button target from the parent
            let product=e.target.closest('article')//trying to get the target which is closest or near to the target
            let row=document.createElement('tr')
            let price=parseFloat(product.querySelector('p').textContent)
            let names=product.querySelector('h2').textContent
            let input=product.querySelector('input')
            let btn=parseInt(input.value);//getting input from user HTMLInputElement
            let total1=price*btn
        const idtd=document.createElement('td')
        idtd.textContent=table.rows.length-1;
         const nameTd=document.createElement('td')
         nameTd.textContent=names
         const qtd=document.createElement('td')
         qtd.textContent=btn
         const pricetd=document.createElement('td')
         pricetd.textContent=price;
         const totaltd=document.createElement('td')
         totaltd.textContent=total1
         const deletetd=document.createElement('td')
         const deletes=document.createElement('a')
         deletetd.innerHTML='<a>X</a>'
         deletetd.href='#'
         deletetd.style.cssText='display:flex; color:red; justify-content: center; align-items:center; text-decoration:none;backgroun-color:green;'

         row.appendChild(idtd)
         row.appendChild(nameTd)
         row.appendChild(qtd)
         row.appendChild(pricetd)
         row.appendChild(totaltd)
         row.appendChild(deletetd)
         table.appendChild(row)
         let total=document.getElementById('total')
     
         grandTotal+=total1
         
         total.textContent=grandTotal.toFixed(2)
          //  console.log('Name is:'+names +' Price :'+price+' Quantity:'+btn)
           deletetd.addEventListener('click', function (e) {
      
        grandTotal -= total1;
        total.textContent = grandTotal.toFixed(2);
        table.removeChild(row);
      });
  
        }
          
    })
    
  // ... function body
}

attachBuyEvents()

