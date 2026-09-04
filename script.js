/* ============================================
   CUSTOM CURSOR
============================================ */

const cursorDot =
    document.querySelector('.cursor-dot');

const cursorOutline =
    document.querySelector('.cursor-outline');


let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;


/* Mouse position */

window.addEventListener('mousemove', (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left =
        `${mouseX}px`;

    cursorDot.style.top =
        `${mouseY}px`;

});


/* Smooth cursor */

function animateOutline() {

    const speed = 0.15;

    outlineX +=
        (mouseX - outlineX) * speed;

    outlineY +=
        (mouseY - outlineY) * speed;


    cursorOutline.style.left =
        `${outlineX}px`;

    cursorOutline.style.top =
        `${outlineY}px`;


    requestAnimationFrame(
        animateOutline
    );
}

animateOutline();



/* ============================================
   CURSOR HOVER
============================================ */

const hoverables =
    document.querySelectorAll('.hoverable');


hoverables.forEach((element) => {

    element.addEventListener(
        'mouseenter',
        () => {

            cursorDot.classList.add(
                'hover-active'
            );

            cursorOutline.classList.add(
                'hover-active'
            );

        }
    );


    element.addEventListener(
        'mouseleave',
        () => {

            cursorDot.classList.remove(
                'hover-active'
            );

            cursorOutline.classList.remove(
                'hover-active'
            );

        }
    );

});



/* ============================================
   HIDE CURSOR
============================================ */

document.addEventListener(
    'mouseleave',
    () => {

        cursorDot.style.opacity = '0';

        cursorOutline.style.opacity = '0';

    }
);


document.addEventListener(
    'mouseenter',
    () => {

        cursorDot.style.opacity = '1';

        cursorOutline.style.opacity = '1';

    }
);



/* ============================================
   MOBILE NAVBAR
============================================ */

const burger =
    document.getElementById('burger');

const navLinks =
    document.getElementById('navLinks');


burger.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    burger.classList.toggle('active');

});


/* Tutup menu */

document
    .querySelectorAll('.nav-links a')
    .forEach((link) => {

        link.addEventListener(
            'click',
            () => {

                navLinks.classList.remove(
                    'active'
                );

                burger.classList.remove(
                    'active'
                );

            }
        );

    });



/* ============================================
   FOTO 3D
============================================ */

const photo =
    document.getElementById('photo3D');


if (photo) {

    photo.addEventListener(
        'mousemove',
        (e) => {

            const rect =
                photo.getBoundingClientRect();


            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            /*
             * Nilai kecil supaya
             * efeknya tidak berlebihan.
             */

            const rotateX =
                ((y - centerY) / centerY) * -7;

            const rotateY =
                ((x - centerX) / centerX) * 7;


            photo.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(10px)
            `;

        }
    );


    /* Kembali ke posisi normal */

    photo.addEventListener(
        'mouseleave',
        () => {

            photo.style.transform = `
                rotateX(0deg)
                rotateY(0deg)
                translateZ(0)
            `;

        }
    );

}



/* ============================================
   CONTACT FORM
============================================ */

const contactForm =
    document.getElementById('contactForm');


contactForm.addEventListener(
    'submit',
    (e) => {

        e.preventDefault();


        alert(
            'Terima kasih! Pesan Anda telah terkirim (simulasi).'
        );


        contactForm.reset();

    }
);