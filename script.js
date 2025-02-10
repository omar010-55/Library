const container = document.getElementById("container")
const theBooks = document.getElementById("theBooks")
const btnAdd = document.getElementById("lol")
const addBook = document.getElementById("addbook")
btnAdd.addEventListener("click", show)

const myLibrary = [
  harry= {name: "harry", author: "omar", category: "mistry", size: "huge", date: "16/4/2025", red: false},
  oxford= {name: "oxford", author: "ali", category: "scary", size: "small", date: "16/4/2025", red: false},
  harry= {name: "Apprentice to the Villain", author: "Hannah Nicole Maehrer", category: "Fantasy", size: "huge", date: "16/4/2025", red: false},
  harry= {name: "harry", author: "omar", category: "mistry", size: "huge", date: "16/4/2025", red: false},
  harry= {name: "harry", author: "omar", category: "mistry", size: "huge", date: "16/4/2025", red: false}
]

function Book(name, author, category, size, date, red) {
  this.name = name
  this.author = author
  this.category = category
  this.size = size
  this.date = date
  this.red = red
}

  //  f > arr > obj.fun() , obj.fun {this.red = true} ,,,, f if obj.red false log not yet === done

function isred(state) {
  if(state == "true") {
    return "Has red"
  } else {
    return "Not red"
  }
}

Book.prototype.hasRed = function() {
  if(this.red == "true") {
    this.red = "false"
    show()
  } else {
    this.red = "true"
    show()
  }
}

function letsSee(e) {
  myLibrary[e.currentTarget.className].hasRed()    //  e.currentTarget.className
}

function addBookToLibrary(theName, theAuthor, theCategory, theSize, theDate, theRed) {
  // take params, create a book then store it in the array
  // theName = document.getElementById("name").value
  // theAuthor = document.getElementById("author").value
  // theCategory = document.getElementById("category").value
  // theSize = document.getElementById("size").value
  // theDate = document.getElementById("date").value
  theName = new Book(theName, theAuthor, theCategory, theSize, theDate, theRed)
  myLibrary.push(theName)
  show()
  return theName
}


document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const author = formData.get('author');
  const category = formData.get('category');
  const size = formData.get('size');
  const date = formData.get('date');
  const red = formData.get('red');
  addBookToLibrary(name, author, category, size, date, red)
  // document.getElementById("userForm").reset()
});


function remove(e) {  //Remove current item
  console.log(e.currentTarget.className)
  let i = e.currentTarget.className
  myLibrary.splice(i, 1)
  show()
}

function show() {
  theBooks.innerHTML = ""
  let id = 0
  myLibrary.forEach(item => {
      const card =
      `<div class="card">
        <div class="image"><img src="" alt=""></div>
        <h3>${item.name}</h3>
        <p><span>Author: ${item.author}</span><span>${item.category}</span></p>
        <p>Size: ${item.size}, Date: ${item.date}</p>
        <p class="${id}">${isred(item.red)}</p>
        <p id="last"><button id="read" class="${id}">READ</button><button id="remove" class="${id}">REMOVE</button></p>
      </div>`
      theBooks.innerHTML += card
      id +=1
    });
  let readBtn = document.querySelectorAll("#read")
  let removeBtn = document.querySelectorAll("#remove")
  removeBtn.forEach(item => {
    item.addEventListener("click", remove)
  })
  readBtn.forEach(item => {
    item.addEventListener("click", letsSee)
  })
}


