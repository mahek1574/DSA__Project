
class Node { constructor(data){ this.data=data; this.next=null; } }
class LinkedList {
  constructor(){ this.head=null; }
  add(data){
    let n=new Node(data);
    if(!this.head){ this.head=n; return; }
    let cur=this.head;
    while(cur.next) cur=cur.next;
    cur.next=n;
  }
  toArray(){
    let arr=[]; let cur=this.head;
    while(cur){ arr.push(cur.data); cur=cur.next; }
    return arr;
  }
  fromArray(arr){
    this.head=null; arr.forEach(n=>this.add(n));
  }
  display(){ return this.toArray().join(" -> "); }
}

let list=new LinkedList();

function addNode(){ 
  let val=Number(document.getElementById("dataInput").value);
  if(isNaN(val)){ alert("Enter number"); return; }
  list.add(val); displayList();
}

function displayList(){ 
  document.getElementById("listDisplay").innerText=list.display(); 
}

function quickSortArray(arr){
  if(arr.length<=1) return arr;
  let pivot=arr[arr.length-1], left=[], right=[];
  for(let i=0;i<arr.length-1;i++){ arr[i]<pivot?left.push(arr[i]):right.push(arr[i]); }
  return [...quickSortArray(left),pivot,...quickSortArray(right)];
}

function quickSortList(){
  let sorted=quickSortArray(list.toArray());
  list.fromArray(sorted);
  displayList();
  document.getElementById("result").innerText="List sorted using Quick Sort";
}

function binarySearchList(){
  let arr=list.toArray().sort((a,b)=>a-b);
  let target=Number(document.getElementById("searchValue").value);
  let l=0,r=arr.length-1, idx=-1;
  while(l<=r){
    let mid=Math.floor((l+r)/2);
    if(arr[mid]===target){ idx=mid; break; }
    else if(arr[mid]<target) l=mid+1;
    else r=mid-1;
  }
  document.getElementById("result").innerText= idx!==-1?`Binary Search: ${target} found at index ${idx}`:`${target} not found`;
}
