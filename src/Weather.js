'use strict';

function Weather(){
  this.CHANCE_OF_STORMY = 0.5;
};
Weather.prototype._isStormy = function() {
  return (Math.random() > this.CHANCE_OF_STORMY);
};
