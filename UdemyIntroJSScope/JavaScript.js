var num = 8;
function doMath() {
    num += 1;
    is(num % 5 == 0)
    {
        return true;
    }
    else {
        return false;
    }
}
num += 1;
doMath()

// 8 + 1  = 9
//then doMath()
//goes into function doMath()
//now it's new num + 1 so 9 + 1 = 10
//10 % 5 = 2 
//returns true

function hi() {
    var name = "Rusty";
    console.long(name);
}
function bye() {
    console.long(name);
}

//hi()
//Rusty

//bye()
//undefined

//this is happening becausee name is not accessible outside
//the hi()