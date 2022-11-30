var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});
var animationAbout = anime.timeline({
    autoplay: true
});

animationAbout
    .add({
        targets: '#btn',
        top: '13%',
        duration: 900,
        easing: 'easeInOutBack'
    })

var animation = anime.timeline({
  autoplay:false
});

animation
.add({
  targets: '#btn',
  top: '3500px',
  duration: 500,
  easing: 'easeInOutSine'
})

.add({
  targets: '#tik',
  top: '0px',
  duration: 1000,
  easing: 'easeInOutBack'
})

    .add({
        targets: '#bay',
        bottom: '0px',
        duration: 1500,
        easing: 'easeInOutSine'
    })


.add({
  targets: '#text',
  marginRight: 0,
  duration: 1000,
  easing: 'easeInOutBack'
})

    .add({
        targets: '#textLocation',
        marginLeft: 0,
        duration: 800,
        easing: 'easeInOutSine'
    })
    .add({
        targets: '#btnCv',
        bottom: '10%',
        duration: 500,
        easing: 'easeInOutBack'
    })

/*.add({
  targets: '#btn',
  top: '50%',
  duration: 1000,
  easing: 'easeInOutBack'
})*/

document.querySelector('#btn').onclick = animation.play;


var animationCv = anime.timeline({
    autoplay: false
});

animationCv
    .add({
        targets: '#btnCv',
        bottom: '-100%',
        duration: 500,
        easing: 'easeInOutSine'
    })


    .add({
        targets: '#cvDownload',
        bottom: '12%',
        duration: 500,
        easing: 'easeInOutBack'
    })


document.querySelector('#btnCv').onclick = animationCv.play;

