<header>
    <nav class="navbar navbar-expand-md py-0 py-md-3">
        <div class="container-xxl">
            <a class="logo logo-text" href="{{ path('frontend.homepage') }}"{{ customizer_live_control('lisa.header.logo.text') }}>{{ customizer_get('lisa.header.logo.text') }}</a>
            <button class="hamburger hamburger--slider d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#website-main-navbar">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="website-main-navbar">
                {{ menu_space('mainmenu', 'horizontal') }}
                {% if customizer_get('lisa.header.show_language_switcher') == 'yes' and current_website().locales|length > 1 %}
                    <div class="dropdown language-switcher my-3 my-md-0 ms-md-5">
                        <a href="#" class="text-white dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ current_website().locale.language }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-md-end">
                            {% for locale in current_website().locales %}
                                <li><a href="{{ path('frontend.homepage', { _locale: locale.code }) }}" class="dropdown-item">{{ locale.code|trans_locale }}</a></li>
                            {% endfor %}
                        </ul>
                    </div>
                {% endif %}
            </div>
        </div>
    </nav>
</header>
