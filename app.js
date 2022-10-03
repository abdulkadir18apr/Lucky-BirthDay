const dob=document.querySelector('#dob');
const luckyNumber=document.querySelector('#lucky-no');
const checkBtn=document.querySelector('#submit-btn');
const output=document.querySelector('#output');

checkBtn.addEventListener('click',checkLuchyNumber);



function checkLuchyNumber(){
    const date=dob.value ;
    let sum=0;
    let luckyNo=Number(luckyNumber.value);
    console.log(luckyNo);
    if(luckyNo===0 || date===''){
        showOutput("Please enter both feilds");
        output.style.color="red";
    }
    else{

         sum=sumOfDigit(date);
        if(sum%luckyNo==0){
            showOutput("Yay! Your Birthday is Lucky🎂");
            output.style.color="green";

        }
        else{
            showOutput("No, Your Birthday is not Lucky");
            output.style.color="green";
        }

    }
    
}
function sumOfDigit(date){
    var sum=0;
    date=date.replaceAll('-','');
    for(let i=0;i<date.length;i++){
        sum+=Number(date[i]);
    }
    return sum;

}

function showOutput(msg){
    output.innerHTML=msg;


}