/**
 * Created by jchull on 7/6/15.
 */

  var handleScroll = function (limitElement) {
    return function(event) {
      // Not sure if these are helping
      event.preventDefault();
      event.stopPropagation();

      if (limitElement.getBoundingClientRect().top < 100) {
        var p = this;

        if (p.scroll)
          p.scroll(0, p.scrollTop/1.08);
        else {
          p.scrollTop = p.scrollTop/1.08;
        }
        return false;

      }
    };
  };

  var scrollArea = document.querySelector('.scroll-limit');


  if(scrollArea) {
    var limitElement = scrollArea.querySelector('.limit');

    scrollArea.addEventListener(
      'scroll',
      handleScroll(limitElement)
    );

  }

