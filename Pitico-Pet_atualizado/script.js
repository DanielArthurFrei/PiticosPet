const catalogo1Items = document.querySelectorAll('[id^="catalogo1-"]');
const catalogo2Items = document.querySelectorAll('[id^="catalogo2-"]');
const proximo = document.getElementById('Proximo');

if (Proximo) {
    Proximo.addEventListener('click', function(e) {
        e.preventDefault();

        const isCatalogo1Visible = [...catalogo1Items].some(item => !item.classList.contains('Escondido'));

        if (isCatalogo1Visible) {
            catalogo1Items.forEach(item => item.classList.add('Escondido'));
            catalogo2Items.forEach(item => item.classList.remove('Escondido'));
        } else {
            catalogo1Items.forEach(item => item.classList.remove('Escondido'));
            catalogo2Items.forEach(item => item.classList.add('Escondido'));
        }
    });
}
