function onReady(){
  var toDos = [];
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TODO_TEXT.value) { return; }

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: ++id
      });

     NEW_TODO_TEXT.value = '';

renderTheUI();
}

  /* Filter function keeping all items that are not exactly the same as the clicked delete button */
   function deleteToDo(id) {
     return toDos.filter(toDo => toDo.id !== id);
   }

   function renderTheUI() {
     const TODO_LIST = document.getElementById('toDoList');

     TODO_LIST.textContent = '';

     toDos.forEach(function(toDo) {
        const NEW_LI = document.createElement('li');
        const CHECKBOX = document.createElement('input');
        CHECKBOX.type = "checkbox";

        NEW_LI.textContent = toDo.title;

        TODO_LIST.appendChild(NEW_LI);
        NEW_LI.appendChild(CHECKBOX);

        /* Create delete button, append to NEW_LI and register an event listener for it. */

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        NEW_LI.appendChild(deleteButton);

        deleteButton.addEventListener('click', event => {
         toDos = deleteToDo(toDo.id);
         renderTheUI();
         });
      });
    }

ADD_TODO_FORM.addEventListener('submit', event => {
 event.preventDefault();
 createNewToDo();
 });

renderTheUI();
}

window.onload = function() {
 onReady();
};
