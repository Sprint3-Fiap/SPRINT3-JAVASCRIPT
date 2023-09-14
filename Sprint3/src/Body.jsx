import React from 'react';
import './Body.css';


const Body = () => {
  return (
    <div className="body-container">
     <div class="grid text-center bg-blue">
        <div class="g-col-3 g-start-2"> 
        <h1>Bem vindo!</h1>
        <p>Seja bem-vindo ao Projeto Acqua Flora. Nosso projeto é focado na sustentabilidade e no cuidado com as Áreas Verdes da cidade de São Paulo.</p>
        <button>
            <span>Venha conhecer</span>
        </button>
        </div>
        <div class="g-col-4 g-start-6"><img src="./assets/Images/Life in a city-bro 2.png" alt="Pessoas no parque" /></div>
     </div>

      <div className="container">
       <h1>Sobre nós</h1>
       <h2>Quem somos</h2>
        <p>Somos uma empresa preocupada com o Meio Ambiente e com a Biodiversidade, e buscamos através do projeto Acqua Flora, trazer uma melhora na qualidade para com os cuidados das áreas verdes da cidade de São Paulo.
        </p>
        <h3>Quer saber mais?</h3>
        <button>
            <span>Conheça o projeto</span>
        </button>

      </div>

      <div className="container bg-blue">
        <h1>Projeto</h1>
        <h2>Aspersores</h2>
        <p>Em nosso projeto, utilizamos aspersores que funcioanm apenas quando necessário, ou seja, quando o solo precisa ser irrigado. Para que isso fosse possível, colocamos sensores de umidade juntamente aos aspersores. Os aspersores então só serão ligados quando o sensor captar que o solo não está úmido o suficiente.</p>
        <h2>Caixas Coletoras</h2>
        <p>Utilizamos caixas coletoras para armazenar a água das chuvas de prédios, através dos rufos e calhas. Está água seria então reutilizada para a irrigação do solo.</p>
      </div>

      <div className="container">
        <h2>Projeto IBM</h2>
        <p>O projeto passado pela IBM está voltado para o conceito de “Smart Cities”. Nós, como grupo e empresa, deveríamos criar uma solução para algum problema dentro das nossas cidades.Pensando na sustentabilidade e na tecnologia, para criar uma ideia criativa para o problema do desperdício de água durante a manutenção das áreas verdes da cidade de São Paulo.</p>
      </div>

      <div className="container">
        <h2>Seção 5</h2>
        <p>Conteúdo da quinta seção...</p>
      </div>

      <div className="container bg-blue">
        <h2>Contato</h2>
        <p>Entre em contato conosco...</p>
      </div>
    </div>
  );
}

export default Body;
