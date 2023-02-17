{% include template('_parts/navbar.tpl') %}
{% if is_homepage() %}
    {% include template('_parts/hero/static.tpl') %}
{% else %}
    <div class="header-pillow d-none d-md-block"></div>
{% endif %}
