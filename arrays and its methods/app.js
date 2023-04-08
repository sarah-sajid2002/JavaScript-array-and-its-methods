// let arr = [1,2,3,4,5,6,7,70]
// console.log("original array: ", arr)

// console.log("index 3  ",arr[3]);

// console.log("index 9 which is not available ", arr[9]);//undefined
//============adding a new value to the original array=====
// arr[8] = 10;
// console.log("added a new value in array ",arr);


//=================changing the existing value in array========
// arr[0] = 20;
// console.log("changed the pre existing value in array: ", arr);


//=======================lengt of array====================
// console.log("lengt of array " , arr.length);


//======================type of array=======================
// console.log("type of array is: " ,typeof(arr) );


//============printing all elements of array using for loop:===
// let lengt_of_array = arr.length;
// for(i=0 ; i<=lengt_of_array; i++){
//     console.log("the value on index no",i, " is ",  arr[i]);
// }


// =====================array methods=====================
// let arr = [3, 1, 2, 3, 4, 5, 6, 7, 70]


//=========== 1) toString()===========
// converts th elements of array into string and creates a new array
// let b = arr.toString( );
// console.log("edited array aftert toString() is :", b); 
// console.log(typeof(b[3])); //after converting finding type to confirm


//=========== 2) join()===============
//definition: joins all array element using a separator of our choice does not change original array
// let edited_arr = arr.join(" = ");
// console.log("edited array aftert join() is :", edited_arr);
// console.log(arr)
// console.log(typeof(edited_arr[3])); //after join() finding type it will become string


//============= 3) pop()===============
//definition: deltes the last element of array and changes the original array
// let b = arr.pop();
// console.log(arr , typeof(arr)) //type of array wil remain same
// console.log(b)//will print the value which will pop


//============ 4) push==================
//changes the original length:
// let b = arr.push(3)
// console.log(b)//push reutrns the new array length
// console.log (arr)


//============ 5) shift==================
// let b = arr.shift(); //returns the shifted element
// console.log(b)


//============ 6) UnShift==================
// let b = arr.unshift(3)
// console.log(b);
// console.log(arr);


//============ 7) delete==================
// let newArr = delete arr[3]
// // console.log(newArr)
// console.log(arr)


//============ 8) concat==================
// let a = [];
// let a_1 = [1,2,3,4,5,6];
// let a_2 = ["sarah", "ayesha"];
// let a_3 = [true, false]

// console.log(a.concat(a_1, a_2, a_3));
// console.log(a);


//============ 9) sort==================
// arr = [100, 2, 1, 3, 4, 6, 7];
// let newArr = arr.sort();
// console.log(newArr);
// console.log(arr);
//sorting in ascending order:
// arr = [200, 3, 9, 23, 5, 53, 7];
// let newArr = arr;
// let very_new_arr = newArr.sort(function sort_in_ascenfing(a,b){
//     if (a>b){
//         return b;
//     }
//     return -1;
// }) ;
// console.log(very_new_arr)
// console.log(newArr)
// console.log(arr);


//============ 10) splice==================
// arr = [100, 2, 1, 3, 4, 6, 7];
// console.log(arr);
// let newArr = arr.splice(2, 1, 23, 45, 65, 87);
// console.log(newArr);
// console.log(arr);


//============ 11) slice==================
// arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let newArr = arr.slice(2);
// console.log(newArr)
// console.log(arr);

// newArr = arr.slice(2,6);
// console.log(newArr);


//============ 12) reverse==================
// arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let newArr = arr.reverse();
// console.log(newArr);
// console.log(arr);


// =========================loops in arrays==========================

// ============= 1) classical for loop==================== 
// arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (i=0 ; i<=arr.length; i++){
//     console.log(arr[i]);
// }


// ============= 2) for each loop=========================
// arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// arr.forEach((value, index) => {
//    console.log("index: " , index, "value: ", value) 
// });


// ============= 3) from()========================
// let name = 12345678;
// console.log(Array.from([name],x => x+x));


// ============= 4) for...in========================
// let arr = [2,3,4,5,6];
// for(let i in arr){
//     console.log(i);
// }


// ============= 5) for...of========================
// let arr = [2,3,4,5,6];
// for(let item of arr){
//     console.log(item)
// }


// =============================higher order array methods=====================

//============= 1) map()============================
// does not modify original array
// let a = [1,2,3,4,5,6,7,8,9];
// let newArr = a.map((value)=>{
//     return value ; 
// });
// console.log("modified array with map is: ", newArr);
// console.log("original array is: ", a);


//============= 2) filter()============================
// does not modify original array
// a = [1,2,3,4,5,6,7,8,9];
// let new_arr = a.filter((value)=>{
//     return (value%2===0 && value<5);
// })
// console.log(a)
// console.log(new_arr)


//============= 3) reduce()============================
let arr = ["i", " am", " sarah", " sajid"];
let new_arr = arr.reduce((value_1, value_2)=>{
    return value_1+value_2;
})

console.log(arr);
console.log(new_arr)
