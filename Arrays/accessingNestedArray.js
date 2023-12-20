// accessing nested array it can be used to access nested array can have one or more inner Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "neem",
            "fir",
            "maple"
        ]
    }
];

var firsttree = myPlants[0].list[0];
var secondtree = myPlants[1].list[0];

console.log(secondtree);