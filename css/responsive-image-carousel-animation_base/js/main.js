const slider = $('.slider');

$(document).on ('click', activate)

function activate(e) {
  const items = slider.find('.item');
  // 단축평가(short-circuit evaluation)
  /*
  if (조건1 && 조건2) {

  }
  */

  e.target.matches('.next') && slider.append(items.eq(0))
  e.target.matches('.prev') && slider.prepend(items.eq(-1))

  // if (e.target.matches('.next')) {
  //   slider.append(items.eq(0));
  // } else if (e.target.matches('.prev')) {
  //   // slider.prepend(items.eq(items.length-1));
  //   slider.prepend(items.eq(-1));
    
  // }
}