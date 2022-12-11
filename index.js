/* try{
    //code test
    alert('Hi everyone');
    alert(x)
    alert('Bye everyone');
}catch(err){
    //handle error
    alert('Inside catch block');
    console.log(err)
    console.log(err.name)
    console.log(err.message)
}finally{
    //code must work in finally
    alert('Bye everyone');
} */



document.querySelector('#checkButton').addEventListener('click', function(){
    let num = document.querySelector('#input-num').value;
    try{
        if(num <5){
            throw "input is too low"
        }
        else if(num > 10){
            throw "input is too high"
        }
    }catch(err){
        console.log(err);
    }
})