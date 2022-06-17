// An enum is a special "class" that represents a group of constants (unchangeable variables).
enum CardinalDirections {
    North,
    East,
    South,
    West
  }


let curr = CardinalDirections.North;
console.log(curr)
console.log(CardinalDirections.North)

// You can set the value of the first numeric enum and have it auto increment from that:
enum a {
    first = 1,
    second,
    third,
    fourth
}
// 4
console.log(a.fourth)

// You can assign unique number values for each enum value. Then the values will not incremented automatically:
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);



// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.