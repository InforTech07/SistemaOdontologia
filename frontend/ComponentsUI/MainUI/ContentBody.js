import { ContentPage } from './ContentPage.js';

export function ContentBody() {
    const $contentbody=document.createElement('div');
        $contentbody.classList.add('Container');
        $contentbody.appendChild(ContentPage());
    return $contentbody;
}