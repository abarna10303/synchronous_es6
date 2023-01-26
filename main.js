//synchronous
function myFirst()
{
    console.log("First function");
}
function mySecond()
{
    console.log("Second function");
}
myFirst();
mySecond();
//asynchronous

setTimeout(myFirst,3000);
setTimeout(mySecond,1000);


function myThrid()
{
    for(i=0;i<5;i++)
    {
        if(i<5)
        {
           var set= setInterval(mySecond,1000);
           console.log(i);
           clearInterval(set,4000);
        }
        else
        {
            clearInterval(set);
        }
    }
}
myThrid();

