<div class="">
    <div class="row">
        <div class="col">
            <div class="block block-company-in-numbers block-margin-bottom-0 block-margin-top-0">
                <div class="tulia-container-max-width">
                    <div class="row">
                        <div class="col">
                            <p class="lead">{{ intro|default|raw }}</p>
                            <h2>{{ headline|default|raw }}</h2>
                            <div class="block-numbers">
                                <div class="block-number-item">
                                    <div class="block-number-item-inner">
                                        <div class="block-number">
                                            <span class="block-number-counter">{{ number_1_value|default|raw }}</span>
                                            {% if number_1_label_after is defined and number_1_label_after is not empty %}
                                                <span class="block-number-after">{{ number_1_label_after|default|raw }}</span>
                                            {% endif %}
                                        </div>
                                        <div class="block-number-label">{{ number_1_label|default|raw }}</div>
                                    </div>
                                </div>
                                <div class="block-number-item">
                                    <div class="block-number-item-inner">
                                        <div class="block-number">
                                            <span class="block-number-counter">{{ number_2_value|default|raw }}</span>
                                            {% if number_2_label_after is defined and number_2_label_after is not empty %}
                                                <span class="block-number-after">{{ number_2_label_after|default|raw }}</span>
                                            {% endif %}
                                        </div>
                                        <div class="block-number-label">{{ number_2_label|default|raw }}</div>
                                    </div>
                                </div>
                                <div class="block-number-item">
                                    <div class="block-number-item-inner">
                                        <div class="block-number">
                                            <span class="block-number-counter">{{ number_3_value|default|raw }}</span>
                                            {% if number_3_label_after is defined and number_3_label_after is not empty %}
                                                <span class="block-number-after">{{ number_3_label_after|default|raw }}</span>
                                            {% endif %}
                                        </div>
                                        <div class="block-number-label">{{ number_3_label|default|raw }}</div>
                                    </div>
                                </div>
                                <div class="block-number-item">
                                    <div class="block-number-item-inner">
                                        <div class="block-number">
                                            <span class="block-number-counter">{{ number_4_value|default|raw }}</span>
                                            {% if number_4_label_after is defined and number_4_label_after is not empty %}
                                                <span class="block-number-after">{{ number_4_label_after|default|raw }}</span>
                                            {% endif %}
                                        </div>
                                        <div class="block-number-label">{{ number_4_label|default|raw }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
