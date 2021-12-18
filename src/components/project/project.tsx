import './project.scss';

function Project() {
    const projects: any = [
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...'
        },
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        },
        { 
            name: 'Projeto', 
            image: './assets/images/undraw_void.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
        }
    ]

    return (
    <main className="project">
        <h1>Projetos</h1>
        <div className="project-container">
            { projects.map( (project: any) => 
            <aside className="project-card" title='Clique para ver o projeto'>
                <h3>{project?.name}</h3>
                <img src={project?.image} alt="logo"/>
                <div className="project-text-project">
                    <p>{project?.text}</p>
                </div>
            </aside>
            ) }
        </div>
    </main>
    );
}

export default  Project;