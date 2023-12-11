function mincost(arr)
{ 
//write your code here
// return the min cost
    let minCost=0;
	while(arr.length>1){
		arr.sort((x,y)=>x-y);
		let a=arr.shift(),b=arr.shift();
		minCost+=a+b;
		arr.push(a+b);
	}
	return minCost;
}
module.exports=mincost;
