
exports.min = function min (array) {
  
  
  if (array == undefined || array.length == 0) {
      return 0;
  } else {
      var mini = array[0];
      for (let i = 0; i < array.length; i++) {
            if (mini > array[i]) {
                mini = array[i];
            };
      };
    return mini;
  };
};

exports.max = function max (array) {
    
    
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        var maxi = array[0];
        for (let i = 0; i < array.length; i++) {
              if (maxi < array[i]) {
                  maxi = array[i];
              };
        };
      return maxi;
    };
};

exports.avg = function avg (array) {
  
    

    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        var avi = 0;
        for (let i = 0; i < array.length; i++) {
            avi += array[i];
        }
        return avi == 0 ? avi : avi / array.length;
    };
};
