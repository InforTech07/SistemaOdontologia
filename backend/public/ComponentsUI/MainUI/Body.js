import {ContentBody} from './ContentBody.js'
export function Body() {
    const $body=document.createElement('main');
    $body.appendChild(ContentBody());
    return $body;  
}