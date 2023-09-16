import React from 'react';
import './Body.css';


const Body = () => {
return (

<body>
    <div className="body-container">
        <article class="row p-5 d-flex bg-blue">
            <section class="col-md-4 my-4">
                <h1 class="my-5"> Bem-vindo !</h1>
                <p class="my-4">Seja muito bem-vindo ao Projeto Acqua Flora. Nosso projeto é focado na sustentabilidade
                    e no cuidado com as áreas verdes da cidade de São Paulo.</p>
                <a href="" class="btn mt-5">Venha conhecer</a>
            </section>
            <section class="col-md-8 my-4">
                <img src="/src/assets/Images/Life in a city-bro 2.png" alt="Pessoas na cidade" class="img-fluid" />
            </section>
        </article>

        {/* Sobre nos */}
        <div class="row p-5 d-flex">
            <section class="col-md-6 my-4">
                <h1 class="my-5"> Sobre nós</h1>
                <h2>Quem somos</h2>
                <p class="my-4">Somos uma empresa preocupada com o Meio Ambiente e com a Biodiversidade, e buscamos
                    através do projeto Acqua Flora, trazer uma melhora na qualidade para com os cuidados das áreas
                    verdes da cidade de São
                    Paulo.</p>
                <h3>Quer saber mais sobre o projeto?</h3>
                <a href="" class="btn my-3">Conheça o projeto</a>
            </section>
            <section class="col-md-6 my-4">
                <img src="/src/assets/Images/Walking-in-park-1.png" alt="Pessoa no parque" class="img-fluid" />
            </section>
        </div>

        {/* PROBLEMA */}
        <div class="row p-5 d-flex bg-blue">
            <div class="col-md-6">
                <img src="/src/assets/Images/People-sitting-in-park2.png" alt="Pessoas no parque" class="img-fluid" />
            </div>
            <div class="col-md-6">
                <h1>Problema</h1>
                <p class="my-5">O problema em que o nosso projeto está focado, é no desperdício de água durante o
                    cuidado e a manutenção das áreas verdes de São Paulo, como parques, praças e jardins urbanos.</p>
            </div>
            <div class="col-md-6 my-5">
                <p>Temos como clientes entidades e órgãos públicos que cuidam destas áreas verdes e que se preocupam com
                    o meio ambiente, a biodiversidade e com os moradores de São Paulo, como a Secretaria do Meio
                    Ambiente e as Prefeituras Regionais.</p>
            </div>
            <div class="col-md-6">
                <img src="/src/assets/Images/gotas.png" alt="Gotas de água" class="img-fluid" />
            </div>
        </div>
        {/* Projeto */}
        <div class="row p-5 d-flex">
            <section class="col-md-6 my-4">
                <img src="/src/assets/Images/rectangle 7.png" alt="Pessoa no parque" class="img-fluid" />
            </section>
            <section class="col-md-6 my-4">
                <h1 class="my-5"> Projeto</h1>
                <h3>Aspersores</h3>
                <p>Em nosso projeto, utilizamos aspersores que funcionam apenas quando necessário, ou seja, quando o
                    solo precisa ser irrigado. Para que isso fosse possível, colocamos sensores de umidade juntamente
                    aos aspersores.</p>
                <p>Os aspersores então só serão ligados quando o sensor captar que o solo não está úmido o suficiente
                </p>
                <h3>Caixas coletoras</h3>
                <p>Utilizamos caixas coletoras para armazenar a água das chuvas de prédios, através dos rufos e calhas.
                    Está água seria então reutilizada para a irrigação do solo.</p>
            </section>
        </div>

        {/* IBM */}
        <div class="row p-5 d-flex bg-blue">
            <section class="col-md-6 my-4">
                <img src="/src/assets/Images/Rectangle 4.png" alt="Imagem de água" class="img-fluid" />
            </section>
            <section class="col-md-6 my-4">
                <h1 class=""> Problema IBM </h1>
                <p class="my-5">O projeto passado pela IBM está voltado para o conceito de “Smart Cities”. Nós, como
                    grupo e empresa, deveríamos criar uma solução para algum problema dentro das nossas cidades.Pensando
                    na sustentabilidade e na tecnologia, para criar uma ideia criativa para o problema do desperdício de
                    água durante a manutenção das áreas verdes da cidade de São Paulo.</p>
            </section>
        </div>
        {/*area verde */}
        <div class="container my-5">
            <div class="title-container my-5">
                <h1>Áreas Verdes Urbanas</h1>
                <h2>Qual sua importância?</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card text-center card-item">
                            <div class="card-body">
                                <h2 class="card-title my-5">Controle da Poluição</h2>
                                <p class="card-text mt-5">As árvores e plantas que estão nas áreas verdes absorvem o gás
                                    carbônico e liberam oxigênio, fazendo com que melhore a qualidade do ar das cidades.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card text-center card-item">
                            <div class="card-body ">
                                <h2 class="card-title my-5">Controle das Ilhas de Calor</h2>
                                <p class="card-text mt-5">As ilhas de calor são responsáveis por diminuir a umidade do
                                    ar,
                                    ajudar na ação do efeito estufa e fazer muito mal as espécies. As áreas verdes
                                    controlam a ação dessas ilhas de calor nas cidades.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card text-center card-item">
                            <div class="card-body">
                                <h2 class="card-title my-5">Melhora na Qualidade de Vida</h2>
                                <p class="card-text mt-5">Além de ajudarem o meio ambiente, também ajudam na saúde
                                    física e
                                    mental dos moradores da cidade por conta das áreas de recreação.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Impactos */}
        <div class="container">
            <h1 class="my-4">Impactos</h1>
            <div class="row bg-blue">
                <div class="col-md-6 my-5">
                    <h3 class="mb-4">Impactos negativos</h3>
                        <ul>
                            <li>Aumento da poluição.</li>
                            <li>Aumento significativo do desperdício de água.</li>
                            <li>Dificuldade no monitoramento e na manutenção das áreas verdes de São Paulo.</li>
                            <li>Parques, praças e jardins públicos sem o devido cuidado necessário.</li>
                    </ul>
                </div>
                <div class="col-md-6 my-5">
                    <h3 class="mb-4">Impactos positivos</h3>
                        <ul>
                            <li>Maior cuidado com os parques, praças e jardins.</li>
                            <li>Menor desperdício de água.</li>
                            <li>Melhora no ar.</li>
                            <li>Melhora da qualidade de vida dos moradores da cidade.</li>
                            <li>Maior cuidado com a biodiversidade.</li>
                    </ul>
                </div>
            </div>
        </div>




        <div className="container bg-blue">
            <h2>Contato</h2>
            <p>Entre em contato conosco...</p>
        </div>
    </div>
</body>
);
}

export default Body;