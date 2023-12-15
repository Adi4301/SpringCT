
function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const subscribe = document.getElementById('subscribe').checked;
  
    if (!name || !age || !gender) {
      alert('Please fill in all required fields.');
      return;
    }
  
    const record = { name, age, gender, subscribe };
    saveRecord(record);
    document.getElementById('addForm').reset();

    window.location.href = 'view.html';
  }
  
  function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
  }
  