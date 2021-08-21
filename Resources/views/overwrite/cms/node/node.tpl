{% extends 'theme' %}

{% block content %}
    <div class="container-fluid content-container">
        <div class="row">
            <div class="col">
                <h1>{{ node.title }}</h1>

                {{ edit_links(node) }}

                <p class="lead node-lead">{{ node.introduction }}</p>

                {% if node.thumbnail %}
                    <div class="node-thumbnail">
                        {{ image(node.thumbnail, { size: 'node-thumbnail' }) }}
                    </div>
                {% endif %}
            </div>
        </div>
    </div>

    {{ node.content|raw }}

    <!-- Block: What we do -->
    <div class="container-fluid content-container">
        <div class="row">
            <div class="col">
                <div class="block block-what-we-do">
                    <div class="row">
                        <div class="col-6 block-images">
                            <div class="block-image block-image-main" style="background-image:url(https://picsum.photos/400/460);"></div>
                            <div class="block-image block-image-sub" style="background-image:url(https://picsum.photos/300/370?2);"></div>
                        </div>
                        <div class="col-6">
                            <div class="block-content">
                                <p class="lead">What we do</p>
                                <h2>Mauris viverra ligula quis sollicitudin volutpat</h2>
                                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante.</p>
                                <ul>
                                    <li>
                                        <b>Phasellus tellus arcu</b><br />
                                        Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis sollicitudin eu.
                                    </li>
                                    <li>
                                        <b>Mauris tincidunt convallis</b><br />
                                        Nunc ut dictum quam. Mauris tincidunt convallis lectus sed lacinia.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Block: Services -->
    <div class="block block-services block-margin-bottom-0">
        <div class="container-fluid content-container">
            <div class="row">
                <div class="col-6">
                    <p class="lead">Our Services</p>
                    <h2>Look What We Offer</h2>
                </div>
                <div class="col-6">
                    <p class="services-slogan">Ded nec finibus nulla. Fusce rhoncus dui eu nunc molestie, eget aliquet ligula mollis.</p>
                </div>
            </div>
            <div class="services-collection">
                <div class="row">
                    <div class="col-4">
                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <i class="far fa-money-bill-alt"></i>
                            </div>
                            <h3 class="service-title">Sed tempus libero id magna mattis</h3>
                            <p class="service-description">
                                Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis.
                            </p>
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <i class="fas fa-shuttle-van"></i>
                            </div>
                            <h3 class="service-title">Proin ac dolor egestas, bibendum tortor non</h3>
                            <p class="service-description">
                                Nunc ut dictum quam. Mauris tincidunt convallis lectus sed lacinia. Mauris viverra ligula quis sollicitudin volutpat.
                            </p>
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#" class="service-item">
                            <div class="service-icon">
                                <i class="fas fa-fighter-jet"></i>
                            </div>
                            <h3 class="service-title">Mauris viverra ligula quis sollicitudin volutpat</h3>
                            <p class="service-description">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque egestas iaculis mi id iaculis.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Block: Call to action -->
    <div class="block block-call-to-action block-margin-top-0">
        <div class="container-fluid content-container">
            <div class="row">
                <div class="col">
                    <div class="block-inner">
                        <div class="block-text">
                            Vivamus non sapien eu nibh semper dignissim a non purus.
                        </div>
                        <div class="block-button">
                            <a href="#" class="btn btn-primary btn-lg btn-inversed btn-icon-right">
                                <span>Call to action</span>
                                <i class="btn-icon fas fa-headphones"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Block: Services Light -->
    <div class="block block-services-light">
        <div class="container-fluid content-container">
            <div class="services-collection">
                <div class="row">
                    <div class="col-4 service-column">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="far fa-money-bill-alt"></i>
                            </div>
                            <h3 class="service-title">Sed tempus libero</h3>
                            <p class="service-description">
                                Sed augue sed laoreet malesuada. Phasellus tellus arcu, aliquam interdum quis.
                            </p>
                        </div>
                    </div>
                    <div class="col-4 service-column">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fas fa-shuttle-van"></i>
                            </div>
                            <h3 class="service-title">Proin ac dolor egestas</h3>
                            <p class="service-description">
                                Nunc ut quam. Mauris tincidunt convallis sed lacinia. Mauris viverra volutpat.
                            </p>
                        </div>
                    </div>
                    <div class="col-4 service-column">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fas fa-fighter-jet"></i>
                            </div>
                            <h3 class="service-title">Mauris viverra ligula quis</h3>
                            <p class="service-description">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque iaculis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Block: Company in numbers -->
    <div class="block block-company-in-numbers block-margin-top-0">
        <div class="container-fluid content-container">
            <div class="row">
                <div class="col">
                    <p class="lead">Our History</p>
                    <h2>Our Company In Numbers</h2>
                    <div class="block-numbers">
                        <div class="block-number-item">
                            <div class="block-number-item-inner">
                                <div class="block-number">
                                    <span class="block-number-counter">120</span>
                                    <span class="block-number-after">+</span>
                                </div>
                                <div class="block-number-label">Realisations</div>
                            </div>
                        </div>
                        <div class="block-number-item">
                            <div class="block-number-item-inner">
                                <div class="block-number">
                                    <span class="block-number-counter">50</span>
                                    <span class="block-number-after">+</span>
                                </div>
                                <div class="block-number-label">Workers</div>
                            </div>
                        </div>
                        <div class="block-number-item">
                            <div class="block-number-item-inner">
                                <div class="block-number">
                                    <span class="block-number-counter">5</span>
                                </div>
                                <div class="block-number-label">Years experience</div>
                            </div>
                        </div>
                        <div class="block-number-item">
                            <div class="block-number-item-inner">
                                <div class="block-number">
                                    <span class="block-number-counter">10</span>
                                </div>
                                <div class="block-number-label">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Block: Nodes -->
    <div class="block block-nodes">
        <div class="container-fluid content-container">
            <div class="row">
                <div class="col">
                    <a href="#" class="btn btn-primary btn-lg btn-icon-right block-news-read-more-btn">
                        <span>Read More</span>
                        <i class="btn-icon fas fa-chevron-right"></i>
                    </a>
                    <p class="lead">Recent News</p>
                    <h2>Read What We Do Recent</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <a href="#" class="block-node-item">
                        <div class="block-node-image">
                            <img src="https://picsum.photos/800/450?$" />
                            <span class="block-node-date">{{ format_date() }}</span>
                        </div>
                        <div class="block-node-info">
                            <div class="block-node-title">
                                Sed tempus libero id magna mattis
                            </div>
                            <p class="block-node-description">
                                Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis sollicitudin eu, elementum non magna. Nunc dictum fringilla nisi ac pulvinar.
                            </p>
                            <div class="block-node-read-more">
                                Read more
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="#" class="block-node-item">
                        <div class="block-node-image">
                            <img src="https://picsum.photos/800/450?3" />
                            <span class="block-node-date">{{ format_date() }}</span>
                        </div>
                        <div class="block-node-info">
                            <div class="block-node-title">
                                Mauris nec orci efficitur, gravida nisl eget, eleifend lectus. Sed sit amet tristique lectus
                            </div>
                            <p class="block-node-description">
                                In fermentum congue est, sit amet consequat turpis venenatis in. Mauris nec orci efficitur, gravida nisl eget, eleifend lectus. Sed sit amet tristique lectus.
                            </p>
                            <div class="block-node-read-more">
                                Read more
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="#" class="block-node-item">
                        <div class="block-node-image">
                            <img src="https://picsum.photos/800/450?2" />
                            <span class="block-node-date">{{ format_date() }}</span>
                        </div>
                        <div class="block-node-info">
                            <div class="block-node-title">
                                Fermentum congue est, sit amet consequat turpis venenatis in
                            </div>
                            <p class="block-node-description">
                                Sed nec finibus nulla. Fusce rhoncus dui eu nunc molestie, eget aliquet ligula mollis.
                            </p>
                            <div class="block-node-read-more">
                                Read more
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
{% endblock %}
