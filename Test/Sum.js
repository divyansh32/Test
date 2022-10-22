    function sumElement(arr){
        let sum=0;
        for(let i in arr){
            sum=(sum+arr[i]);
        }
        return sum;
    }

    let arr=[10,20,30,40];
    console.log(sumElement(arr));