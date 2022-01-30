<div class="container-xxl">
    <div class="row">
        <div class="col">
            <div class="block block-services-light">
                <div class="services-collection">
                    <div class="row">
                        <div class="col-4 service-column">
                            <div class="service-item">
                                {% if service_1_icon is defined %}
                                    <div class="service-icon">
                                        <i class="{{ service_1_icon|default|raw }}"></i>
                                    </div>
                                {% endif %}
                                {{ service_1_content|default|raw }}
                            </div>
                        </div>
                        <div class="col-4 service-column">
                            <div class="service-item">
                                {% if service_2_icon is defined %}
                                    <div class="service-icon">
                                        <i class="{{ service_2_icon|default|raw }}"></i>
                                    </div>
                                {% endif %}
                                {{ service_2_content|default|raw }}
                            </div>
                        </div>
                        <div class="col-4 service-column">
                            <div class="service-item">
                                {% if service_3_icon is defined %}
                                    <div class="service-icon">
                                        <i class="{{ service_3_icon|default|raw }}"></i>
                                    </div>
                                {% endif %}
                                {{ service_3_content|default|raw }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
