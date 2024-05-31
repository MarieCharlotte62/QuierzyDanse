import React, { useState } from 'react';
import { fetchContact } from '../../fonctions/api/fetchContact';

const Formulaire = () => {
  const [formData, setFormData] = useState({ prenom: '', email: '', objet: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
 * Gère le changement de valeur dans les champs de formulaire.
 * Met à jour l'état de formData avec la nouvelle valeur du champ modifié.
 *
 * @param {Event} e - L'événement de changement déclenché par l'input.
 */
  const handleChange = (e) => {
    const inputName = e.target.name; // Récupère le nom de l'input (prenom, email, objet, message)
    const inputValue = e.target.value; // Récupère la valeur saisie dans l'input
    const updatedFormData = {
      ...formData, // Copie tous les champs existants de formData
      [inputName]: inputValue // Met à jour le champ correspondant au nom de l'input avec la nouvelle valeur
    };
    setFormData(updatedFormData); // Met à jour l'état formData avec le nouvel objet
  };

  /**
 * Gère la soumission du formulaire.
 *
 * @param {Event} e - L'objet événement provenant de la soumission du formulaire.
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchContact(formData);
      console.log('Success:', data);
      setSuccess(true);
      setFormData({ prenom: '', email: '', objet: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="prenom"></label>
                    <input 
                        type="text" 
                        id="prenom" 
                        name="prenom" 
                        placeholder="votre prénom" 
                        value={formData.prenom} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="votre adresse mail" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="objet"></label>
                    <input 
                        type="text" 
                        id="objet" 
                        name="objet" 
                        placeholder="objet" 
                        value={formData.objet} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="votre message ici..." 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </div>
                <div>
                    <button className="boutonEnvoyer" type="submit">Envoyer</button>
                </div>
            </form>
            <div>
                {(loading || success) && (
                <div className='envoi'>
                    {loading ? (
                    <p className="loading">Chargement...</p>
                    ) : (
                    <>
                        <p className="success">Votre message a été envoyé avec succès !</p>
                        <button className='boutonFermer' onClick={handleClose}>Fermer</button>
                    </>
                    )}
                </div>
                )}
            </div>
        </div>
    );
};

export default Formulaire;
