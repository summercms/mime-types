export const View = state => [
  h1(state.title),
  state.description.map(d => p(d)),

  GitBadges('magic/mime-types'),

  h3({ id: 'install' }, 'installation'),
  p('be in a nodejs project'),
  Pre(`
npm install @magic/mime-types
`),

  h3({ id: 'usage' }, 'import / usage'),
  Pre(`
import mimes from '@magic/mime-types'

||::mime-db-content::||
`),

  h4({ id: 'changelog' }, 'changelog'),

  h5({ id: 'changelog-0.0.1' }, '0.0.1'),
  p('first publish'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/fs/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
