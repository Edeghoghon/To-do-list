const input = document.querySelector('input');
const btn = document.querySelector('.addtask  > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup' , (e) =>{
    (e.keycode === 13 ? addList(e): null);
})

function addList(e){
    const Ndone= document.querySelector('.Notdone');
    const done = document.querySelector('.done');

    const newLi = document.createElement('li');
    const checkbtn = document.createElement('button');
    const delkbtn = document.createElement('button');

    checkbtn.innerHTML = "<i class='bx bx-check-square'></i>" ;
    delkbtn.innerHTML = "<i class='bx bxs-trash'></i>";

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value='';
        Ndone.appendChild(newLi)
        newLi.appendChild(checkbtn);
        newLi.appendChild(delkbtn);
    }
    checkbtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
        done.appendChild(parent);
        checkbtn.style.display ="none";

    } );


    delkbtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
       
    } );
}