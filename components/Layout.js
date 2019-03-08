import Link from 'next/link'
import Head from 'next/head'
import "../styles.scss"

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a className="navLink">Home</a>
        </Link>
        |
        <Link className="navLink" href='/about'>
          <a className="navLink">About</a>
        </Link>
        |
        <Link className="navLink" href='/contact'>
          <a className="navLink">Contact</a>
        </Link>
      </nav>
    </header>

    {/* Page content */}
    {children}

    <footer>I'm here to stay</footer>
  </div>
)