import{ Head } from './componentsUI/MainUI/Head.js';
import { Body } from './componentsUI/MainUI/Body.js';
import { Footer }from './componentsUI/MainUI/Footer.js';
import { Router } from './componentsUI/Routers.js';

export function App() {
        const $root = document.getElementById('root');
              $root.innerHTML=null;
              $root.appendChild(Head());
              $root.appendChild(Body());
              $root.appendChild(Footer());
        Router();
}