var Stack = function() {
	var size=0;
	return {
		_storage:{},
		add:function(value){
			this._storage[size++]=value
			return value;
		},
		remove:function(){
			var st=this._storage[size-1]
			delete this._storage[size-1];
			(size!==0)?size--:null
			return st;

		}

}	
};