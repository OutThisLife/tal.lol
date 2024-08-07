import { Suspense } from 'react'
import { Home } from '~/layouts'

export default function Index() {
  return (
    <Suspense>
      <Home
        bio={`I am a full stack engineer and have been coding since I was ~12.\nMy primary focus is to create beautiful, stunning experiences with the best designers available.\nIn tandem, I push to keep perf. bottlenecks and cost near ~0.\n`}
        experience={[
          { company: 'brookie', date: 'now', position: '*' },
          {
            company: 'ExtendAI',
            date: '2024',
            position: 'sr full stack',
            url: '//www.extend.ai'
          },
          {
            company: 'Braintrust',
            date: '2024',
            position: 'sr full stack',
            url: '//www.braintrust.com'
          },
          {
            company: 'ClubNFT',
            date: '2022-2023',
            position: 'Sr Full Stack',
            url: '//www.clubnft.com'
          },
          {
            company: 'Drinkworks',
            date: '2020-2022',
            position: 'Sr Full Stack'
          },
          {
            company: 'InVisionApp',
            date: '2017-2020',
            position: 'Sr Full Stack',
            url: '//www.invisionapp.com'
          },
          {
            company: 'Glide Design',
            date: '2009-2017',
            position: 'Sr Full Stack',
            url: '//www.glidedesign.com'
          },
          {
            company: 'Foda Studio',
            date: '2013-2017',
            position: 'Sr Full Stack',
            url: '//www.fodastudio.com'
          },
          {
            company: 'GKW',
            date: '2010-2017',
            position: 'dev',
            url: '//www.thegkwco.com'
          },
          { company: 'Get Aha', date: '2010-2014', position: 'dev' },
          {
            company: 'Lucid Crew',
            date: '2013',
            position: 'Dev',
            url: '//www.lucidcrew.com'
          },
          {
            company: 'Fox Web Development',
            date: '2013-2014',
            position: 'Dev',
            url: '//www.foxwebdevelopment.com'
          },
          {
            company: 'Sneaker Web Design',
            date: '2012-2014',
            position: 'Dev',
            url: '//www.matchboxstudio.com'
          }
        ]}
        highlights={[
          'Pixel-perfect ideation to reality',
          'Advanced animation/interaction',
          'Team leading, mentorship',
          'Live coding w/ top designers'
        ]}
        links={{
          code: '//github.com/outthislife',
          lnkd: '//linkedin.com/in/bbbrooklyn',
          mail: 'mailto:brooklyn.bb.nicholson@gmail.com',
          medium: '//medium.com/@babybrooklyn'
        }}
        projects={[
          'So&So',
          { name: 'NuclearNerds', url: '//nuclearnerds.io' },
          'OddBirds',
          'Drinkworks',
          'InVisionApp',
          'iFLY',
          { name: 'designbetter', url: '//designbetter.co' },
          'Yeti Coolers ',
          'AT&T'
        ]}
        skills={[
          'JS/TS, Go, Rust, PHP, GLSL, Python, C/C++, C#',
          'NextJS, Gatsby, Serverless, ThreeJS',
          'GraphQL, SQL, NoSQL, MongoDB',
          'Ps, Ai, Sketch, Cinima 4D, Maya'
        ]}
        title="Brooklyn! Nicholson"
      />
    </Suspense>
  )
}
