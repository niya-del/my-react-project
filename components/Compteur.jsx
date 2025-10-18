import { useState } from 'react';

function Compteur() {
    const [compteur, setCompteur] = useState(0);

    return (
        <div>
            <h3>Compteur: {compteur}</h3>
            <button onClick={() => setCompteur(compteur + 1)}>+</button>
            <button onClick={() => setCompteur(compteur - 1)}>-</button>
        </div>
    );
}

export default Compteur;