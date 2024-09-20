document.getElementById('homework-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const homeworkInput = document.getElementById('homework');
    const dueDateInput = document.getElementById('due-date');
    
    const homework = homeworkInput.value;
    const dueDate = dueDateInput.value;
    
    if(homework && dueDate) {
        addHomework(homework, dueDate);
        homeworkInput.value = '';
        dueDateInput.value = '';
    }
});

function addHomework(homework, dueDate) {
    const homeworkList = document.getElementById('homework-list');
    
    const li = document.createElement('li');
    li.innerHTML = `<span>${homework} (Due: ${dueDate})</span> <button class="delete-btn">Delete</button>`;
    
    homeworkList.appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
}