function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO:
// add event listener to submit button
document.querySelector("button[type='submit']").addEventListener('click', createEmployee);

// TODO:
document.querySelector('#dataTable').addEventListener('click', (e) => {
if (e.target.textContent === 'Delete') {
    const id = e.target.parentElement.parentElement.firstChild.textContent;
    // console.log("delete");
    deleteEmployee(id);
}
});


// TODO:
function createEmployee () {
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;

  if (!name || !id) {
    return;
  }

  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, id }),
  })
  .then(fetchEmployees)
  .catch(error => console.error('Error:', error));
}

// TODO:
function deleteEmployee (id){
  // get id
  // send id to BE
  // call fetchEmployees
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })
  .then(fetchEmployees)
  .catch(error => console.error('Error:', error));
}

fetchEmployees()
