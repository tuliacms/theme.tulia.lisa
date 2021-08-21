customizer.customized('hero.static.headline', function (value) {
    $('.hero-static .hero-text .hero-headline').text(value);
});

customizer.customized('hero.static.description', function (value) {
    $('.hero-static .hero-text .hero-description').text(value);
});

customizer.customized('hero.static.button.label', function (value) {
    $('.hero-static .hero-text button').text(value);
});

customizer.customized('hero.static.background', function (value) {
    $('.hero-static .hero-image').css('background-image', 'url(' + value + ')');
});

customizer.customized('lisa.footer.contact.copyrights', function (value) {
    $('.footer-copyrights').text(value);
});

customizer.customized('lisa.footer.contact.phone', function (value) {
    $('.footer-contact .contact-row.contact-phone span').text(value);
});

customizer.customized('lisa.footer.contact.address', function (value) {
    $('.footer-contact .contact-row.contact-address').html(value.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2'));
});
