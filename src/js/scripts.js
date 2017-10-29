document.querySelector('.product-form').addEventListener('click', event => {
    if (!event.target.matches('.js-product-details')) {
        return;
    }

    const target = event.target;

    const color = target.getAttribute('data-value');
    if (target.classList.contains('product-color__item')) {
        document.getElementById('tShirt').src = '/img/tshirts/tshirt_' + color + '.jpg';
    }

    const colorElements = document.getElementsByClassName('product-color__item');
    if (target.classList.contains('product-color__item')) {
        updateBorders(colorElements, target);
    }

    const sizeElements = document.getElementsByClassName('product-size__item');
    if (target.classList.contains('product-size__item')) {
        updateBorders(sizeElements, target);
    }
});

function updateBorders(elements, target) {
    [].forEach.call(elements, function (element) {
        if (element === target) {
            activate(element, true);
        } else {
            activate(element, false);
        }
    });
}

function activate(target, isActive) {
    if (isActive === true) {
        target.classList.add('product-details_active');
        target.classList.remove('product-details_inactive');
    } else {
        target.classList.add('product-details_inactive');
        target.classList.remove('product-details_active');
    }
}
