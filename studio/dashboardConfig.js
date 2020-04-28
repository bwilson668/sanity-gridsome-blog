export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea77cb51903676f4521696e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-u641rxhv',
                  apiId: 'b5174183-798e-4c7f-bfa7-032e69917a11'
                },
                {
                  buildHookId: '5ea77cb5a438a7b23d27a89c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-n76pxwo1',
                  apiId: '8028af98-fb5e-4104-a2bd-1919314c90a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bwilson668/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-n76pxwo1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
