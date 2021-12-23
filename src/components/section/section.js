const Section = () => {
    return (
        <section>
            
            <div className="info">
                <h1>Barbearia Xavier</h1>
                <p>ahcjsdvndfnbkdgbnfmg bfmg blfg bflg blfmgbflv bfogkb flvkb dlvb </p>
            </div>

            <div className="img-wrapper">
                <img src="" className="img"/>
            </div>
            
            <div className="container">
                <form>
                    <input className="input-field" type="text" placeholder="Digite seu Usuario" />
                    <input className="input-label"  type="password" placeholder="Digite sua Senha" />
                    <button className="btn" type="submit">Entrar</button>
                </form>

                <a className="btn-cadastro" href="#">Cadastre-se</a>
            </div>

        </section>
    )
}

export default Section;