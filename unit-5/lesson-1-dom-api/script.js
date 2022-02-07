let bodyEl = document.body

// Create <main> element and append it to the body
let mainEl = document.createElement("main");
bodyEl.appendChild(mainEl);

// Edit the properties of the <main> element
// mainEl.id = "main"
mainEl.setAttribute("id", "main")
// mainEl.innerText = "main element is here"
mainEl.style.margin = "30px 8px";
mainEl.style.padding = "15px";
mainEl.style.borderRadius = "5px";
mainEl.style.background = "#eee";

// Create the <h1> element and edit its properties
let headerEl = document.createElement("h1");
headerEl.id = "title";
headerEl.innerText = "Dr. Norman Borlaug";

// And then appead it to the DOM as child of <main>
mainEl.appendChild(headerEl)

let pEl = document.createElement("p")
pEl.innerText = "The man who saved a billion lives"
mainEl.append(pEl)
