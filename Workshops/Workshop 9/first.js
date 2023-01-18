// console.log('Hello World, This is Binay learning JavaScript');

/*let a=5;
console.log(typeof(a))
let b=6;
let sum=a+b;
console.log(sum)*/

/*var a=7;
var b=9; 
console.log(typeof(b))
var multiplication=a*b;
console.log(multiplication)*/

//circumference of circle
/*const PI=3.14;
let radius=window.prompt("Enter radius: ");
console.log(radius);
let circumference=2*PI*radius;
console.log('The circumference is '+ circumference);*/

//area of circle
/*const PI=3.14;
let radius=window.prompt("Enter radius: ");
console.log(radius);...........consoole.log can check can errors as well
let area=PI*radius*radius;
console.log('The area is '+ area);
alert(area);*/


/*function Dog(){
    let name='Tony';
    let age=window.prompt('Enter the age of dog: ');
    let breed='Mixed';
    console.log(age)
    if (age<=10){
        alert('The dog is young')
    }
    else{
        //console.log//
        alert('The dog is old')
    }
}
Dog();

function Bark(){
    console.log(age) //here age is not defined fo bark.. it is a local variable of Dog
}
Bark();*/

//document is a pre built object
document.getElementById("three").onclick = function(){
    let radius=document.getElementById("two").value;
    console.log(radius);
    const PI=3.14;
    let circumference=2*PI*radius;
    // document.getElementsById('one').innerHTML=circumference;
    document.getElementById('four').innerHTML="The circumference of circle is "+circumference;
    
}
