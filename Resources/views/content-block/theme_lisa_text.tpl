<div class="container-xxl">
    <div class="row">
        <div class="col">
            <div class="block">
                <div class="row">
                    <div class="col">
                        <p class="lead">{{ intro|default|raw }}</p>
                        <h2>{{ headline|default|raw }}</h2>
                        {{ content|default|raw }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
