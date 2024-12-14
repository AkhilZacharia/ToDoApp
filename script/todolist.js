var myTag= document.getElementById('data');
var listUrl = 'https://jsonplaceholder.typicode.com/todos';

function fetchdata() {
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
            if(this.readyState ==4 && this.status==200) {
                myTag.innerText = this.responseText;
                const data = JSON.parse(this.responseText);
                myTag.innerHTML = '';
                var cbox = `<input class="checkboxes" type="checkbox" ></input>`;
                data.filter((item)=>{
                    var listItem = document.createElement('li');
                    listItem.innerHTML= `
                    <div class="card text-center bg-transparent" id="content">
                        <div class="card-header text-success">
                        <h5>Task no : ${item.id}</h5>
                        </div>
                        <div class="card-body bg-white">
                        <h2 class="card-title"></h2>
                        ${cbox}
                        <p class="card-text text-danger-emphasis"><strong>To Do : </strong> ${item.title}</p>
                        </div>
                        
                    `;
                    myTag.appendChild(listItem);   
                    
                });

                // var chkbx = document.getElementsByClassName('checkboxes');
                
                // data.filter((item)=>{
                //     if ( item.completed== true) {
                //         chkbx[item.id-1].setAttribute("checked","checked");
                //         // chkbx[count].setAttribute('disabled', 'disabled');
                //     } else {
                        
                //     }
                // })
                
                // console.log(data);
            };
        }

var cnt = 0;
setTimeout(() => {
            alert("Page loaded Successfully");
            // console.log("ready");
    $(".checkboxes").on("change",function(){ 
            if($(this).is(':checked')) {
                cnt++;
            } else {
                cnt--;
            }
            console.log(cnt);
            var p = new Promise(function(resolve,reject){
                    if(cnt>=5){
                        resolve(`Congrats ${cnt} Tasks have been Successfully Completed!`);
                    }
                    else{
                        reject("wait");
                    }
                });
            p
            .then(function(e){
                console.log(e);
                alert(e);
            })
            .catch(function(f){
                console.log(f);
            })
    })
        }, 1000);

xhr.open('GET',listUrl,true);
xhr.send();
}