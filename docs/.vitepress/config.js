import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'Blade Components',
    titleTemplate: 'Laravel Blade Components',
    lastUpdated: true,
    cleanUrls: 'with-subfolders',
    base: '/laravel-blade-components/',
    themeConfig: {
        nav: [
            {
                text: 'Components',
                link: '/components/introduction-getting-started',
            },
        ],
        socialLinks: [
            { link: 'https://github.com/jedymatt/laravel-blade-components', icon: 'github' },
        ],
        editLink: {
            pattern: 'https://github.com/jedymatt/laravel-blade-components/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
        sidebar: {
            '/components/': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/components/introduction-getting-started',
                        },
                    ],
                },
                {
                    text: 'Components',
                    items: [
                        {
                            text: 'Modal',
                            link: '/components/components-modal',
                        },
                        {
                            text: 'Dropdown',
                            link: '/components/components-dropdown',
                        }
                    ]
                }
            ],
        },
    },
})