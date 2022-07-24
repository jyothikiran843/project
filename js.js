var allradios=Array.from(document.getElementsByClassName('radio-input'));
allradios.forEach(ele=>{
    ele.addEventListener('click',radioChecked);
})
Array.from(document.getElementsByClassName('sodi-text')).forEach(inp=>{
    inp.addEventListener('focus',errorProcess)
})
Array.from(document.getElementsByClassName('sodi-text')).forEach(inp=>{
    inp.addEventListener('keyup',errorProcess)
})
Array.from(document.getElementsByClassName('error-rows')).forEach(row=>{
    row.addEventListener('click',navigateToQuestion)
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
    document.getElementById('goto'+value).firstElementChild.innerHTML="Input Field needs to be filled"
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
    })
}
function navigateToQuestion(){
    window.location='#q'+this.id.slice(-1)
}
function checkAll(){
    var errorflag=0;
    allradios.forEach(rad=>{
        if(rad.checked){
            if(rad.value=='yes'){
                console.log(document.getElementById('input'+rad.name.slice(-1)).value)
                if(document.getElementById('input'+rad.name.slice(-1)).value){
                    console.log(document.getElementById('input'+rad.name.slice(-1)).value)
                    document.getElementById('goto'+rad.name.slice(-1)).style.display="none"
                }
                else{
                    document.getElementById('goto'+rad.name.slice(-1)).style.display="block"
                    errorflag++;
                }
            }
            else if(rad.value=='no'){
                document.getElementById('goto'+rad.name.slice(-1)).style.display="none"
            }
        }
        else{
            document.getElementById('goto'+rad.name.slice(-1)).style.display="block;"
            document.getElementsByTagName('table')[0].style.display="block"
            errorflag++;
        }
    })
    if(errorflag==7){
        document.getElementsByTagName('table')[0].style.display="none"
        window.location.href="https://www.youtube.com"
    }
}
