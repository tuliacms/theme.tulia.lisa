<div class="container-xxl">
    <div class="row">
        <div class="col">
            <div class="block block-services-light">
                <div class="services-collection">
                    <div class="row">
                        {% for service in services %}
                            <div class="col-4 service-column">
                                <div class="service-item">
                                    {% if service.service_icon is defined %}
                                        <div class="service-icon">
                                            <i class="{{ service.service_icon }}"></i>
                                        </div>
                                    {% endif %}
                                    {{ service.service_content|default|raw }}
                                </div>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
