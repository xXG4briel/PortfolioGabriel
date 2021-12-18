import './about.scss'

function About() {
    const frase = { 
        nome: 'Stephen Hawking',
        frase: 'Não importa quanto a vida possa ser ruim, sempre existe algo que você pode fazer, e triunfar. Enquanto há vida, há esperança.'
    }
    const experiences: any = [
        { nome: 'HTML', valor: 90, color: "#acfaf5" },
        { nome: 'CSS', valor: 90, color: "#acfaf5" },
        { nome: 'Angular', valor: 60, color: "#acfaf5" },
        { nome: 'Ionic', valor: 60, color: "#acfaf5" },
        { nome: 'TypeScript', valor: 90, color: "#acfaf5" }
    ]

    return (
        <main className="about">
            <h1>Sobre</h1>
            <article className="about-container">
                <section className="about-information">
                    <div className="about-img">
                        <img src="https://avatars.githubusercontent.com/u/62632117?v=4" alt="Me"/>
                    </div>
                    <div className="about-info">
                        <ul>
                            <li><span>Nome:</span> Gabriel George A. N.</li>
                            <li><span>Idade:</span> 18</li>
                            <li><span>Endereço:</span> São Paulo, Sp</li>
                            <li><span>Contato:</span> 11 940878419</li>
                            <li><span>email:</span> gabrielgeorge95@gmail.com</li>
                        </ul>
                    </div>
                </section>
                <section className="about-knowledge">
                    <div className="about-frase">
                        <p>{ frase.frase }</p>
                        <p>- { frase.nome }</p>
                    </div>
                    <div className="about-experience">
                        { experiences.map( ( ex: any ) => 
                            <div className="about-slider">
                                <div className="text">
                                    <span>{ ex?.nome }</span>
                                    <span>{ ex?.valor }</span>
                                </div>
                                <div className="input">
                                    <input type="range" max="100" min="0" value={ex?.valor} />
                                </div>
                            </div>
                        ) }
                    </div>
                </section>
            </article>
        </main>
    );
}

export default About;