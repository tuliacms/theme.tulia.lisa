const TuliaEditor = require('TuliaEditor');

TuliaEditor.block(require('./WhatWeDoBlock/WhatWeDoBlock.js').default);
TuliaEditor.block(require('./OurServices/OurServices.js').default);
TuliaEditor.block(require('./CallToAction/CallToAction.js').default);
TuliaEditor.block(require('./ServicesLight/ServicesLight.js').default);
TuliaEditor.block(require('./CompanyInNumbers/CompanyInNumbers.js').default);
TuliaEditor.block(require('./NodesList/NodesList.js').default);
TuliaEditor.block(require('./Text/Text.js').default);
TuliaEditor.block(require('./ContactForm/ContactForm.js').default);
TuliaEditor.block(require('./Faq/Faq.js').default);
TuliaEditor.block(require('./Title/Title.js').default);

TuliaEditor.trans('pl', 'TuliaLisa', {
    'Here will be rendered form.': 'Tutaj pojawi się formularz.',
    'Headline align': 'Wyrównanie nagłówka',
    'Form': 'Formularz',
    'Category of nodes': 'Kategoria wpisów',
    'Number of nodes': 'Elementów na stronę',
    'Background color': 'Kolor tła',
    'Margins': 'Marginesy',
    'White': 'Biały',
    'Gray': 'Szary',
    'Dark': 'Czarny',
    'Default margin': 'Domyślnie',
    'No margin': 'Brak marginesu',
    'Margin on top': 'Margines u góry',
    'Margin on bottom': 'Margines u dołu',
    'Left': 'Lewy',
    'Right': 'Prawy',
    'Center': 'Środek',
});
