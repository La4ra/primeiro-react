

function Header({ titulo }) {
    return (
        <header className="header">
            <div>
                <h2>{titulo}</h2>
                <p>painel de atendimentos</p>
            </div>
            <nav>
                <a href="#">Resumo</a>
                <a href="#">Atendimentos</a>
                <a href="#">Serviços</a>
                <a href="#">Profssional</a>
            </nav>

        </header>

    )
}
export default Header