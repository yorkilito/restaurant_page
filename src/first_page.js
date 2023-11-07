

export default function loadFirstPage(){
    const content_div = document.querySelector('#content');
    const header_div = document.createElement('div');
    header_div.textContent = "This is the header div";
    header_div.classList.add('header_div');

    const body_div = document.createElement('div');
    body_div.textContent = "This is the body div";
    body_div.classList.add('body_div');

    const footer_div = document.createElement('div');
    footer_div.textContent = "This is the footer div";
    footer_div.classList.add('footer_div');

    content_div.appendChild(header_div);
    content_div.appendChild(body_div);
    content_div.appendChild(footer_div);
}