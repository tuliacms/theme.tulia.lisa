<?php

declare(strict_types=1);

namespace Tulia\Theme\Tulia\Lisa;

use Tulia\Component\Theme\Customizer\Changeset\NamedChangeset;
use Tulia\Component\Theme\Customizer\Provider\AbstractProvider;
use Tulia\Component\Theme\Customizer\CustomizerInterface;
use Tulia\Component\Theme\Customizer\Changeset\Factory\ChangesetFactoryInterface;

/**
 * @author Adam Banaszkiewicz
 */
class Customizer extends AbstractProvider
{
    /**
     * {@inheritdoc}
     */
    public function getPredefined(ChangesetFactoryInterface $factory): array
    {
        $changesetEmpty = $factory->factory('lisa.empty');
        $changesetEmpty->setData([
            'lisa.footer.contact.type' => '0',
            'lisa.footer.contact.phone' => '',
            'lisa.footer.contact.email' => '',
            'lisa.footer.contact.address' => '',
            'lisa.footer.socials.facebook' => '',
            'lisa.footer.socials.twitter' => '',
            'lisa.footer.socials.youtube' => '',
            'hero.static.headline' => '',
            'hero.static.description' => '',
            'hero.static.background' => '',
            'hero.static.button.show' => '0',
            'hero.static.link' => '',
            'hero.static.button.label' => '',
        ]);

        $changesetPredefined1 = $factory->factory('lisa.hero-static-1');
        $changesetPredefined1->setData([
             'hero.static.headline' => 'Lisa Theme',
             'hero.static.description' => 'Free, clean and customizable theme for Tulia CMS',
             'hero.static.background' => '',
             'hero.static.button.show' => '0',
             'hero.static.link' => '',
             'hero.static.button.label' => '',
        ]);

        $result = [];

        $named = new NamedChangeset($changesetEmpty);
        $named->setName('changesetPredefinedEmpty');
        $named->setDescription('changesetPredefinedEmptyDescription');
        $named->setTranslationDomain('lisa-theme');
        $result[] = $named;

        $named = new NamedChangeset($changesetPredefined1);
        $named->setName('Lisa - Static Hero 1');
        $result[] = $named;

        return $result;
    }

    /**
     * {@inheritdoc}
     */
    public function build(CustomizerInterface $builder): void
    {
        $builder->setTranslationDomain('lisa-theme');

        $this->buildStaticHero($builder);
        $this->buildFooter($builder);
    }

    /**
     * @param CustomizerInterface $builder
     */
    private function buildFooter(CustomizerInterface $builder): void
    {
        $builder->addSection('lisa.layout', [
            'label' => 'Layout',
        ]);

        $builder->addControl('lisa.layout.breadcrumbs', 'select', [
            'label'     => 'showBreadcrumbs',
            'section'   => 'lisa.layout',
            'choices' => [
                'show' => 'Tak',
                'hide' => 'Nie',
            ],
            'value' => 'show',
        ]);

        $builder->addSection('lisa.footer', [
            'label' => 'footer',
        ]);

        $builder->addControl('lisa.footer.contact.type', 'select', [
            'label'     => 'contactSection',
            'section'   => 'lisa.footer',
            'choices' => [
                '0' => 'Domyślnie',
                '1' => 'Miejsce na moduł (footer_contact)',
            ],
            'value' => '0',
        ]);

        $builder->addControl('lisa.footer.contact.copyrights', 'text', [
            'label'     => 'copyrights',
            'section'   => 'lisa.footer',
            'value'     => 'Tulia CMS',
            'transport' => 'postMessage',
        ]);

        $builder->addSection('lisa.footer.contact', [
            'label'  => 'contact',
            'parent' => 'lisa.footer',
        ]);

        $builder->addSection('lisa.footer.socials', [
            'label'  => 'socialMediaIcons',
            'parent' => 'lisa.footer',
        ]);

        $builder->addControl('lisa.footer.contact.phone', 'text', [
            'label'     => 'phoneNumber',
            'section'   => 'lisa.footer.contact',
            'value'     => '+48 768 564 175',
            'transport' => 'postMessage',
        ]);

        $builder->addControl('lisa.footer.contact.email', 'text', [
            'label'     => 'emailAddress',
            'section'   => 'lisa.footer.contact',
            'value'     => 'contact@event-agency.com',
            'transport' => 'postMessage',
        ]);

        $builder->addControl('lisa.footer.contact.address', 'textarea', [
            'label'     => 'companyAddess',
            'section'   => 'lisa.footer.contact',
            'value'     => "Event Agency,\nSt. Peter 1656,\nAlbuquerque",
            'transport' => 'postMessage',
        ]);

        $builder->addControl('lisa.footer.socials.facebook', 'text', [
            'label'     => 'Facebook',
            'section'   => 'lisa.footer.socials',
            'value'     => '#facebook',
        ]);

        $builder->addControl('lisa.footer.socials.twitter', 'text', [
            'label'     => 'Twitter',
            'section'   => 'lisa.footer.socials',
            'value'     => '#twitter',
        ]);

        $builder->addControl('lisa.footer.socials.youtube', 'text', [
            'label'     => 'YouTube',
            'section'   => 'lisa.footer.socials',
            'value'     => '#youtube',
        ]);
    }

    /**
     * @param CustomizerInterface $builder
     */
    private function buildStaticHero(CustomizerInterface $builder): void
    {
        $builder->addSection('lisa.hero', [
            'label' => 'staticBanner',
        ]);

        $builder->addControl('hero.static.headline', 'text', [
            'label'     => 'headline',
            'section'   => 'lisa.hero',
            'multilingual' => true,
            'transport' => 'postMessage',
            'value'     => 'Lisa Theme',
        ]);

        $builder->addControl('hero.static.description', 'textarea', [
            'label'     => 'description',
            'section'   => 'lisa.hero',
            'multilingual' => true,
            'transport' => 'postMessage',
            'value'     => 'Free, clean and customizable theme for Tulia CMS',
        ]);

        $builder->addControl('hero.static.background', 'filepicker', [
            'label'     => 'backgroundImage',
            'section'   => 'lisa.hero',
            'file_type' => 'image',
        ]);

        $builder->addControl('hero.static.link', 'text', [
            'label'     => 'link',
            'section'   => 'lisa.hero',
            'multilingual' => true,
            'value' => '#read-more',
        ]);

        $builder->addControl('hero.static.button.show', 'select', [
            'label'     => 'showButton',
            'section'   => 'lisa.hero',
            'choices' => [
                '0' => 'Nie',
                '1' => 'Tak',
            ],
            'value' => '1',
        ]);

        $builder->addControl('hero.static.button.label', 'text', [
            'label'     => 'buttonLabel',
            'section'   => 'lisa.hero',
            'multilingual' => true,
            'transport' => 'postMessage',
            'value'     => 'Read more',
        ]);
    }
}
