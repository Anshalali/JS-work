// Objects for Lookups it can be used to look up values in an object we can use it for change the switch statement in objects

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];

    return result;
}
  

console.log(phoneticLookup("echo"));