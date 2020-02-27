// Selectors for INFORMATION MODAL
const infoButton = document.querySelector('#info');
const modalInfo = document.querySelector('#modal');
const modalClose = document.querySelector('.close-button');

// Selectors for CONTACT MODAL
const phoneButton = document.querySelector('#contact');
const modalContact = document.querySelector('#modal-contact');
const contactCloseBtn = document.querySelector('.contact-close-button');

// Selectors for MAIL MODAL
const mailButton = document.querySelector('#mail');
const modalMail = document.querySelector('#modal-mail');
const mailCloseBtn = document.querySelector('.mail-close-button');




$(document).ready(() => {
    // Mail button toggler MODAL

mailButton.addEventListener('click', () => {
    modalMail.classList.toggle('hide-modal-mail');
    modalContact.classList.remove('hide-modal-contact');
    modalInfo.classList.remove('hide-modal')
});


// Close button for email MODAL
mailCloseBtn.addEventListener('click', () => {
    modalMail.classList.remove('hide-modal-mail');
});



// Contact button toggler MODAL
phoneButton.addEventListener('click', () => {
    modalContact.classList.toggle('hide-modal-contact');
    modalInfo.classList.remove('hide-modal')
    modalMail.classList.remove('hide-modal-mail');
});

// Close button for contact MODAL
contactCloseBtn.addEventListener('click', () => {
    modalContact.classList.remove('hide-modal-contact');
});



// Information modal toggler button
infoButton.addEventListener('click', () => {
    modalInfo.classList.toggle('hide-modal');
    modalContact.classList.remove('hide-modal-contact');
    modalMail.classList.remove('hide-modal-mail');
});

// close button for information MODAL
modalClose.addEventListener('click', () => {
    modalInfo.classList.remove('hide-modal');
});
});







