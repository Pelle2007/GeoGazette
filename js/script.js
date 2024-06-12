const noSendForm = document.getElementById("noSendForm");
const dropBtn = document.getElementById('dropBtn');
const darkModeBtn = document.getElementById('darkModeBtn'); // Nieuw toegevoegd: selecteer de dark mode-knop

if(noSendForm){ // Niet op elke pagina bestaat het formulier -> error vermijden met if statement
    noSendForm.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(noSendForm);
        const formObject = Object.fromEntries(formData);

        alert(`Dit is een demoformulier je antwoorden worden niet verzonden. \n \n Je antwoorden: \n Voornaam: ${formObject.firstname} \n Achternaam: ${formObject.lastname} \n Email: ${formObject.emailadress} \n Je bericht: ${formObject.question}.`);
    });
}

dropBtn.addEventListener('click', function(){
    dropBtn.parentElement.classList.toggle('open'); 
    /* Uitleg: bij klik op de knop wordt de klasnaam "open" toegevoegd aan het ouderelement van de knop => <nav class="dropdown"> 
    Via CSS wijzigen de eigenschappen van zowel het dropdown menu als de knop wanneer het ouderelement de klasnaam "open" bevat.
    */
});

// Nieuw toegevoegd: functionaliteit voor de dark mode-knop
darkModeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode'); // Voeg of verwijder de 'dark-mode' klasse van de body
});
