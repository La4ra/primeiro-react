import Card from "./Card";
function Servicos({ servicos }) {
    const [
        servico1,
        servico2,
        servico3,
        servico4
    ] = servicos;

    return (
        <section className="servicos" id="servicos">
            <h2>Serviços oferecidos</h2>
            <div className="cards">
                <Card titulo={servico1}>
                    <p>Serviço dísponível para agendamento,</p>
                </Card>
                <Card titulo={servico2}>
                    <p>Serviço dísponível para agendamento,</p>
                </Card>
                <Card titulo={servico3}>
                    <p>Serviço ddísponível para agendamento,</p>
                </Card>
                <Card titulo={servico4}>
                    <p>Serviço dísponível para agendamento,</p>
                </Card>
            </div>
        </section>
    );
}
export default Servicos;