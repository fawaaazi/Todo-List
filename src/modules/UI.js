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
