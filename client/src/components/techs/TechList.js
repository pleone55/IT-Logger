import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
import axios from 'axios';

const TechList = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = () => {
        setLoading(true);
        axios.get('http://localhost:7000/api/techs')
            .then(response => {
                setTechs(response.data);
                setLoading(false);
            })
    }

    const removeFromDom = techId => {
        setTechs(techs.filter(tech => tech._id !== techId));
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technicians Available</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} removeFromDom={removeFromDom} key={tech._id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default TechList;