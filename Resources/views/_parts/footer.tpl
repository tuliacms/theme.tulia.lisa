<footer>
    <div class="footer-inner container-fluid content-container">
        <div class="footer-boxes">
            <div class="footer-info">
                {{ widgets_space('footer_info') }}
            </div>
            <div class="footer-menu">
                {{ widgets_space('footer_quick_links') }}
            </div>
            <div class="footer-contact">
                {% if customizer_get('lisa.footer.contact.type') == '1' %}
                    {{ widgets_space('footer_contact') }}
                {% else %}
                    {% include relative(_self, 'footer-contact.tpl') %}
                {% endif %}
            </div>
        </div>
        <div class="copyrights"><b>Lisa Theme</b> by <a href="https://tuliacms.com/" title="Tulia CMS" target="_blank">Tulia CMS Team</a><br /> {{ 'now'|date('Y') }} &copy; <span class="footer-copyrights">{{ customizer_get('lisa.footer.contact.copyrights') }}</span></div>
    </div>
</footer>
