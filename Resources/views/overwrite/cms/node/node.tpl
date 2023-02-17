{% extends '@cms/node/node.tpl' %}

{% block title %}
    {% if node.hasPurpose('page:homepage') == false %}
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="page-header">
                        <div class="page-title">
                            <h1 class="m-0">{{ node.title }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% endif %}
{% endblock %}

{% block edit_links %}
    {% if edit_links_enabled() %}
        <div class="container-xxl mb-5">
            <div class="row">
                <div class="col">
                    {{ edit_links(node) }}
                </div>
            </div>
        </div>
    {% endif %}
{% endblock %}

{% block thumbnail %}{% endblock %}
{% block details %}{% endblock %}

{% block introduction %}
    {% if node.hasPurpose('page:homepage') == false %}
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    {% if not node.introduction|empty %}
                        <p class="lead node-lead">{{ node.introduction }}</p>
                    {% endif %}
                </div>
            </div>
        </div>
    {% endif %}
{% endblock %}

{% block node_content %}
    <div class="node-content">
        {% if node.content is defined and not node.content|empty %}
            {{ node.content|default|raw }}
        {% endif %}
    </div>
{% endblock %}
