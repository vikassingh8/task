// Quetion no.1
// const prime=(num)=>{
//     if(num<=1) return false
//     for(let i=2;i*i<=num;i++){
//         if(num%i===0) return false
//     }
//     return true
// }
// const fac=(number)=>{
//     let renum=parselnt(number.tostring().split("").reverse().join())
//     let prmfac=[]
//     for(let i=2;i<=renum;i++){
//         while(renum%i===0 && prime(i)){
//             prmfac.push(i)
//             renum=Math.floor(renum/i)
//         }
//     }
//     return prmfac.length>0?["yes",prmfac]:"no"
// }



// Quetion no 2
// const anag=(str)=>{
//     const anagrp={}
//     for(let word of str){
//         let key=[...word].sort().join("")
//         anagrp[key]=anagrp[key] || []
//         anagrp[key].push(word)
//     }
//     return Object.values(anagrp).reverse()
// }
// const ans=anag(["eat","tea","tan","ate","nat","bat"])
// console.log(ans)


// que 4
// const max=(num)=>{
//     if(!num || num.length===0){
//         return "0"
//     }
//     num.sort((a,b)=>a-b)
//     if(num[0]===0){
//         return "0"
//     }
//     return num.join("")
// }
// console.log(max([10,2]))

// que -3

// const word=(s,wordarray)=>{
//     let n=s.length
//     let js=new Array(n+1).fill(false)
//     js[0]=true
//     for(let i=1;i<=n;i++){
//         for(let j=0;j<i;j++){
//             if(js[j]&& wordarray.includes(s.substring(j,i))){
//                 js[i]=true
//                 break
//             }
//         }
//     }
//     return  js[n]
// }
// console.log(word("leetcode",["leet","code"]))



// que n0 -5



const larg=(nums,k)=>{
    const par=(arr,low,high)=>{
        const num=arr[high]
        let i=low
        for(let j=low;j<high;j++)
        if(arr[j]>=num) [arr[i],arr[j]]=[arr[j],arr[i]],i++
        [arr[i],arr[high]]=[arr[high],arr[i]];
        return i
    }
    const sel=(arr,low,high,k)=>
        low===high?arr[low]:
        ((p=>k===p ?arr[p]:k<p?
        sel(arr,low,p-1,k):
        sel(arr,p+1,high,k)))
        par(arr,low,high)
        return sel(nums,0,nums.length-1,k-1)
}
console.log([10,4,5,6],8)
