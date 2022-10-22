function isPalindrome(string){
    let st="";
    for(let i=string.length-1;i>=0;i--){
        st=st+string[i];
    }
    if(string==st){
    console.log("palindrome");}
    else
    {
        console.log("Not Palindrome")
    }
}


isPalindrome("maam")