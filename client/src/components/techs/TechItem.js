import React from 'react';
import axios from 'axios';

const TechItem = ({ tech, removeFromDom }) => {

    const deleteLogs = techId => {
        axios.delete('http://localhost:7000/api/techs/' + techId)
            .then(response => {
                removeFromDom(techId)
            });
    };

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content" onClick={() => deleteLogs(tech._id)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}
export default TechItem;