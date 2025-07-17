function getHeaderElements(body){
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

function getMainElements(body){
   
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

function getFooterElements(body){

    body.innerHTML +=` <footer class="footer">
      <p>Copyright © 2021 michalosman</p>
      <a href="https://github.com/fawaaazi" target="_blank">
        <i class="fab fa-github"></i
      ></a>
    </footer>`
}

export function getBodyElements(){
    const body = document.querySelector("body");
    body.innerHTML = ""
    getHeaderElements(body);
    getMainElements(body);
    getFooterElements(body);
}
