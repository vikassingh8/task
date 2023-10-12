// Q1: 

const isPrime= (p) => {
    if(p <= 1)
    return false;
    for(let i=2; i*i <= p; i++){
        if(p % i === 0)
            return false;
    }
    return true;
};

const reverseChecker =(x)=> {
    let reversed= parseInt(x.toString().split("").reverse().join(""));
    const primeFact = [];
    
    for(let i=2; i<= reversed; i++){
        while(reversed % i === 0 && isPrime(i) ){
            primeFact.push(i);
            reversed = Math.floor(reversed/ i);
        }
    }
    return primeFact.length > 0 ? ['yes', primeFact] : 'No';
    
};
let ans= reverseChecker(123);
console.log(ans);


//Q2: 

const anagram = (n) => {
    const group= {};
    
    for(const word of n){
        const k= [...word].sort().join('');
        group[k]= group[k] || [];
        group[k].push(word);
    }
    return Object.values(group);
}

let ans = anagram(["eat","tea","tan","ate","nat","bat"]);
console.log(ans);

Q3: 

function wordSplit(p, arr){
    const n= p.length;
    const q= new Array(n + 1). fill(false);
    q[0]= true;
    
    for(let i=1; i<=n; i++){
        for(let j=0; j<i; j++){
            if(q[j] && arr.includes(s.substring(j,i)) ){
                q[i]= true;
                break;
            }
        }
    }
    return q[n];
}
let s = "leetcode"; 
let arr = ["leet","code"];

console.log(wordSplit(s,arr));

Q4: 

function max(n){
    if( !n  || n.length ===0){
        return '0' ;  
        }
        n.sort((a,b)=>
        `${b}${a}` - `${a}${b}`);
        if(n[0] === 0){
            return '0';
        }
        return n.join('');
};
let arr = [10,2];

console.log(max(arr));

Q5: 

function largest(n, k) {
    const part = (arr, low, high) => {
      const pivot = arr[high];
      let i = low;
      for (let j = low; j < high; j++)
        if (arr[j] >= pivot) [arr[i], arr[j]] = [arr[j], arr[i]], i++;
      [arr[i], arr[high]] = [arr[high], arr[i]];
      return i;
    };
  
    const select = (arr, low, high, k) => low === high ? arr[low] : (
      (p => k === p ? arr[p] : k < p ? select(arr, low, p - 1, k) : select(arr, p + 1, high, k))
    )(part(arr, low, high));
  
    return select (n, 0, n.length - 1, k - 1);
  }
  
  // Example usage:
  const n = [10, 4, 12, 9, 87, 34];
  const k = 2;
  console.log(largest(n, k));
