import { useState } from 'react';

function Formulaire() {
    const [nom, setNom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour, ${nom} !`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Entrez votre nom"
            />
            <button type="submit">Saluer</button>
        </form>
    );
}

export default Formulaire;