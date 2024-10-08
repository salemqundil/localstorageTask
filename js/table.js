const storData = JSON.parse(localStorage.getItem('myData')) || [];
    document.getElementById('dataInput').addEventListener('submit', function(event) {event.preventDefault()});
    function saveToLocalStorage(){
    const input ={
        'name':document.getElementById('name').value,
        'age':document.getElementById('age').value,
        'address':document.getElementById('address').value,
        'email':document.getElementById('email').value,
    } 
    storData.push(input);
    console.log(storData);
    localStorage.setItem('myData',JSON.stringify(storData));//save data 
    alert("Data is saved")
    data();
}
data()

function data(){
    const output = document.getElementById('output');
    output.innerHTML="";
    console.log(typeof(storData));
    if(storData!=null){
        storData.forEach((element ,index) => {
        output.innerHTML+=`
        <tr id="${index}">
            <th>${element.name}</th>
            <th>${element.age}</th>
            <th>${element.address}</th>
            <th>${element.email}</th>
            <th>    
                <button onclick="editLocalStorage(${index})" class="btn btn-warning">Edit</button>
                <button onclick="deleteFromLocalStorage(${index})" class="btn btn-danger">Delete</button>
            </th>
        </tr>`;
      });
    }
}

    function deleteFromLocalStorage(id){
    storData.splice(id, 1);
    localStorage.setItem('myData',JSON.stringify(storData));
    data();
    }
    function editLocalStorage(id){
        var arr=storData;
        document.getElementById(`${id}`).innerHTML =
       `<th><input type="text" id="name_${id}" name="name" value="${storData[id].name}"></th>
        <th><input type="text" id="age_${id}" name="age" value="${storData[id].age}"></th>
        <th><input type="text" id="address_${id}" name="address" value="${storData[id].address}"></th>
        <th><input type="text" id="email_${id}" name="email" value="${storData[id].email}"></th>
        <th>    
            <button id="editBtn" onclick="saveToLocalStorage()" class="btn btn-success">Add Data</button>
        </th>`;
        var editBtn = document.getElementById('editBtn');
        editBtn.onclick = function () {
            console.log("jjh");
            arr[id] = {
                name: document.getElementById(`name_${id}`).value,
                age: document.getElementById(`age_${id}`).value,
                address: document.getElementById(`address_${id}`).value,
                email: document.getElementById(`email_${id}`).value,
            };
            localStorage.setItem('myData', JSON.stringify(arr));
            data();
        };
    }
