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
    var button=document.getElementById('products') // . parent for delegation
    //var cart=document.getElementById('cart')
    var table=document.querySelector('table')//.table to be updated
    let grandTotal=0
    button.addEventListener('click',function(e){ // . adding event listener to the parent
       
        if(e.target.tagName==='BUTTON'){ 
            
             if ( e.target.parentElement.style.backgroundColor === 'red') {
                e.target.parentElement.style.backgroundColor = '';
          } 
          else {
                e.target.parentElement.style.backgroundColor = 'red';
               //.gettin button target from the parent
            let product=e.target.closest('article')//.trying to get the target which is closest or near to the target
            let row=document.createElement('tr')
            let price=parseFloat(product.querySelector('p').textContent)
            let names=product.querySelector('h2').textContent
            let input=product.querySelector('input')
            let btn=parseInt(input.value);//.getting input from user HTMLInputElement
            let total1=price*btn
            let foundRow = Array.from(table.rows).find((row, i) => {
  return row.cells[1] && row.cells[1].textContent === names;
});

if (foundRow) {
    // ✅ Update existing row
    let oldQty = parseInt(foundRow.cells[2].textContent);
    let newQty = oldQty + btn;
    let newTotal = newQty * price;

    foundRow.cells[2].textContent = newQty;
    foundRow.cells[4].textContent = newTotal.toFixed(2);

    grandTotal += total1; // Add to the grand total
    total.textContent = grandTotal.toFixed(2);

} else {
        const idtd=document.createElement('td')
        idtd.textContent=table.rows.length-1;//.to get the dynamic id which change as row is changing
         const nameTd=document.createElement('td')
         nameTd.textContent=names
         const qtd=document.createElement('td')
         qtd.textContent=btn
         const pricetd=document.createElement('td')
         pricetd.textContent=price;
         const totaltd=document.createElement('td')
         totaltd.textContent=total1
         const deletetd=document.createElement('td')
        
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
     
         grandTotal+=total1//increment total
         
         total.textContent=grandTotal.toFixed(2)
          //  console.log('Name is:'+names +' Price :'+price+' Quantity:'+btn)
           deletetd.addEventListener('click', function (e) {  //adding event inside another event
      
        grandTotal -= total1;//removing the deleted total
        total.textContent = grandTotal.toFixed(2);//updating the grand total
        table.removeChild(row);
      });}
  
        }}
          
    })
    
  // ... function body
}

attachBuyEvents()

