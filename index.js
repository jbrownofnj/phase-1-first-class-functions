const { returns } = require("chai-spies");

function receivesAFunction(cb,input){
    let whatISendBack = cb(input);
    return whatISendBack;
    
}
function returnsANamedFunction(){
    const namedFunction=()=>4;
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (function(){let thisThing=2;});
}