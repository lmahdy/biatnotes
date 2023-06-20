import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">BiatNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Ready for work! BiatNotes is here to make organizing tasks easier for you. Let's get started and accomplish great things together. </p>
                <address className="public__addr">
                BiatNotes<br />
                    Fondation BIAT<br />
                    Av. Habib Bourgiba, Tunis<br />
                    <a href="tel:+21654610012">(216) 54 610 012</a>
                </address>
                <br />
                <p>Owner: Mahdi Mzoughi</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public