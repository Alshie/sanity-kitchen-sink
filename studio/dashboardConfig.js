export default {
  widgets: [
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
                  buildHookId: '609ba1f166af51e7433b10ed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ep76n4fn',
                  apiId: '42cfbb93-f75c-4582-b3ee-ec7dd0d12e1e'
                },
                {
                  buildHookId: '609ba1f180b973e5673df350',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y875vtvo',
                  apiId: '7ec94505-b818-41e3-82ed-8ba2bb10ad64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alshie/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y875vtvo.netlify.app', category: 'apps'}
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
