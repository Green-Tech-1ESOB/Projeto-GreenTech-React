import { useState } from 'react';
import Button from './components/Button';
import { Header } from './components/header';
import Input from './components/input';
import Span from './components/Span';
import { Paragraph, Subtitle } from './components/TextComponents';
import styles from "./css/Servicos.module.css";

const API_KEY = "d8b3c683cfdca7cec9e268f64a13b9f2";

export function Servicos() {
  const [climaData, setClimaData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [hectares, setHectares] = useState('');
  const [erroHectares, setErroHectares] = useState('');
  const [plantacao, setPlantacao] = useState('');
  const [erroPlantacao, setErroPlantacao] = useState('');
  const [fazenda, setFazenda] = useState('');
  const [erroFazenda, setErroFazenda] = useState('');
  const [dataPlantio, setDataPlantio] = useState('');
  const [erroDataPlantio, setErroDataPlantio] = useState('');
  const [estado, setEstado] = useState('');
  const [erroEstado, setErroEstado] = useState('');
  const [formStatus, setFormStatus] = useState(null);

  const gerarAlertaAgricola = (temp, umidade, vento, condicaoPrincipal) => {
    if (vento > 20) return "Vento muito forte. Evite pulverização de defensivos hoje para evitar deriva.";
    if (condicaoPrincipal === 'Rain' || condicaoPrincipal === 'Drizzle' || condicaoPrincipal === 'Thunderstorm') return "Chuva detectada. Adie a colheita e a irrigação programada.";
    if (temp > 32 && umidade < 40) return "Alerta de estresse térmico. Aumente a frequência de irrigação se possível.";
    if (temp < 5) return "Risco de geada. Proteja mudas sensíveis e evite o plantio hoje.";
    return "Condições favoráveis para manejo, plantio e monitoramento de pragas.";
  };

  const fetchClima = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha ao buscar dados');
      
      const data = await response.json();

      const processedData = {
        cidade: data.name,
        temp: Math.round(data.main.temp),
        descricao: data.weather[0].description,
        umidade: data.main.humidity,
        vento: data.wind.speed,
        icone: data.weather[0].icon,
        alerta: gerarAlertaAgricola(data.main.temp, data.main.humidity, data.wind.speed, data.weather[0].main)
      };

      setClimaData(processedData);
      setStatus('success');

    } catch (_err) {
      setStatus('error');
      setErrorMsg('Erro ao conectar com o serviço de clima.');
    }
  };

  const getLocation = () => {
    setStatus('loading');
    if (!navigator.geolocation) {
      setStatus('error');
      setErrorMsg('Geolocalização não suportada.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchClima(latitude, longitude);
      },
      
      (_error) => {
        setStatus('error');
        setErrorMsg('Permissão de localização negada.');
      }
    );
  };

  const validarCampo = (valor, setErro, nomeCampo) => {
    if (nomeCampo === 'estado' && valor.length !== 2) {
      setErro("Selecione um estado válido.");
      return false;
    }
    if (valor.trim() === '' || (['hectares', 'fazenda'].includes(nomeCampo) && parseFloat(valor) <= 0)) {
        setErro(`O campo ${nomeCampo} é obrigatório.`);
        return false;
    }
    setErro('');
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const v1 = validarCampo(hectares, setErroHectares, 'hectares');
    const v2 = validarCampo(plantacao, setErroPlantacao, 'plantação');
    const v3 = validarCampo(fazenda, setErroFazenda, 'tamanho da fazenda');
    const v4 = validarCampo(dataPlantio, setErroDataPlantio, 'data');
    const v5 = validarCampo(estado, setErroEstado, 'estado');
    
    if (v1 && v2 && v3 && v4 && v5) {
      setFormStatus('success');
      console.log('Dados do Planejamento enviados:', { hectares, plantacao, fazenda, estado, dataPlantio });

      setTimeout(() => {
        setHectares('');
        setPlantacao('');
        setFazenda('');
        setDataPlantio('');
        setEstado('');
        setFormStatus(null);
      }, 3000);
      
    } else {
      setFormStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        <section className={styles.weather_section}>
          <div className={styles.weather_header}>
            <h2>Monitoramento Climático</h2>
            <Paragraph>Consulte as condições atuais da sua lavoura para tomar decisões precisas.</Paragraph>
            
            <button 
              type="button" 
              className={styles.btn_location} 
              onClick={getLocation}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Buscando satélite...' : ' Obter Clima Local'}
            </button>
          </div>

          {status === 'error' && (
            <div className={styles.error_card}>
              <p> {errorMsg}</p>
            </div>
          )}

          {status === 'success' && climaData && (
            <div className={styles.weather_card}>
              <div className={styles.card_top}>
                <div>
                  <h3>{climaData.cidade}</h3>
                  <span className={styles.temp}>{climaData.temp}°C</span>
                  <p className={styles.desc}>{climaData.descricao}</p>
                </div>
                <img 
                  src={`https://openweathermap.org/img/wn/${climaData.icone}@2x.png`} 
                  alt={climaData.descricao} 
                />
              </div>

              <div className={styles.card_grid}>
                <div className={styles.grid_item}>
                  <span> Umidade</span>
                  <strong>{climaData.umidade}%</strong>
                </div>
                <div className={styles.grid_item}>
                  <span> Vento</span>
                  <strong>{climaData.vento} km/h</strong>
                </div>
              </div>

              <div className={styles.agro_alert}>
                <strong> Recomendação Técnica:</strong>
                <p>{climaData.alerta}</p>
              </div>
            </div>
          )}
        </section>

        <section className={styles.form_container}>
          <div className={styles.description}>
            <Subtitle>Planejamento de Safra</Subtitle>
            <Paragraph>Nos dê informações sobre o seu campo que a nossa IA irá te guiar</Paragraph>
          </div>

          {formStatus === 'success' && (
              <div className={styles.success_message}>
                   Dados enviados com sucesso! Em breve você receberá seu plano de safra.
              </div>
          )}
          {formStatus === 'error' && (
              <div className={styles.error_message_form}>
                   Por favor, corrija os campos destacados.
              </div>
          )}

          <form className={styles.form} id="service-form" onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <Input 
                  type="number" 
                  id="hectares" 
                  name="hectares" 
                  required 
                  label="Quantidade de hectares (Área)"
                  value={hectares}
                  onChange={(e) => setHectares(e.target.value)}
                  onBlur={() => validarCampo(hectares, setErroHectares, 'hectares')}
              />
              <Span className="error-message">{erroHectares}</Span>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="estado">Onde está localizado (Estado)</label>
              <select 
                  name="state" 
                  id="estado"
                  className={styles.select_estado} 
                  required
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  onBlur={() => validarCampo(estado, setErroEstado, 'estado')}
              >
                  <option value="">Selecione um Estado</option>
                  <option value="SP">São Paulo (SP)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="PR">Paraná (PR)</option>
                  <option value="GO">Goiás (GO)</option>
                  <option value="MT">Mato Grosso (MT)</option>
                  <option value="BA">Bahia (BA)</option>
              </select>
              <Span className="error-message">{erroEstado}</Span>
            </div>

            <div className={styles.form_group}>
              <Input 
                  type="text" 
                  id="tipo-plantacao" 
                  name="tipo-plantacao" 
                  required 
                  label="Qual é o tipo de plantação (Cultura)"
                  value={plantacao}
                  onChange={(e) => setPlantacao(e.target.value)}
                  onBlur={() => validarCampo(plantacao, setErroPlantacao, 'plantação')}
              />
              <Span className="error-message">{erroPlantacao}</Span>
            </div>

            <div className={styles.form_group}>
              <Input 
                  type="text" 
                  id="tamanho-fazenda" 
                  name="tamanho-fazenda" 
                  required 
                  label="Nome da Propriedade (Fazenda)"
                  value={fazenda}
                  onChange={(e) => setFazenda(e.target.value)}
                  onBlur={() => validarCampo(fazenda, setErroFazenda, 'tamanho da fazenda')}
              />
              <Span className="error-message">{erroFazenda}</Span>
            </div>

            <div className={styles.form_group}>
              <Input 
                  type="date" 
                  name="data" 
                  id="data" 
                  label="Data prevista para o Plantio"
                  value={dataPlantio}
                  onChange={(e) => setDataPlantio(e.target.value)}
                  onBlur={() => validarCampo(dataPlantio, setErroDataPlantio, 'data')}
              />
              <Span className="error-message">{erroDataPlantio}</Span>
            </div>

            <Button type="submit">Gerar Plano de Safra</Button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Servicos;