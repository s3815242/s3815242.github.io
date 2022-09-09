
var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";
/* Dealing with multiple valuable in one array */
var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];


/*Change the clearance of the index in the array */
fruitAray[1] = "carrot";
/* Array inside the array*/
var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

/* The loop that we can run all of the valuable instead of type it one by one. In this case, fruit array have 5 values. 
That's mean the work in the bracket will run 5 times */
for(var fruit of fruitArray){
    if(fruit === "carrot"){
       console.log("this isn't a fruit")
    }else{
        console.log(fruit)
    }
    
}

for(x of fruitArray){

}


