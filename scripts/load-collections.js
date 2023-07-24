const htmlInjectionArray = collections.map((value) => `
    <div class="content-collections">
        <img class="collections-image" src="images/collections/${value.image}.png">
    </div>
`);

const htmlInjection = htmlInjectionArray.join('');
document.querySelector('.js-content').innerHTML = htmlInjection;