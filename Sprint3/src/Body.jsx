import React from 'react';
import './Body.css';


const Body = () => {
return (

<body>
    <div className="body-container">
        <article class="row p-5 d-flex bg-blue">
            <section class="col-md-4 my-3">
                <h1>Bem vindo</h1>
                <p>Seja bem-vindo ao Projeto Acqua Flora. Nosso projeto é focado na sustentabilidade e no cuidado com as
                    Áreas Verdes da cidade de São Paulo</p>
                <a href="" class="btn my-2">Venha conhecer</a>
            </section>
            <section class="col-md-8 my-3">
                <img src="/src/assets/Images/Life in a city-bro 2.png" alt="Pessoas na cidade" class="img-fluid" />
            </section>
        </article>







        <div className="container">
            <h1>Sobre nós</h1>
            <h2>Quem somos</h2>
            <p>Somos uma empresa preocupada com o Meio Ambiente e com a Biodiversidade, e buscamos através do projeto
                Acqua Flora, trazer uma melhora na qualidade para com os cuidados das áreas verdes da cidade de São
                Paulo.
            </p>
            <h3>Quer saber mais?</h3>
            <button>
                <span>Conheça o projeto</span>
            </button>

        </div>

        <div className="container bg-blue">
            <h1>Projeto</h1>
            <h2>Aspersores</h2>
            <p>Em nosso projeto, utilizamos aspersores que funcioanm apenas quando necessário, ou seja, quando o solo
                precisa ser irrigado. Para que isso fosse possível, colocamos sensores de umidade juntamente aos
                aspersores. Os aspersores então só serão ligados quando o sensor captar que o solo não está úmido o
                suficiente.</p>
            <h2>Caixas Coletoras</h2>
            <p>Utilizamos caixas coletoras para armazenar a água das chuvas de prédios, através dos rufos e calhas. Está
                água seria então reutilizada para a irrigação do solo.</p>
        </div>

        <div className="container">
            <h2>Projeto IBM</h2>
            <p>O projeto passado pela IBM está voltado para o conceito de “Smart Cities”. Nós, como grupo e empresa,
                deveríamos criar uma solução para algum problema dentro das nossas cidades.Pensando na sustentabilidade
                e na tecnologia, para criar uma ideia criativa para o problema do desperdício de água durante a
                manutenção das áreas verdes da cidade de São Paulo.</p>
        </div>

        <div className="container">
            <h2>Problema</h2>
            <p>O problema em que o nosso projeto está focado, é no desperdício de água durante o cuidado e a manutenção
                das áreas verdes de São Paulo, como parques, praças e jardins urbanos.

                Temos como clientes entidades e órgãos públicos que cuidam destas áreas verdes e que se preocupam com o
                meio ambiente, a biodiversidade e com os moradores de São Paulo, como a Secretaria do Meio Ambiente e as
                Prefeituras Regionais.</p>
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