function mincost(arr)
{ 
//write your code here
// return the min cost
  const h=new minHeap(arr);
  let total=0;
  while(h.length>1){
	  let a=h.findMin(),b=h.findMin();
	  let sum=a+b;
	  total+=sum;
	  h.push(sum);
  }
  total+=h.getMin();
  return total;
}
class minHeap{
	const heap=[];
	constructor(arr){
		for(let a in arr) heap.push(a);
	}
	function findMin(){
		heap.sort((x,y)=>x-y);
		let m=heap.pop();
		return m;
	}
}
module.exports=mincost;
