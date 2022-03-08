const contactForm = document.getElementById('contact-form');

// when someone submits contact form pls do this
contactForm.addEventListener('submit', function(e) {
    // prevent default page refresh
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // alert user that though their message was ackownledged, the developer didnt connect a form handler
    alert(`${name}! i regretfully inform you that I, unfortunatly, will not be getting back to you at ${email} in these hard times(since i havent yet done form handling) but you've successfully managed to send a surely meaningful message into the void. your message:
    ${message}`);

    // reset form after everything is done
    contactForm.reset();
});