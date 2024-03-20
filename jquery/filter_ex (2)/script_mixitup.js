var mixer = mixitup('.product_list', {
  selectors: {
  target: '.item'
  },
  "animation" : {
    "duration": 1500,
    "nudge": true,
    "reverseOut": false,
    "effects": "fade translateX(20%) translateZ(-100px) rotateX(90deg)"
  }
});

$('#filter').change(function () {
  let target = $(this).val()
  mixer.filter(target)

})

