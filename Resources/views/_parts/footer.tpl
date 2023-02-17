<footer class="block block-footer">
    <div class="container-xxl">
        <div class="footer-boxes">
            <div class="footer-info">
                {{ widgets_space('footer-info') }}
            </div>
            <div class="footer-menu">
                <div class="widget-title">{{ 'quickLinks'|trans({}, 'lisa-theme') }}</div>
                {{ menu_space('footer-quick-links', 'vertical') }}
            </div>
            <div class="footer-contact">
                {% if customizer_get('lisa.footer.contact.type') == '1' %}
                    {{ widgets_space('footer-contact') }}
                {% else %}
                    {% include template('_parts/footer-contact.tpl') %}
                {% endif %}
            </div>
        </div>
        <div class="copyrights"><b>Lisa Theme</b> by <a href="https://tuliacms.org/" title="Tulia CMS" target="_blank">Tulia CMS Team</a><br /> {{ 'now'|date('Y') }} &copy; <span class="footer-copyrights" {{ customizer_live_control('lisa.footer.contact.copyrights') }}>{{ customizer_get('lisa.footer.contact.copyrights') }}</span></div>
    </div>
</footer>
