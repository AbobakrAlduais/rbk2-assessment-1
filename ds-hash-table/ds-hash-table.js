var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      var indx=hashFn(key,max);
      buckt=this._storage[indx];
      if (!buckt){
        return false
      }
      for (var i = 0; i < buckt.length; i++) {
        tuple=buckt[i]
        if (tuple[0]===key){
          return tuple[1]
        }
      }
      return false

      
    },

    insert: function(key, value) {
      var indx=hashFn(key,max);
      var count=0;
      var buckt=this._storage[indx];
      if (!buckt){
        buckt=[];
        this._storage[indx]=buckt;
      }
      for (var i=0;i<buckt;i++){
        var tuple=buckt[i];
        if (tuple[0]===key){
          tuple[1]=value;
          count++
          return buckt;
        }
      }
      if(count===0){
        buckt.push([key,value])
        return buckt;
      }
  }
}
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
}