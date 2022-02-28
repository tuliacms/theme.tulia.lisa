<div class="block block-what-we-do">
    <div class="container-xxl">
        <div class="row">
            <div class="col-6 block-images">
                <div class="block-image block-image-main" style="background-image:url({{ image_under|default }});"></div>
                <div class="block-image block-image-sub" style="background-image:url({{ image_above|default }});"></div>
            </div>
            <div class="col-6">
                <div class="block-content">
                    <p class="lead">{{ intro|default|raw }}</p>
                    <h2>{{ headline|default|raw }}</h2>
                    {{ content|default|raw }}
                </div>
            </div>
        </div>
    </div>
</div>
