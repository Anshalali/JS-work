// accessing nested object it can be used to access nested object

var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["passenger seat"];
  var outsideTrunk = myStorage.car.outside["trunk"];
  
  console.log(outsideTrunk);