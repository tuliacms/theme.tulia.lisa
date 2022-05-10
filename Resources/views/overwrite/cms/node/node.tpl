{% extends 'theme' %}

{% block content %}
    {% if node.hasFlag('page:homepage') == false %}
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="page-header">
                        <div class="page-title">
                            <h1 class="m-0">{{ node.title }}</h1>
                        </div>
                    </div>
                    {{ edit_links(node) }}

                    {% if not node.introduction|empty %}
                        <p class="lead node-lead">{{ node.introduction }}</p>
                    {% endif %}

                    {% if node.thumbnail %}
                        <div class="node-thumbnail">
                            {{ image(node.thumbnail, { size: 'node-thumbnail' }) }}
                        </div>
                    {% endif %}
                </div>
            </div>
        </div>
    {% endif %}

    <div class="node-content">
        {% if node.tulia_editor is defined and not node.tulia_editor|empty %}
            {{ node.tulia_editor|default|raw }}
        {% else %}
            <p>&nbsp;</p>
        {% endif %}
        {{ node.opis|raw }}
    </div>
{% endblock %}
