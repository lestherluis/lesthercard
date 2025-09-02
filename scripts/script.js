/* Stap 1: Selecteer de knop */
let expandButton = document.querySelector('.profile-card-example-button')

/* Stap 2: Wacht tot iemand op die knop klikt */
expandButton?.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  document.body.classList.toggle('is-expanded')
})

<script src="https://kit.fontawesome.com/17387b08f2.js" crossorigin="anonymous"></script>