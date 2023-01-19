{% extends 'theme' %}

{% block content %}
    <div class="container-xxl">
        <div class="row">
            <div class="col">
                <div class="page-header">
                    <div class="page-title">
                        <h1 class="m-0">{{ term.name }}</h1>
                    </div>
                </div>

                {{ edit_links(term) }}
            </div>
        </div>
        <div class="block block-nodes py-3">
            <div class="row">
                {% for node in nodes %}
                    <div class="col-12 col-sm-6 col-md-4">
                        <a href="{{ node_path(node) }}" class="block-node-item mb-4">
                            <div class="block-node-image">
                                {% if node.thumbnail %}
                                    {{ image(node.thumbnail, { size: 'node-thumbnail' }) }}
                                {% else %}
                                    <img src="{{ asset('/assets/theme/tulia/lisa/theme/images/no-photo.node-thumbnail.png') }}" alt="" />
                                {% endif %}
                                <span class="block-node-date">{{ format_date(node.publishedAt) }}</span>
                            </div>
                            <div class="block-node-info">
                                <div class="block-node-title">{{ node.title }}</div>
                                <p class="block-node-description">{{ node.introduction }}</p>
                                <div class="block-node-read-more">{{ node_readmore|default('readMore'|trans({}, 'lisa-theme')) }}</div>
                            </div>
                        </a>
                    </div>
                {% endfor %}
            </div>
        </div>

        {{ paginator.position('center').addClass('py-0 mt-2 mb-5')|raw }}
    </div>
{% endblock %}
