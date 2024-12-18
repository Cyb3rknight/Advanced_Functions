const function1=function()
{
    const text=document.getElementById('textHolder');
    console.log('hello'+' '+`${text.value}`)
    document.getElementById('nomPhrase').innerHTML='hello'+' '+`${text.value}`
 localStorage.setItem('greeting', `hello ${text.value}`); 
 
 
}
const text=document.getElementById('textHolder');
text.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        function1();
    }});

    let greetingValue = localStorage.getItem('greeting');
    document.getElementById('nomPhrase').innerHTML = greetingValue;

    document.getElementById('buttonAdd').addEventListener("click",function()
    {
        function1();
    })

    const object1=//object with a function is a mehtode
{
    num:2,
    fun:function function1()
    {
        console.log('hello3');
    },
}
object1.fun();

function display(param)//passing value into a function
{
console.log(param)
}
display(2);

['make dinner','wash dishes'].forEach(function(value,index){ console.log(value);console.log(index)})

function run(param)//passing function into a function
{
param();
}
run(function(){console.log('hello, how are you?')} )

const timeout=setTimeout(function() //built-in function(if you want to run a function in the future)
{
console.log('timeout');//value of the function
},3000//how long you need to wait before running this function(milliseconds)1000 milliseconds=1 second
)

const interval=setInterval(function() //built-in function(if you want to run a function in the future)
{
console.log('interval');//value of the function
},1000//how long you need to wait before running this function(milliseconds)1000 milliseconds=1 second
)

document.getElementById('LoopThroughArray').addEventListener("click",function()
{
    clearInterval(interval);
    
})

