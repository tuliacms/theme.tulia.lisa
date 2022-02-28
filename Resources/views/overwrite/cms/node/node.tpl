{% extends 'theme' %}

{% block content %}
    <div class="page-header">
        <div class="page-title">
            <h1 class="m-0">{{ node.title }}</h1>
        </div>
    </div>
    <div class="container-xxl">
        <div class="row">
            <div class="col">
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

    {% if node.content is defined and not node.content|empty %}
        {{ node.content|default|raw }}
    {% else %}
        <p>&nbsp;</p>
    {% endif %}
{% endblock %}
