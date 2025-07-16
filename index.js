(function () {
  emailjs.init('jqy8lMA_-IrHi1v9u');
})();

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_87r1i8m', 'template_xx6a79l', this).then(
      () => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log(error);
      }
    );
  });
