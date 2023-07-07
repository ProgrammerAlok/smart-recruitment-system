
const selectOptions = ['name', 'experience', 'job_role', 'location'];

const search1 = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let selectOptionValue = document.getElementById('searchType').value;
    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    let selectOptionIdx = -1;
    for(let i=0; i<3; i++){
        if(selectOptions[i] === selectOptionValue){
            selectOptionIdx = i;
            break;
        } 
    }

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[selectOptionIdx];
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = ""
            } else {
                tr[i].style.display = 'none'
            }
        }
    }

    
}