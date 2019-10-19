import Component from '../Component.js';
import Header from './Header.js';
import CatList from '../cats/CatList.js';
import { getCats } from '../../services/cat-api.js';

class CatListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Cats' });
        dom.prepend(header.renderDOM());

        const list = new CatList({ cats: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getCats().then(cats => {
            list.update({ cats });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main></main>
            </div>
        `;
    }
}

export default CatListApp;