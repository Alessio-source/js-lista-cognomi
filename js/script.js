var cognomi = ["Rossi", "Bianchi", "Verdi", "Grimaldi"];

// pusha dentro la array solo i cognomi e non stringhe vuote
for(i = 0; i < 1; i++) {
  var cognome = prompt("Inserisci qui il tuo cognome");
  var elementCognomi = document.getElementById("cognomi");

  if (!(cognome == "")) {
    cognomi.push(cognome);
  } else {
    alert("Non hai inserito nessun cognome");
    i--
  }
}

// da una lettera iniziale in caps e poi ordina i cognomi in ordine alfabetico
for (i = 0; i < cognomi.length; i++) {
  cognomi[i] = cognomi[i].charAt(0).toUpperCase() + cognomi[i].slice(1);
  cognomi.sort();

  // stampa i cognomi
  elementCognomi.innerHTML = cognomi.join('<br>');
}
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
