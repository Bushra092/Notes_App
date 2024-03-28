const addTitile = document.getElementById("title");
const addText = document.getElementById("addText");
const addNotebtn = document.getElementById("addNote");
const notesdiv = document.getElementById("notes");

// let notes = localStorage.setItem("notes", JSON.stringify(notes));

showNotes();
function addNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) notes = [];
  else notes = JSON.parse(notes);
  if (addText.value === "") {
    alert("Please add a note");
    return;
  }

  const notesObj = {
    title: addTitile.value,
    text: addText.value,
  };
  addTitile.value = ``;
  addText.value = ``;
  notes.push(notesObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
function deleteNote(ind) {
  let notes = localStorage.getItem("notes");
  if (notes === null) return;
  else notes = JSON.parse(notes);

  notes.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
function showNotes() {
  let notesHTML = "";
  let notes = localStorage.getItem("notes");
  if (notes === null) return;
  else notes = JSON.parse(notes);
  for (let i = 0; i < notes.length; i++) {
    notesHTML += ` 
    <div class="note">      
      <div class="title">${
        notes[i].title === `` ? `Note: ` : notes[i].title
      }</div>
      <div class="text">${notes[i].text}</div>
      <button class='deleteNote' id=${i} onclick='deleteNote(${i})'>Delete Note</button>
    </div>`;
  }

  notesdiv.innerHTML = notesHTML;
  // console.log(notesHTML);
}

addNotebtn.addEventListener("click", addNotes);

// assignment

/*
1. delete notes: implementation delete array
2. Archieve Notes: implementation archieve array
3. sorting filter, iterate through all the notes, and check 
4. reminder
5. edit note
*/
