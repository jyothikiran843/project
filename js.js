var allradios=Array.from(document.getElementsByClassName('radio-input'));
allradios.forEach(ele=>{
    ele.addEventListener('click',radioChecked);
})
Array.from(document.getElementsByClassName('sodi-text')).forEach(inp=>{
    inp.addEventListener('keyup',errorProcess)
})
function errorProcess(){
    if(this.value){
        this.nextElementSibling.nextElementSibling.style.visibility="hidden"
    }
    else{
        this.nextElementSibling.nextElementSibling.style.visibility="visible"
    }
}
function yes(value){
    document.getElementById("second-div"+value).style.display="block"

}
function no(value){
    document.getElementById("second-div"+value).style.display="none"
}
function radioChecked(){
    var progrss=39;
    allradios.forEach(rad=>{
        if(rad.checked){
            progrss++;
            document.getElementById('progressed').style.width=progrss+'%'
            document.getElementById('answeredare').innerHTML=progrss
        }
        else{
            console.log(rad.checked)
        }
    })
}