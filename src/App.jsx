import { useState, useMemo, useRef } from "react"

// Costanti per la validazione dei campi
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {

  // campi controllati
  const [username, setUserName] = useState('LucaB');
  const [password, setPassword] = useState('Pokemon14!!');
  const [description, setDescription] = useState('sono uno studente');

  // campi non controllati
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();


  // Validazione dello username usando useMemo 
  const validUsername = useMemo(() => {
    const charsValid = username.split("").every(c =>
      letters.includes(c.toLocaleLowerCase()) ||
      numbers.includes(c)
    );
    return charsValid && username.trim().length >= 6;
  }, [username])


  // Validazione della password usando useMemo
  const validPassword = useMemo(() => {
    return (password.trim().length >= 8 &&
      password.split("").some(c => letters.includes(c)) &&
      password.split("").some(c => numbers.includes(c)) &&
      password.split("").some(c => symbols.includes(c))
    )
  }, [password])


  // Validazione della descrizione usando useMemo
  const validDescription = useMemo(() => {
    return (description.trim().length >= 100 &&
      description.trim().length < 1000
    )
  }, [description])

  // Funzione che gestisce l'invio del form
  const handleSubmit = e => {
    e.preventDefault(); // Previene il comportamento di default del form

    // valori non controllati
    const fullname = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;



    // Validazione dei campi: verifica che tutti i campi siano compilati
    if (
      !username.trim() ||
      !password.trim() ||
      !description.trim() ||
      !validUsername ||
      !validPassword ||
      !validDescription
    ) {
      alert("Errore : Compila Tutti i campi")
      return;
    }

    // Stampa dei dati in console dopo la validazione
    console.log('submit effettuato:', {
      fullname,
      username,
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
          ref={fullNameRef}
        />

        {/* Campo per lo username */}
        <p>Username</p>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
        {username.trim() && (
          <p style={{ color: validUsername ? 'green' : 'red' }}>
            {validUsername ? 'Username valido' : ' Username non valido min 6 caratteri'}
          </p>
        )}

        {/* Campo per la password */}
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {password.trim() && (
          <p style={{ color: validPassword ? 'green' : 'red' }}>
            {validPassword ? ' Password valida' : ' Password non valida min 8 caratteri, lettere, numeri e simboli'}
          </p>
        )}

        {/* Menu a tendina per la specializzazione */}
        <p>Specializzazione</p>
        <select ref={specializationRef}>
          <option value="">Seleziona</option>
          <option value="fullstack">Full Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        {/* Campo numerico per gli anni di esperienza */}
        <p>Anni di esperienza</p>
        <input
          type="number"
          ref={experienceYearsRef}
        />

        {/* Area di testo per la descrizione  */}
        <p>Descrivi chi sei</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {description.trim() && (
          <p style={{ color: validDescription ? 'green' : 'red' }}>
            {validDescription
              ? ' Descrizione valida'
              : ` La descrizione deve essere tra 100 e 1000 caratteri attuale: ${description.trim().length}`}
          </p>
        )}

        {/* Pulsante per inviare il form */}
        <button type="submit">Registrati</button>
      </form >
    </>
  )
}

export default App
