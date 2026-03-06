
"use client";
import React, { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"rx" | "elite" | null>(null);

  const handleSelectPlan = (plan: "rx" | "elite") => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">💪 Treinos do EMA</div>
            <ul className="nav-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transforme Seu Treino de CrossFit</h1>
            <p>Planilhas profissionais e personalizadas para atingir seus objetivos</p>
            <br></br>
            <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
              <a href="#planos" className="btn btn-primary">Escolher Plano</a>
              <a href="#sobre" className="btn btn-secondary">Saiba Mais</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">📋</div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <div className="container">
          <h2>Por que escolher os treinos do EMA?</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Planilhas Profissionais</h3>
              <p>Monitoradas e ajustadas por especialistas em CrossFit</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Objetivos Claros</h3>
              <p>Treinos alinhados com suas metas pessoais</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progressão Garantida</h3>
              <p>Acompanhamento de resultados e evolução contínua</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Suporte Dedicado</h3>
              <p>Orientação durante toda sua jornada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="planos">
        <div className="container">
          <h2>Nossos Planos</h2>
          <p className="section-desc">Escolha o plano que melhor se encaixa no seu estilo de vida</p>
          <div className="pricing-container">
            {/* Plano RX */}
            <div className="pricing-card">
              <div className="plan-header">
                <h3>RX</h3>
                <p className="plan-badge">Para Iniciantes</p>
              </div>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">97</span>
                <span className="period">/mês</span>
              </div>
              <div className="plan-description">
                <p>Treinos otimizados para menos tempo, mais eficiência</p>
              </div>
              <ul className="features-list">
                <li>✓ 3 treinos por semana</li>
                <li>✓ 30-45 minutos por sessão</li>
                <li>✓ Planilha em Excel/Google Sheets</li>
                <li>✓ Suporte por email</li>
                <li>✓ Ajustes mensais</li>
                <li>✗ Atendimento prioritário</li>
                <li>✗ Consultoria personalizada</li>
              </ul>
              <button className="btn btn-primary btn-block" onClick={() => handleSelectPlan("rx")}>Escolher Plano RX</button>
            </div>
            {/* Plano Elite */}
            <div className="pricing-card featured">
              <div className="plan-header">
                <h3>Elite</h3>
                <p className="plan-badge featured-badge">Mais Popular ⭐</p>
              </div>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">197</span>
                <span className="period">/mês</span>
              </div>
              <div className="plan-description">
                <p>Treinos completos com progressão avançada</p>
              </div>
              <ul className="features-list">
                <li>✓ 5-6 treinos por semana</li>
                <li>✓ 60-90 minutos por sessão</li>
                <li>✓ Planilha em Excel/Google Sheets</li>
                <li>✓ Suporte por email e WhatsApp</li>
                <li>✓ Ajustes semanais</li>
                <li>✓ Atendimento prioritário</li>
                <li>✓ Consultoria personalizada mensal</li>
              </ul>
              <button className="btn btn-primary btn-block" onClick={() => handleSelectPlan("elite")}>Escolher Plano Elite</button>
            </div>
          </div>
          {/* Comparison Table */}
          <div className="comparison-section">
            <h3>Comparação Detalhada</h3>
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Características</th>
                    <th>RX</th>
                    <th>Elite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Treinos por semana</td>
                    <td>3</td>
                    <td>5-6</td>
                  </tr>
                  <tr>
                    <td>Duração por sessão</td>
                    <td>30-45 min</td>
                    <td>60-90 min</td>
                  </tr>
                  <tr>
                    <td>Tipo de treino</td>
                    <td>Funcional</td>
                    <td>Especializado</td>
                  </tr>
                  <tr>
                    <td>Atualizações</td>
                    <td>Mensais</td>
                    <td>Semanais</td>
                  </tr>
                  <tr>
                    <td>Canais de suporte</td>
                    <td>Email</td>
                    <td>Email + WhatsApp</td>
                  </tr>
                  <tr>
                    <td>Consultoria</td>
                    <td>-</td>
                    <td>Sim (mensal)</td>
                  </tr>
                  <tr>
                    <td>Preço mensal</td>
                    <td className="price-highlight">R$ 97</td>
                    <td className="price-highlight">R$ 197</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Comece sua Jornada Hoje</h2>
          <p>Não perca mais tempo. Escolha seu plano e transforme seus treinos</p>
          <a href="#planos" className="btn btn-primary btn-large">Ver Planos</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:contato@montatreinos.com">contato@montatreinos.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/5511999999999" target="_blank">(11) 9 9999-9999</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={e => {e.preventDefault(); alert('Obrigado pela mensagem! Entraremos em contato em breve.'); e.currentTarget.reset();}}>
              <input type="text" placeholder="Seu nome" name="name" required />
              <input type="email" placeholder="Seu email" name="email" required />
              <textarea placeholder="Sua mensagem" name="message" rows={5} required />
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Treinos do EMA. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Serviço</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </footer>

      {/* Modal de seleção de plano */}
      {modalOpen && (
        <div className="modal" style={{display: 'block'}} onClick={e => {if (e.target === e.currentTarget) closeModal();}}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Próximo Passo</h2>
            <p id="planModalText">
              {selectedPlan === "rx" && (
                <>Você selecionou o Plano RX (R$ 97/mês).<br /><br />Clique no botão abaixo para conversar conosco via WhatsApp e finalizar sua assinatura.</>
              )}
              {selectedPlan === "elite" && (
                <>Você selecionou o Plano Elite (R$ 197/mês).<br /><br />Clique no botão abaixo para conversar conosco via WhatsApp e finalizar sua assinatura.</>
              )}
            </p>
            <div className="modal-buttons">
              <a href="https://wa.me/5511999999999" className="btn btn-primary" target="_blank">Falar no WhatsApp</a>
              <button className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );  
}
