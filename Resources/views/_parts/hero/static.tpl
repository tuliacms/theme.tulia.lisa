{% set link = customizer_get('hero.static.link') %}

<div class="hero hero-static">
    {% if link %}
        <a href="{{ link }}" class="hero-link-wrapper">
    {% endif %}

    {% if customizer_get('hero.static.background') %}
        {% set static_background = image_url(customizer_get('hero.static.background'), 'original') %}
    {% else %}
        {% set static_background = asset('/assets/theme/tulia/lisa/images/hero-image.jpg') %}
    {% endif %}

    <div class="hero-image" style="background-image:url('{{ static_background }}');"></div>
    <div class="hero-text">
        <div class="hero-headline">
            {{ customizer_get('hero.static.headline') }}
        </div>
        <div class="hero-description">
            {{ customizer_get('hero.static.description') }}
        </div>

        {% if customizer_get('hero.static.button.show') == '1' and link %}
            <button type="button" class="btn btn-primary btn-inversed btn-lg btn-icon-right">
                {{ customizer_get('hero.static.button.label') }}
                <i class="btn-icon fas fa-chevron-right"></i>
            </button>
        {% endif %}
    </div>

    {% if link %}
        </a>
    {% endif %}
</div>
