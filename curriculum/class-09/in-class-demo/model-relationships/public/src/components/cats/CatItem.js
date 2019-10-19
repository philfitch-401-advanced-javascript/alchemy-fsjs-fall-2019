import Component from '../Component.js';

class CatItem extends Component {
    renderHTML() {
        const cat = this.props.cat;

        return /*html*/`
            <li class="cat-item">
                <div class="info-container">
                    <h2>${cat.name}</h2>
                    <p class="cat-type">${cat.type}</p>
                </div>

                <div class="image-container">
                    <img src="${cat.url}" alt="${cat.name} image">
                </div>
                <p class="year">${cat.year}</p>
            </li>
        `;
    }
}

export default CatItem;