<div class="">
    <div class="row">
        <div class="col">
            <div class="block block-bg-{{ background|default('white') }} block-contact block-margin-bottom-0 block-margin-top-0">
                <div class="tulia-container-max-width">
                    <p class="lead">{{ intro|default|raw }}</p>
                    <h2>{{ headline|default|raw }}</h2>
                    {{ contact_form(form_id|default) }}
                </div>
            </div>
        </div>
    </div>
</div>
