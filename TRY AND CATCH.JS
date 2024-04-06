try{

    hello.toUpperCase();

}

catch{

    console.log("ERROR!!!");
}






function yell(msg){

    try{
        console.log(msg.toUppercase().repeat(3));
    }

    catch{
        console.log("Please pass a string next time!");
    }
}

yell(7);