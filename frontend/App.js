import{ Head } from './components/Head.js';
import { Body } from './components/Body.js';
import { Footer }from './components/Footer.js';
import { Router } from './components/Routers.js';

export function App() {
        const $root = document.getElementById('root');
              $root.innerHTML=null;
              $root.appendChild(Head());
              $root.appendChild(Body());
              $root.appendChild(Footer());
        Router();
}