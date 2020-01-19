(function() {//即時関数
  'use strict'; //厳格モード
  
  var e = document.getElementById('input_text');
  document.getElementById('character_counter').innerHTML = '10';

  e.addEventListener('keyup', function() {
    // console.log(e.value);
    // console.log(e.value.length);

    var str = e.value;
    str = str.replace(/\r?\n/g, '');
    // console.log(str.length);

    var remaining = 10 - str.length;
    document.getElementById('character_counter').innerHTML = remaining;

    if(remaining >= 0) {
      document.getElementById('character_count_wrap').style.color = 'black';
    } else {
      document.getElementById('character_count_wrap').style.color = 'red';
    }


  });

})();