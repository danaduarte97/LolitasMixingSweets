/*document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {

    /*Modal--------------*/
    var exampleModal = document.getElementById('exampleModal');

    exampleModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Elemento que activó el modal
        var title = button.getAttribute('data-title');
        var image = button.getAttribute('data-image');

        var modalTitle = exampleModal.querySelector('.modal-title');
        var modalImage = exampleModal.querySelector('.modal-body img');

        if (modalTitle && modalImage) {
            modalTitle.textContent = title;
            modalImage.src = image;
        } else {
            console.error('Modal title or image element not found');
        }
    });

    /*Swiper----------
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });*/

});
