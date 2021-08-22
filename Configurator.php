<?php

declare(strict_types=1);

namespace Tulia\Theme\Tulia\Lisa;

use Tulia\Component\Theme\Configuration\AbstractConfigurator;
use Tulia\Component\Theme\Configuration\ConfigurationInterface;

/**
 * @author Adam Banaszkiewicz
 */
class Configurator extends AbstractConfigurator
{
    /**
     * {@inheritdoc}
     */
    public function configure(ConfigurationInterface $configuration): void
    {
        $configuration->add('color', 'primary', '#ff0000');

        $configuration->add('asset', 'tulia.lisa.main');
        $configuration->add('widget_space', 'homepage', 'Homepage');
        $configuration->add('widget_space', 'mainmenu', 'Main menu');
        $configuration->add('widget_space', 'footer_info', 'Footer - Info');
        $configuration->add('widget_space', 'footer_contact', 'Footer - Contact');
        $configuration->add('widget_space', 'footer_quick_links', 'Footer - Quick links');

        $configuration->add('widget_style', 'style-1', 'Style 1');

        $configuration->add('image_size', 'my-size', [
            'width' => 320,
            'height' => 240,
        ]);

        $configuration->add('tulia_editor_asset', 'tulia.lisa.main');
        $configuration->add('tulia_editor_plugin', 'tulia.lisa.editor.plugins');
    }

    /**
     * {@inheritdoc}
     */
    public function configureCustomizer(ConfigurationInterface $configuration): void
    {
        $configuration->add('asset', 'tulia.lisa.customizer');
    }
}
