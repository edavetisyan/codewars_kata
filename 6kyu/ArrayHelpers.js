Array.prototype.square = function() {
    return this.map(function(n) {return n*n} )
  }
  
  Array.prototype.cube = function() {
    return this.map(function(n) {return n*n*n} )
  }
  
  Array.prototype.sum = function() {
    return this.reduce(function(sum,n) {return sum+n}, 0)
  }
  
  Array.prototype.average = function() {
    return this.sum() / this.length
  }
  
  Array.prototype.even = function() {
    return this.filter(function(n) { return n % 2 === 0})
  }
  
  Array.prototype.odd = function() {
    return this.filter(function(n) { return n % 2 !== 0 })
  }