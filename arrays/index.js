
 
//  **************************************************** 1. some() **********************************************

 let array_some = [ 'Aijaz', 'mango', 'apple','apple']
 console.log(" some() method ==>",array_some.some(e => e === 'apple'))  // true

//   some() : it will return true if atleast matches one element from array and return false if nothing...
//            it just check the given element, present or not.. 





//  ***************************************************  2. reduce() **********************************************

   let array_reduce = [ 't', 'e', 's','t']
   
   console.dir(array_reduce.reduce( (val, i)=>val+i)) // ()=> test

//     It works like iteration






// *************************************************** 3. every() *************************************************

//    it match given element to all elements of array and return true if all matches and return false if any one or more is not
//     matching...





// ************************************************  4. map() **************************************************







// ******************************************************* 5. flat() ***********************************************
//  it converts multi dimensional array to flat array according to given arguments . like:
//   flat(1) -< it converts 2-dimensional array to 1-dimensional & flat(infinity) 






//  ***************************************************** 6. filter() ********************************************

 let arr_filter = [ 'aijaz', "ahmed", 'abbasi' ]
 console.log(arr_filter.filter(v=> v.indexOf('') !== -1  ))

//  indexOf() will match the index and return 0 on success and -1 on unsuccess.




// ****************************************************** 7. forEach() ********************************************
let arr = [2, 4, 6, 8, 10]

let res1 = arr.forEach((num, index) => {
    return arr[index] = num * 2;
});


let res2 = arr.map(num => {
    return num * 2;
});

console.log(
    ' ForEach =>', arr.forEach((num, index) => {
        return  num * 2;
    }) 
    ,
    ' map => ', res2
)





/**
 * LINK
 * https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8?fbclid=IwAR1siHhN1T-qFoN49nR1mKl9rlD074lRdEBMdNWKIT6fO15vVlhhuukLpp8
 */