/* Add a new method named sort() without parameters in built-in
 constructor function Array. It'll sort all elements in the array in ascending order. */
Array.prototype.sort = function(){
    for(let i=0;i<this.length-1;i++){
        for(let j=i+1;j<this.length;j++){
            if(this[i] > this[j]){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

let arr = [1,6,2,8];
let arr1 = ["john","steve","bill","elon"];
let SortedArr = arr.sort();
console.log(SortedArr);
let SortedArr1 = arr1.sort();
console.log(SortedArr1);

