import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Intersolar from '../components/Intersolar';
import BeneficiosSection from '../components/BeneficiosSection';
import StatsSection from '../components/StatsSection';
import EcosystemSection from '../components/EcosystemSection';
import DepoimentosSection from '../components/DepoimentosSection';
import ParceirosSection from '../components/ParceirosSection';
import ContatoSection from '../components/ContatoSection';
import CeoMessageSection from '../components/CeoMessageSection';

const statsData = [
  {
    value: "R$ 50M+",
    label: "Faturamento Gerado", 
    description: "Volume de negócios movimentado pela rede IBS"
  },
  {
    value: "250+",
    label: "Integradores no País",
    description: "Profissionais qualificados em todo o Brasil"
  },
  {
    value: "15MW+",
    label: "Potência Instalada",
    description: "Energia solar conectada à rede elétrica"
  },
  {
    value: "1.200+", 
    label: "Projetos Concluídos",
    description: "Instalações entregues com excelência"
  },
  {
    value: "85%",
    label: "Satisfação do Cliente",
    description: "Índice de recomendação dos nossos serviços"
  },
  {
    value: "24h",
    label: "Tempo de Resposta", 
    description: "Suporte técnico e comercial rápido"
  }
];

export default function Home() {
  const introDone = true; // Simplificado para sempre true
  
  return (
    <>
      <Head>
        <title>IBS - Instituto Brasileiro de Energia Solar</title>
        <meta
          name="description"
          content="Instituto Brasileiro de energia Solar é ecossistema completo com cooperativas, integradores, financiamento e soluções para impulsionar a energia solar no Brasil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header introDone={introDone} />
      
      <main className="overflow-hidden">
        <HeroSection introDone={introDone} />
        
        <Intersolar />
        
        <BeneficiosSection />
        
        <StatsSection
          id="numeros"
          title="Números que demonstram nosso impacto"
          description="Resultados concretos que comprovam a força do ecossistema IBS em todo o Brasil."
          stats={statsData}
          backgroundClass="section bg-slate-900 text-white pb-0"
        />
        
        <EcosystemSection />
        
        <DepoimentosSection />
        
        <ParceirosSection />
        
        <ContatoSection />
        
        <CeoMessageSection />
      </main>

      <Footer />
    </>
  );
}