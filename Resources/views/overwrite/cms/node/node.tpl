{% extends 'theme' %}

{% block content %}
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>{{ node.title }}</h1>

                {{ edit_links(node) }}

                <p class="lead node-lead">{{ node.introduction }}</p>

                {% if node.thumbnail %}
                    <div class="node-thumbnail">
                        {{ image(node.thumbnail, { size: 'node-thumbnail' }) }}
                    </div>
                {% endif %}
            </div>
        </div>
    </div>

    {{ node.opis|raw }}
{% endblock %}
