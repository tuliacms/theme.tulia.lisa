{% include template('_parts/navbar.tpl') %}
{% if is_homepage() %}
    {% include template('_parts/hero/static.tpl') %}
{% else %}
    <div class="header-pillow"></div>
{% endif %}
