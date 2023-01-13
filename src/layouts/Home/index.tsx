import { Suspense, lazy } from 'react'
import StyledHome from './style'

const BG = lazy(() => import('./BG'))

export default function Home({
  links = {},
  experience = [],
  bio = '',
  projects = [],
  skills = [],
  highlights = [],
  title
}: HomeProps) {
  return (
    <>
      <StyledHome>
        <hgroup>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />

          {!!Object.keys(links).length && (
            <nav>
              {Object.entries(links).map(([k, v]) => (
                <span key={k}>
                  <a
                    dangerouslySetInnerHTML={{ __html: k }}
                    href={v}
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                </span>
              ))}
            </nav>
          )}
        </hgroup>

        <div>
          <h2>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h2>
          {bio && <p dangerouslySetInnerHTML={{ __html: bio }} />}
        </div>

        <section>
          {!!highlights.length && (
            <div className="highlights">
              <h2>Brief.</h2>

              <ul>
                {highlights.map(i => (
                  <li dangerouslySetInnerHTML={{ __html: i }} key={i} />
                ))}
              </ul>
            </div>
          )}

          {!!skills.length && (
            <div className="tech">
              <h2>Tech.</h2>

              <ul>
                {skills.map(i => (
                  <li dangerouslySetInnerHTML={{ __html: i }} key={i} />
                ))}
              </ul>
            </div>
          )}
        </section>

        <section>
          {!!experience.length && (
            <div className="exp">
              <h2>Exp.</h2>

              <ul>
                {experience.map(i => (
                  <li key={i.url}>
                    {i.company && (
                      <a
                        dangerouslySetInnerHTML={{ __html: i.company }}
                        href={i.url ?? '#'}
                        onClick={e => !i.url && e.preventDefault()}
                        rel="noopener noreferrer"
                        target="_blank"
                      />
                    )}

                    {i.position && (
                      <span>
                        {i.position && (
                          <strong
                            dangerouslySetInnerHTML={{ __html: i.position }}
                          />
                        )}

                        <time>{i.date ?? 'current'}</time>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!!projects.length && (
            <div className="collab">
              <h2>Collab.</h2>

              <ul>
                {projects.map(i => (
                  <li key={JSON.stringify(i)}>
                    {typeof i === 'string' ? (
                      i
                    ) : (
                      <a href={i.url} rel="noopener noreferrer" target="_blank">
                        {i.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </StyledHome>

      <Suspense fallback={null}>
        <BG
          style={{
            inset: 0,
            pointerEvents: 'none',
            position: 'fixed',
            zIndex: -1
          }}
        />
      </Suspense>
    </>
  )
}

interface HomeProps {
  bio?: string
  experience?: {
    url?: string
    company?: string
    position?: string
    date?: string
  }[]
  highlights?: string[]
  links?: Record<string, string>
  projects?: Array<string | { name: string; url: string }>
  skills?: string[]
  title: string
}
