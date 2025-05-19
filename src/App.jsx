import { useState } from "react"

function App() {
  // Dichiarazione degli stati per ogni campo del form utilizzando useState
  const [fullName, setFullName] = useState('Luca');
  const [userName, setUserName] = useState('LucaB');
  const [password, setPassword] = useState('Pokemon14!!');
  const [specialization, setSpecialization] = useState('frontend');
  const [experienceYears, setExperienceYears] = useState('1');
  const [description, setDescription] = useState('sono uno studente');

  // Funzione che gestisce l'invio del form
  const handleSubmit = e => {
    e.preventDefault(); // Previene il comportamento di default del form

    // Validazione dei campi: verifica che tutti i campi siano compilati
    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      !description.trim()
    ) {
      alert("Errore : Compila Tutti i campi")
      return;
    }

    // Stampa dei dati in console dopo la validazione
    console.log('submit effettuato:', {
      fullName,
      userName,
      password,
      specialization,
      experienceYears,
      description,
    });
  }

  return (
    <>
      <h1>Sei un Jr. Full Stack Developer?</h1>
      <h2>iscriviti!</h2>

      <form onSubmit={handleSubmit}>
        {/* Campo per il nome completo */}
        <p>Nome completo</p>
        <input
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />

        {/* Campo per lo username */}
        <p>Username</p>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />

        {/* Campo per la password */}
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {/* Menu a tendina per la specializzazione */}
        <p>Specializzazione</p>
        <select value={specialization} onChange={e => setSpecialization(e.target.value)}>
          <option value="fullstack">Full Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        {/* Campo numerico per gli anni di esperienza */}
        <p>Anni di esperienza</p>
        <input
          type="number"
          onChange={(e) => setExperienceYears(e.target.value)}
          value={experienceYears}
        />

        {/* Area di testo per la descrizione */}
        <p>Descrivi chi sei</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        {/* Pulsante per inviare il form */}
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
