function first (array){
	return array[0]
}
function last(array){
	return array[array.length-1]
}


var ArrEX=function(array){
	return{
		first:function  (array){
	return this.array[0]
},

last:function (array){
	return this.array[this.array.length-1]
}
	}
}