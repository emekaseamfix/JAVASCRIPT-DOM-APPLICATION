// QUERY-SELECTOR
// const wrap = document.querySelector('#wrapper');
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// });


// CHANGINT HTML CONTENT
// var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     // console.log(book.textContent)
//     // book.textContent = 'test'
//     book.textContent += ' (book-title)'

// });

// const booklist = document.querySelector('#book-list');
//     // console.log(booklist.innerHTML)
//     booklist.innerHTML = '<h2> books and more books </h2>'
//     booklist.innerHTML += '<p> added html element </p>'


// NODES
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is :", banner.nodeType)
// console.log("#page-banner node name is :", banner.nodeName)
// console.log("#page-banner node child nodes is :", banner.hasChildNodes());

// const clonebanner = banner.cloneNode(true);
// console.log(clonebanner);


// TRAVERSING THE DOM
// 1
// const booklist = document.querySelector("#book-list");
// console.log("the parent node is:", booklist.parentNode )
// console.log("the parent element is:", booklist.parentElement.parentElement)

// console.log("the child node is:", booklist.childNodes )
// console.log("the children:", booklist.children )

//2
// const booklist = document.querySelector("#book-list");
// console.log("booklist next sibling is: ", booklist.nextSibling);
// console.log("booklist next sibling is: ", booklist.nextElementSibling);

// console.log("booklist previous sibling is: ", booklist.previousSibling);
// console.log("booklist previous sibling is: ", booklist.previousElementSibling);

// booklist.previousElementSibling.querySelector('p').innerHTML +="<br/> ice and fire"



// EVENTS //FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var h2 = document.querySelector('#book-list h2')
// console.log(h2)

// h2.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// });

// var btns = document.querySelectorAll("#book-list .delete");
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });
// });

// const link = document.querySelector("#page-banner a");
// link.addEventListener("click" , function(e){
//     e.preventDefault();
//     console.log('navigate to', e.target.textContent, 'was prevented' )
// })



// EVENTS BUBBLING
// Delete box
var list = document.querySelector("#book-list ul");

    list.addEventListener('click',function(e){
        if(e.target.className == 'delete')
          {
            const d = e.target.parentElement;
            list.removeChild(d)
          }
    })
 


//INTERACTING WITH FORMS(1)   / CREATE ELEMENTS(2) /styles and classes(3)
// 1
console.log( document.forms)
console.log( document.forms[1])
console.log( document.forms['add-book'])


// add-books
const addform = document.forms['add-book'];

addform.addEventListener('submit',function(e){
    e.preventDefault();

    const value = addform.querySelector('input[type="text"]').value
    // console.log(value);

//2    
    // create elements
    const li = document.createElement('li');
    const bookname = document.createElement('span');
    const deletebtn = document.createElement('span');

    // add content
    deletebtn.textContent="delete";

    bookname.textContent = value;



    // append to dom
    li.appendChild(bookname);
    li.appendChild(deletebtn);
    list.appendChild(li) 
    
 //3   
    // add classes
    bookname.classList.add('name');
    deletebtn.classList.add('delete');


});









































// Attributes
// var book = document.querySelector('li:first-child .name')
// console.log(book)
// console.log(book.getAttribute('class'))
// console.log(book.setAttribute('class', 'name-2'))
// console.log(book.hasAttribute('class'))
// console.log(book.removeAttribute('class'))
// console.log(book)
// console.log(book.setAttribute('class', 'name'))


// CHECKBOX AND CHANGE EVENTS
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});


// CUSTOM SEARCH FILTER
const searchbar = document.forms['search-books'].querySelector('input');

searchbar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
      const title= book.firstElementChild.textContent;  

      if(title.toLowerCase().indexOf(term) != -1)
      {
        book.style.display="block";
      }
      else{
          book.style.display="none";
      }

    });
});


// TABBED CONTENT







