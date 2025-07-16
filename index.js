(function () {
  emailjs.init('gEi5hpXY6XtvFTfx3');
})();

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_2hwulc8', 'template_6wupp6c', this).then(
      () => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log(error);
      }
    );
  });
