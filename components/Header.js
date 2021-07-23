import Link from 'next/link'
export default function Header() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                <a className="navbar-item" href="../">
                    Content Manager
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                    <span />
                    <span />
                    <span />
                </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <div className=" navbar-item">
                    <div className="control has-icons-left">
                        <input
                        className="input is-rounded"
                        type="email"
                        placeholder="Search"
                        />
                        <span className="icon is-left">
                        <i className="fa fa-search" />
                        </span>
                    </div>
                    </div>
                    <Link href="/">
                        <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                        Home
                        </a>
                    </Link>
                    <Link href="/resource/New">
                        <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                        Add New
                        </a>
                    </Link>
                    <a className="navbar-item is-size-5 has-text-weight-semibold">
                    Features
                    </a>
                </div>
                </div>
            </div>
        </nav>
    )
}
