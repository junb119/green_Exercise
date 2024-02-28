let img = $('.gallery img'),
    lightbox = $('#lightbox-overlay'),
    lightboxImg = $('#lightbox-image');

img.click(function (e) {
  let targetImgUrl = $(this).attr('data-lightbox')
  lightboxImg.attr('src', targetImgUrl )
  lightbox.addClass('visible')
})

$(lightbox).click(function () {
  lightbox.removeClass('visible')
})