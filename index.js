const boldBtn =document.getElementById("btn-bold");
boldBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area')
   textArea.style.fontWeight ='bold'
   
    
})
const  italicBtn =document.getElementById('btn-italic')
italicBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.fontStyle='italic'
})
const  underlineBtn =document.getElementById('btn-underline')
underlineBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textDecoration='underline'
})
const leftBtn =document.getElementById('btn-left')
leftBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textAlign='left'
})
const centerBtn =document.getElementById('btn-center');
centerBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textAlign='center'
})
const rightBtn =document.getElementById('btn-right');
rightBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textAlign='right'
})
const justyfyBtn =document.getElementById('btn-justyfy');
justyfyBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textAlign='align-justify'
})
const textArea =document.getElementById('text-area');
function f1(e){
    let value =e.value;
    textArea.style.fontSize= value +'px' 

}
const bigBtn =document.getElementById('font-bold');
bigBtn.addEventListener('click',function(){
    const textArea =document.getElementById('text-area');
    textArea.style.textTransform='uppercase'
})

const textColor =document.getElementById('text-area');
function f2(e){
    let value =e.value; 
    textColor.style.color= value;

}