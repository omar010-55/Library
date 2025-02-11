const container = document.getElementById("container")
const theBooks = document.getElementById("theBooks")
const formBtn = document.getElementById("lol")
const addBook = document.getElementById("addbook")



function hideForm(e) { // To hide the form
  document.documentElement.style.setProperty("--opacity", 0)
  formBtn.style.visibility = "visible"
  document.documentElement.style.setProperty("--visible", "hidden")
}

addBook.addEventListener("click", hideForm) // To hide form after submitting

container.addEventListener("click", hideForm) // The container that hide the form

formBtn.addEventListener("click", (e) => { // The button that show the form and hide itself and the dark filter
  e.stopPropagation();
  document.documentElement.style.setProperty("--opacity", 1);
  formBtn.style.visibility = "hidden"
  document.documentElement.style.setProperty("--visible", "visible")
})

document.getElementById('userForm').addEventListener("click", (e) => { // To not making the container close the form when clicking on the form
  e.stopPropagation()
})


const myLibrary = [  // red is for read , it is like that ;)
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

function isred(state) { // To change the state of read on creation
  if(state == "true") {
    return "Has red"
  } else {
    return "Not red"
  }
}

Book.prototype.hasRed = function() { // To change the state of read on clicking
  if(this.red == "true") {
    this.red = "false"
    show()
  } else {
    this.red = "true"
    show()
  }
}

function letsSee(e) { // To know which one to change its read state
  myLibrary[e.currentTarget.className].hasRed()
}

function addBookToLibrary(theName, theAuthor, theCategory, theSize, theDate, theRed) {
  theName = new Book(theName, theAuthor, theCategory, theSize, theDate, theRed)
  myLibrary.push(theName)
  show()
}


document.getElementById('userForm').addEventListener('submit', function(event) {
  document.getElementById("userForm").reset()
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const author = formData.get('author');
  const category = formData.get('category');
  const size = formData.get('size');
  const date = formData.get('date');
  const red = formData.get('red');
  addBookToLibrary(name, author, category, size, date, red)
});


function remove(e) { // Remove current item
  console.log(e.currentTarget.className)
  let i = e.currentTarget.className
  myLibrary.splice(i, 1)
  show()
}

function show() { // To show the new array
  theBooks.innerHTML = ""
  let id = 0
  myLibrary.forEach(item => { // To add each array item to the page
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
  removeBtn.forEach(item => { // Its array because its more than one
    item.addEventListener("click", remove)
  })
  readBtn.forEach(item => { // Its array because its more than one
    item.addEventListener("click", letsSee)
  })
}


addBook.addEventListener("click", hideForm) // To hide form after submitting