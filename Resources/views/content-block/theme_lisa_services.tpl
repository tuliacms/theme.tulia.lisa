<div class="">
    <div class="row">
        <div class="col">
            <div class="block block-services block-margin-bottom-0 block-margin-top-0">
                <div class="tulia-container-max-width">
                    <div class="row">
                        <div class="col-6">
                            <p class="lead">{{ intro|default }}</p>
                            <h2>{{ headline|default }}</h2>
                        </div>
                        <div class="col-6">
                            <p class="services-slogan">{{ short_text|default }}</p>
                        </div>
                    </div>
                    <div class="services-collection">
                        <div class="row">
                            <div class="col-4">
                                <a href="{{ service_1_link|default|raw }}" class="service-item">
                                    {% if service_1_icon is defined %}
                                        <div class="service-icon">
                                            <i class="{{ service_1_icon|default|raw }}"></i>
                                        </div>
                                    {% endif %}
                                    {{ service_1_content|default|raw }}
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="{{ service_2_link|default|raw }}" class="service-item">
                                    {% if service_2_icon is defined %}
                                        <div class="service-icon">
                                            <i class="{{ service_2_icon|default|raw }}"></i>
                                        </div>
                                    {% endif %}
                                    {{ service_2_content|default|raw }}
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="{{ service_3_link|default|raw }}" class="service-item">
                                    {% if service_3_icon is defined %}
                                        <div class="service-icon">
                                            <i class="{{ service_3_icon|default|raw }}"></i>
                                        </div>
                                    {% endif %}
                                    {{ service_3_content|default|raw }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
