var friends = ["Shola", "Joba", "Sunday", "John", "Ebun", "Damilola", "Jonathan", "Tunmise", "Evelyn"];

function whoIsPaying(names) {
    var index = Math.floor(Math.random() * names.length);
    return names[index] + " is going to buy lunch today!";
}

whoIsPaying(friends);