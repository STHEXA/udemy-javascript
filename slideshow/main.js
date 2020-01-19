(function() {
  'use strict';

  var INTERVAL = 2000;
  var images = ['images/image1.jpg',
                'images/image2.jpg',
                'images/image3.jpg',
                'images/image4.jpg',
                'images/image5.jpg'];
  var current = 0;
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var page = document.getElementById('page');
  var mainImage = document.getElementById('main_image');
  var thumbnails = document.getElementById('thumbnails');
  var timer;

  // var thumbs = document.querySelectorAll('.thumbnail_image');
  // for(var i = 0; i < thumbs.length; i++) {
  //   thumbs[i].addEventListener('click', function() {
  //     mainImage.src = 'images/' + this.dataset.image;
  //     current = this.dataset.index;
  //     displayPageNumber();
  //   })
  // }

  function createThumbnails() {
    var li;
    var img;
    for(var i = 0; i < images.length; i++) {
      li = document.createElement('li');
      console.log(li);
      li.dataset.index = i;
      console.log(li.dataset.index);
      li.addEventListener('click', function() {
        thumbnails.children[current].className = '';
        mainImage.src = this.children[0].src;
        current = this.dataset.index;
        this.className = 'current_image';
        clearTimeout(timer);
        displayPageNumber();
        playSlideshow();
      });

      if(i == 0) {
        li.className = 'current_image';
      } else {
        li.className = '';
      }

      img = document.createElement('img');
      console.log(img);
      img.src = images[i];
      img.className = 'thumbnail_image';
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }

  function playSlideshow() {
    timer = setTimeout(function() {
      next.click();
    }, INTERVAL)
  }
  //ページ番号表示
  function displayPageNumber() {
    page.textContent = (Number(current) + 1) + '/' + images.length;
  }

  displayPageNumber();
  createThumbnails();
  playSlideshow();

  //戻るボタン
  prev.addEventListener('click', function() {
    clearTimeout(timer);
    thumbnails.children[current].className = '';
    current--;
    if(current < 0) {
      current = images.length - 1;
    }

    mainImage.src = images[current];
    thumbnails.children[current].className = 'current_image';
    displayPageNumber();
    playSlideshow();
  });

  next.addEventListener('click', function() {
    clearTimeout(timer);
    thumbnails.children[current].className = '';
    current++;
    if(current > images.length - 1) {
      current = 0;
    }

    mainImage.src = images[current];
    thumbnails.children[current].className = 'current_image';
    displayPageNumber();
    playSlideshow();
  });

})();