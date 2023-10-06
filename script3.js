// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає

const trigger = document.querySelector('.title');

trigger.addEventListener('mouseenter', () => {
    const div = document.createElement('div');
    div.classList.add('tooltip');
    div.textContent = 'div????';
    trigger.after(div);
})

trigger.addEventListener('mouseleave', () => {
    const div = document.querySelector('.tooltip');
    div.remove();
})