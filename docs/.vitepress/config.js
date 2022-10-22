import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'Blade Components',
    titleTemplate: 'Laravel Blade Components',
    cleanUrls: true,
    base: '/laravel-blade-components/',
    themeConfig: {
        nav: [
            {
                text: 'Components',
                link: '/components/',
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
                    text: 'Components',
                    items: [
                        {
                            text: 'Modal',
                            link: '/components/modal',
                        }
                    ]
                }
            ],
        },
    },
})