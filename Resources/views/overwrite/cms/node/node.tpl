{% extends 'theme' %}

{% block content %}
    {% if node.hasPurpose('page:homepage') == false %}
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="page-header">
                        <div class="page-title">
                            <h1 class="m-0">{{ node.title }}</h1>
                        </div>
                    </div>

                    {% if not node.introduction|empty %}
                        <p class="lead node-lead">{{ node.introduction }}</p>
                    {% endif %}
                </div>
            </div>
        </div>
    {% endif %}

    {% if edit_links_enabled() %}
        <div class="container-xxl">
            <div class="row">
                <div class="col my-4">{{ edit_links(node) }}</div>
            </div>
        </div>
    {% endif %}

    <div class="node-content">
        {% if node.content is defined and not node.content|empty %}
            {{ node.content|default|raw }}
        {% else %}
            <p>&nbsp;</p>
        {% endif %}
    </div>
{% endblock %}
