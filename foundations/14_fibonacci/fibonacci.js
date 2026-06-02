const fibonacci = function(member) {
    
    if (member == 0) return 0;
    if (member < 0) return "OOPS";

    const mySequence = [1, 1];
    for (let i = member; i > 2; i--)
    {
        mySequence.push(mySequence.at(-1) + mySequence.at(-2))
    }

    return mySequence.at(member - 1)
};


// Do not edit below this line
module.exports = fibonacci;
