 const body = document.querySelector("body");
 body.innerHTML = ""
function headerMaker(){
   body.innerHTML += `<header class="header">
      <div class="logo">
        <i class="fas fa-check-double"></i>
        <h1 class="page-name">Todo List</h1>
      </div>
      <button class="button-open-nav" id="button-open-nav">
        <i class="fas fa-bars"></i>
      </button>
    </header>`
}

function mainMaker(){
   
    body.innerHTML += `<main class="main">
      <nav class="nav" id="nav">
        <!-- Default projects -->
        <div class="default-projects-list">
          <button class="button-default-project" id="button-inbox-projects">
            <i class="fas fa-inbox"></i>
            Inbox
          </button>
          <button class="button-default-project" id="button-today-projects">
            <i class="fas fa-calendar-day"></i>
            Today
          </button>
          <button class="button-default-project" id="button-week-projects">
            <i class="fas fa-calendar-week"></i>
            This week
          </button>
        </div>
        <!-- User projects -->
        <h1 class="projects-title">Projects</h1>
        <div class="projects-list" id="projects-list"></div>
        <button class="button-add-project" id="button-add-project">
          <i class="fas fa-plus"></i>
          Add Project
        </button>
        <div class="add-project-popup" id="add-project-popup">
          <input
            class="input-add-project-popup"
            id="input-add-project-popup"
            type="text"
          />
          <div class="add-project-popup-buttons">
            <button
              class="button-add-project-popup"
              id="button-add-project-popup"
            >
              Add
            </button>
            <button
              class="button-cancel-project-popup"
              id="button-cancel-project-popup"
            >
              Cancel
            </button>
          </div>
        </div>
      </nav>
      <!-- Tasks -->
      <div class="project-preview" id="project-preview">
        <h1 id="project-name">Inbox</h1>
        <div class="tasks-list" id="tasks-list">
          <button class="button-task" data-task-button="">
            <div class="left-task-panel">
              <i class="far fa-circle" aria-hidden="true"></i>
              <p class="task-content">dfbxv</p>
              <input
                type="text"
                class="input-task-name"
                data-input-task-name=""
              />
            </div>
            <div class="right-task-panel">
              <p class="due-date" id="due-date">No date</p>
              <input
                type="date"
                class="input-due-date"
                data-input-due-date=""
              />
              <i class="fas fa-times" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus" aria-hidden="true"></i>
          Add Task
        </button>
        <div class="add-task-popup" id="add-task-popup">
          <input
            class="input-add-task-popup"
            id="input-add-task-popup"
            type="text"
          />
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">
              Add
            </button>
            <button
              class="button-cancel-task-popup"
              id="button-cancel-task-popup"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>`
}

function footerMaker(){

    body.innerHTML +=` <footer class="footer">
      <p>Copyright © 2021 michalosman</p>
      <a href="https://github.com/fawaaazi" target="_blank">
        <i class="fab fa-github"></i
      ></a>
    </footer>`
}

function taskListMaker(taskName){
    const taskList = document.getElementById("tasks-list");
    const taskElement = `<button class="button-task" data-task-button="">
            <div class="left-task-panel">
              <i class="far fa-circle" aria-hidden="true"></i>
              <p class="task-content">${taskName}</p>
              <input
                type="text"
                class="input-task-name"
                data-input-task-name=""
              />
            </div>
            <div class="right-task-panel">
              <p class="due-date" id="due-date">No date</p>
              <input
                type="date"
                class="input-due-date"
                data-input-due-date=""
              />
              <i class="fas fa-times" aria-hidden="true"></i>
            </div>
          </button>`;

          taskList.innerHTML += taskElement
}
headerMaker()
mainMaker()
footerMaker()

taskListMaker("Coding")