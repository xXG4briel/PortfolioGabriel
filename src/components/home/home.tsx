// import { React } from 'react';
import './home.scss'
// import Typewritter from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
// import Typical from 'react-typical';

function Home(){

    const imgs: any[] = [
        { name: 'Facebook', icon : 'logo-facebook.svg', link: 'https://www.facebook.com/gabriel.george.7965/' }, 
        { name: 'Instagram', icon : 'logo-instagram.svg', link: 'https://www.instagram.com/geeorg3___/' }, 
        { name: 'Linkedin', icon : 'logo-linkedin.svg', link: 'https://www.linkedin.com/in/gabriel-george-alves-nicodemus-8aa13b192/' }
    ];
    function openMedia(url: string) {
        window.open(url);
    }
    // var app: any = document.getElementById('app');

    // var typewriter: any = new Typewriter(app, {
    //     loop: true,
    //     delay: 75,
    // });

    // typewriter
    // .pauseFor(2500)
    // .typeString('A simple yet powerful native javascript')
    // .pauseFor(300)
    // .deleteChars(10)
    // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    // .pauseFor(1000)
    // .start();

    return (
        <div className="home-page-container">
            <main>
                <section className="main-welcome">
                    <aside>
                        <div>
                            <span className="font-small">Bem vindo ao meu mundo.</span>
                            {/* <p>Olá, me chamo <span>Gabriel</span>  sou um estudante e Desenvolvedor Front end</p> */}
                            <p id="app">
                            <Typewriter
                                onInit={(typewriter: any) => {
                                    typewriter.typeString('Olá, me chamo <span class="my-name">Gabriel</span>  sou um estudante e Desenvolvedor Front end')
                                    .pauseFor(2500)
                                    .deleteChars(9)
                                    typewriter.typeString('Full Stack?')
                                    .start();
                                }}
                            />
                            </p>
                                
                        </div>
                        <div className="main-midias-sociais">
                            <span className="font-small">Minhas midias sociais</span>
                            <div className="main-midias-icons">
                                {imgs.map( ( {icon, name, link} ) =>
                                    <img draggable="false" key={name} src={ '/assets/icon/' + icon } alt={name} onClick={ () =>{ window.open(link) }} />
                                    )}
                            </div>
                        </div>
                    </aside>
                </section>
                <section className="main-img">
                        <img src="https://avatars.githubusercontent.com/u/62632117?v=4" alt="Me"/>
                    {/* <div>
                    </div> */}
                </section>
            </main>
        </div>
    );
}

export default Home;