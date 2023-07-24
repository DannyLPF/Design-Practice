let htmlInjection = '';

collections.forEach((value) => { htmlInjection += `
        <div class="content-collections">
            <img class="collections-image" src="images/collections/${value.image}.png">
        </div>
    `;
});

document.querySelector('.js-content').innerHTML = htmlInjection;