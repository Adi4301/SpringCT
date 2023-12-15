
document.addEventListener('DOMContentLoaded', function () {
    displayRecords();
  });
  
  function displayRecords() {
    const recordsTable = document.getElementById('recordsTable');
    const records = JSON.parse(localStorage.getItem('records')) || [];
  
    const tbody = recordsTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
  
    records.forEach(record => {
      const row = tbody.insertRow();
  
      const cell1 = row.insertCell(0);
      cell1.textContent = record.name;
  
      const cell2 = row.insertCell(1);
      cell2.textContent = record.age;
  
      const cell3 = row.insertCell(2);
      cell3.textContent = record.gender;
  
      const cell4 = row.insertCell(3);
      cell4.textContent = record.subscribe;
    })}