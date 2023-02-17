import '../sass/style.scss';

const $ = require('$');
const bootstrap = require('bootstrap/dist/js/bootstrap.min.js');
const fontend = require('../../../../../../../../../vendor/tuliacms/cms/src/Cms/Platform/Infrastructure/Framework/Resources/public/core-assets/frontend/src/default-script');

$(function () {
    const sc = new Scroller({scrollThreshold: 70});
    sc.init();

    const hamburger = $('.hamburger');
    const navbar = document.getElementById('website-main-navbar');
    if (navbar) {
        navbar.addEventListener('hide.bs.collapse', event => {
            hamburger.removeClass('is-active');
        });
        navbar.addEventListener('show.bs.collapse', event => {
            hamburger.addClass('is-active');
        });
    }
});

let Scroller = function (options) {
    this.options = options;
    this.body = null;
    this.isBeforeThreshold = false;
    this.lastScrolledPosition = 0;

    this.init = function () {
        this.body = $('body');
        this.options = $.extend({}, {
            scrollThreshold: 10,
            scrolledClassname: 'body-scrolled',
            scrolledDownClassname: 'body-scrolled-down',
            scrolledUpClassname: 'body-scrolled-up',
        }, this.options);

        let self = this;

        $(window).scroll(function () {
            self.decide();
        });

        self.decide();
    };

    this.decide = function () {
        let scrollTop = $(window).scrollTop();

        if (this.isBeforeThreshold) {
            if (scrollTop < this.options.scrollThreshold) {
                this.isBeforeThreshold = false;
                this.body.removeClass(this.options.scrolledClassname);
            }
        } else {
            if (scrollTop > this.options.scrollThreshold) {
                this.isBeforeThreshold = true;
                this.body.addClass(this.options.scrolledClassname);
            }
        }

        if (scrollTop > this.lastScrolledPosition) {
            this.body.addClass(this.options.scrolledDownClassname);
            this.body.removeClass(this.options.scrolledUpClassname);
        } else {
            this.body.removeClass(this.options.scrolledDownClassname);
            this.body.addClass(this.options.scrolledUpClassname);
        }

        this.lastScrolledPosition = scrollTop;
    };
};
