import Links from './links/Links'

// import "./navbar.css"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
        <div>
            {/* <Link href="/">HomePage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link> */}
            <Links />
        </div>
    </div>
  )
}

export default Navbar