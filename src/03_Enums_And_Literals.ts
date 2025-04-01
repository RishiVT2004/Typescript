/*

*/

import { SignatureHelpInvokedReason } from "../../../node_modules/typescript/lib/typescript"

// literals 
let direction : "north"|"south"|"east"|"west" // splefies what can be assigned to a var 
direction = 'east'

let code : 200|201|300|400|401|404|500

// enums 
// numeric enums
enum Size {
    small = 8,
    medium = 12,
    large = 16
}

let s: Size = Size.large;

// string enum 

enum Direction{
    up = "north",
    down = "south",
    left = "west",
    right = "east"
}
