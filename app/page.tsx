import type { Metadata } from "next";
import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";

const SITE_URL = "https://dmmtrading.com.br";
const PAGE_PATH = "/importacao-de-carros-de-luxo";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const COMPANY = {
    name: "DMM Importacao e Exportacao Ltda",
    brand: "DMM Importacao e Exportacao",
    phoneDisplay: "+55 11 96655-0005",
    phoneRaw: "5511966550005",
    email: "contato@dmmtrading.com.br",
} as const;

const WHATSAPP_LINK = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
    "Ola, vim pelo site e gostaria de uma consultoria tecnica sobre importacao de carros de luxo."
  )}`;

const content = {
    seoTitle: "Importacao Premium de Carros de Luxo para o Brasil | DMM",
    seoDescription: "Importacao premium de carros de luxo para o Brasil com analise de viabilidade, coordenacao internacional e entrega legalizada.",
    heroEyebrow: "Exclusividade e Seguranca Juridica",
    heroTitle: "Importacao Premium de Carros de Luxo para o Brasil com discricao e seguranca.",
    heroDescription: "A DMM conduz projetos de importacao de alto padrao, atuando desde a analise tecnica rigorosa na origem ate a conformidade absoluta na entrega final no seu endereco.",
} as const;

export const metadata: Metadata = {
    title: content.seoTitle,
    description: content.seoDescription,
};

function Section({ children, className = "", id = "" }: PropsWithChildren<{ className?: string; id?: string }>) {
    return (
          <section id={id} className={`py-16 md:py-24 ${className}`}>
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {children}
                  </div>div>
          </section>section>
        );
}

function Card({ title, text, icon }: { title: string; text: string; icon?: ReactNode }) {
    return (
          <div className="kpi-card group hover:scale-[1.02] transition-transform duration-200">
            {icon && <div className="text-[var(--accent)] mb-4">{icon}</div>div>}
                <h3 className="text-h3 text-[var(--text-primary)]">{title}</h3>h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{text}</p>p>
          </div>div>
        );
}

function CheckIcon() {
    return (
          <svg className="w-5 h-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>svg>
        );
}

export default function Page() {
    return (
          <main className="min-h-screen">
            {/* Header */}
                <header className="sticky top-0 z-50 bg-[var(--bg-body-dark)]/80 backdrop-blur-md border-b border-[var(--bg-elevated)]">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                              <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center font-bold text-slate-900 shadow-lg">DMM</div>div>
                                              <span className="text-sm font-bold tracking-tight hidden sm:block uppercase">DMM IMPORTACAO</span>span>
                                  </div>div>
                                  <nav className="hidden md:flex items-center gap-8">
                                              <a href="#case" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Case Real</a>a>
                                              <a href="#diferenciais" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Diferenciais</a>a>
                                              <a href="#processo" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Processo</a>a>
                                              <a href="#faq" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">FAQ</a>a>
                                  </nav>nav>
                                  <a href={WHATSAPP_LINK} className="btn btn-primary h-10 px-6">Consultoria</a>a>
                        </div>div>
                </header>header>
          
            {/* Hero Section */}
                <Section className="relative overflow-hidden pt-20 pb-32">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
                                   <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent)] blur-[120px] rounded-full" />
                        </div>div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                  <div>
                                              <span className="badge badge-success mb-6">Case Neymar / Purosangue inclusivo</span>span>
                                              <h1 className="text-display mb-6 tracking-tight">{content.heroTitle}</h1>h1>
                                              <p className="text-body-lg text-[var(--text-secondary)] mb-10 max-w-xl">
                                                {content.heroDescription}
                                              </p>p>
                                              <div className="flex flex-col sm:flex-row gap-4">
                                                            <a href={WHATSAPP_LINK} className="btn btn-primary h-12 px-8">Iniciar Consultoria</a>a>
                                                            <a href="#case" className="btn btn-secondary h-12 px-8">Ver Case de Sucesso</a>a>
                                              </div>div>
                                              
                                              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--bg-elevated)] pt-8">
                                                            <div>
                                                                            <p className="text-h2 text-[var(--text-primary)] tracking-tight">+20 Anos</p>p>
                                                                            <p className="text-sm text-[var(--text-muted)]">Comercio Exterior</p>p>
                                                            </div>div>
                                                            <div>
                                                                            <p className="text-h2 text-[var(--text-primary)] tracking-tight">100%</p>p>
                                                                            <p className="text-sm text-[var(--text-muted)]">Entrega Legalizada</p>p>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                                  
                                  <div className="relative">
                                              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-2xl border border-white/5 group bg-slate-800">
                                                             <div className="aspect-[4/3] relative">
                                                                              <video 
                                                                                                   src="/purosangue-video.mp4" 
                                                                                autoPlay 
                                                                                                   muted 
                                                                                                   loop 
                                                                                                   playsInline 
                                                                                                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                                                 />
                                                                              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-body-dark)]/60 to-transparent" />
                                                             </div>div>
                                              </div>div>
                                    {/* Float Badge */}
                                              <div className="absolute -bottom-6 -left-6 bg-[var(--bg-base)] p-5 rounded-[var(--radius-lg)] border border-[var(--bg-elevated)] shadow-2xl flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                                                            <CheckIcon />
                                                            </div>div>
                                                            <div>
                                                                            <p className="text-sm font-bold">Processo Seguro</p>p>
                                                                            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tighter">Conformidade Absoluta</p>p>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </Section>Section>
          
            {/* Case Section -- Neymar/Ferrari */}
                <Section id="case" className="bg-[var(--bg-base)] rounded-[40px] my-10 mx-4 lg:mx-10 shadow-2xl overflow-hidden border border-white/5">
                        <div className="flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-16">
                                  <div className="flex-1">
                                              <span className="badge badge-warning mb-6">The Neymar Unit</span>span>
                                              <h2 className="text-h1 mb-6">Conducao de ativos de altissima visibilidade</h2>h2>
                                              <p className="text-body-lg text-[var(--text-secondary)] mb-8">
                                                            A importacao da <strong>Ferrari Purosangue</strong>strong> para o Neymar atesta nossa capacidade tecnica e operacional em lidar com projetos que exigem maxima discricao, agilidade logistica e conformidade juridica impecavel.
                                              </p>p>
                                              <div className="grid gap-4">
                                                            <div className="flex items-center gap-3 text-sm font-semibold">
                                                                            <CheckIcon /> Analise documental avancada na origem
                                                            </div>div>
                                                            <div className="flex items-center gap-3 text-sm font-semibold">
                                                                            <CheckIcon /> Coordenacao logistica internacional blindada
                                                            </div>div>
                                                            <div className="flex items-center gap-3 text-sm font-semibold">
                                                                            <CheckIcon /> Entrega porta-a-porta com conformidade total
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                                  <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                               <div className="aspect-[3/4] relative rounded-[var(--radius-lg)] border border-white/5 overflow-hidden shadow-2xl">
                                                                <Image 
                                                                                     src="/purosangue-neymar.jpg" 
                                                                  alt="Detalhe Ferrari Purosangue Neymar"
                                                                                     fill
                                                                                     className="object-cover"
                                                                                   />
                                               </div>div>
                                               <div className="aspect-[3/4] relative rounded-[var(--radius-lg)] border border-white/5 overflow-hidden shadow-2xl translate-y-8">
                                                                <Image 
                                                                                     src="/purosangue-1.jpg" 
                                                                  alt="Ferrari Purosangue Entregue"
                                                                                     fill
                                                                                     className="object-cover"
                                                                                   />
                                               </div>div>
                                  </div>div>
                        </div>div>
                </Section>Section>
          
            {/* Grid Gallery - Distribution Nota 10 */}
                <Section id="galeria" className="bg-[var(--bg-body-dark)]">
                        <div className="mb-16 text-center max-w-3xl mx-auto">
                                  <span className="text-micro text-[var(--accent)] mb-4 block">Visualizacao Premium</span>span>
                                  <h2 className="text-h1 mb-4 leading-tight">Experiencia Real e Tangivel</h2>h2>
                                  <p className="text-body text-[var(--text-secondary)]">
                                              Acompanhe a riqueza de detalhes de um projeto de importacao conduzido com excelencia tecnica.
                                  </p>p>
                        </div>div>
                
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                  <div className="grid gap-4 md:gap-6">
                                              <div className="aspect-[4/5] relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-2.jpg" alt="Purosangue Detail 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                              <div className="aspect-square relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-3.jpg" alt="Purosangue Detail 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                  </div>div>
                                  <div className="grid gap-4 md:gap-6 pt-8 md:pt-12">
                                              <div className="aspect-square relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-4.jpg" alt="Purosangue Detail 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                              <div className="aspect-[4/5] relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-5.jpg" alt="Purosangue Detail 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                  </div>div>
                                  <div className="grid gap-4 md:gap-6">
                                              <div className="aspect-[3/4] relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-6.jpg" alt="Purosangue Detail 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                              <div className="aspect-[4/3] relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-7.jpg" alt="Purosangue Detail 6" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                  </div>div>
                                  <div className="grid gap-4 md:gap-6 pt-4 md:pt-6">
                                              <div className="aspect-video relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-8.jpg" alt="Purosangue Detail 7" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                              <div className="aspect-[3/4] relative rounded-[var(--radius-md)] overflow-hidden border border-white/5 shadow-lg group">
                                                            <Image src="/purosangue-9.jpg" alt="Purosangue Detail 8" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                              </div>div>
                                  </div>div>
                        </div>div>
                </Section>Section>
          
            {/* Diferenciais */}
                <Section id="diferenciais">
                        <div className="mb-16 text-center max-w-3xl mx-auto">
                                  <h2 className="text-h1 mb-4 leading-tight">Por que escolher a consultoria da DMM?</h2>h2>
                                  <p className="text-body text-[var(--text-secondary)]">
                                              A DMM nao e uma loja de repasse. Somos consultores de comercio exterior especializados no mercado automotivo premium.
                                  </p>p>
                        </div>div>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                                  <Card 
                                                title="Seguranca Pre-Compra" 
                                    text="Validamos a procedencia e historico do veiculo antes de voce efetuar qualquer pagamento ao exterior."
                                              />
                                  <Card 
                                                title="Estimativa de Custos" 
                                    text="Planilha de custos detalhada onde o valor orcado se torna o valor final, sem taxas ocultas ou surpresas."
                                              />
                                  <Card 
                                                title="Relatorio Tecnico" 
                                    text="Avaliacao fisica completa do ativo na origem para garantir que o que voce comprou e o que vai chegar."
                                              />
                                  <Card 
                                                title="Consultoria Fiscal" 
                                    text="Planejamento de custos reais e conformidade com tributos brasileiros para evitar surpresas."
                                              />
                                  <Card 
                                                title="Logistica Custom" 
                                    text="Transporte exclusivo para veiculos de luxo, monitorado em tempo real por nossa equipe."
                                              />
                        </div>div>
                </Section>Section>
          
            {/* Processo Section */}
                <Section id="processo" className="bg-[var(--bg-body-dark)]">
                        <div className="mb-16 text-center">
                                  <span className="text-micro text-[var(--accent)] mb-4 block">Fluxo de Trabalho</span>span>
                                  <h2 className="text-h1 mb-4">Como funciona a nossa importacao</h2>h2>
                                  <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
                                              Transformamos um processo de alta complexidade em uma jornada clara, organizada e previsivel.
                                  </p>p>
                        </div>div>
                
                        <div className="grid md:grid-cols-4 gap-8">
                          {[
            { step: "01", title: "Briefing", text: "Definicao do modelo, origem e orcamento disponivel.", img: "/purosangue-10.jpg" },
            { step: "02", title: "Validacao", text: "Busca e analise completa do veiculo e procedencia.", img: "/purosangue-11.jpg" },
            { step: "03", title: "Importacao", text: "Coordenacao dos processos aduaneiros e logisticos.", img: "/purosangue-12.jpg" },
            { step: "04", title: "Entrega", text: "O veiculo legalizado em suas maos com documentacao final.", img: "/purosangue-neymar.jpg" },
                      ].map((item) => (
                                    <div key={item.step} className="group relative rounded-[var(--radius-lg)] border border-[var(--bg-elevated)] bg-[var(--bg-surface)]/20 overflow-hidden">
                                                   <div className="aspect-video relative overflow-hidden">
                                                                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                                    <div className="absolute inset-0 bg-[var(--bg-body-dark)]/40" />
                                                                    <div className="text-4xl text-white opacity-40 absolute top-4 right-6 font-black">{item.step}</div>div>
                                                   </div>div>
                                                   <div className="p-7">
                                                                    <h3 className="text-h3 mb-3 relative z-10">{item.title}</h3>h3>
                                                                    <p className="text-sm text-[var(--text-secondary)] relative z-10 leading-relaxed">{item.text}</p>p>
                                                   </div>div>
                                    </div>div>
                                  ))}
                        </div>div>
                </Section>Section>
          
            {/* FAQ Section */}
                <Section id="faq" className="bg-[var(--bg-base)]">
                        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
                                  <div>
                                              <h2 className="text-h1 mb-6 leading-tight">Duvidas frequentes do setor</h2>h2>
                                              <p className="text-body text-[var(--text-secondary)] mb-8">
                                                            Aqui estao as respostas para as principais questoes que nossos clientes costumam ter.
                                              </p>p>
                                              <a href={WHATSAPP_LINK} className="btn btn-secondary h-12 px-8">Falar no WhatsApp</a>a>
                                  </div>div>
                                  <div className="space-y-4">
                                    {[
            { q: "Qual o prazo medio de entrega?", a: "Geralmente entre 90 a 120 dias, dependendo da documentacao do pais de origem e processos logisticos." },
            { q: "E possivel importar carro seminovo?", a: "Sim, porem existem regras especificas de ano e modelo que avaliamos na etapa de viabilidade." },
            { q: "Quais tributos sao pagos?", a: "Cuidamos de toda a planilha de custos, incluindo II, IPI, PIS/COFINS e ICMS de acordo com a NCM do veiculo." },
            { q: "Como funciona a seguranca do pagamento?", a: "A assessoria garante que a transacao internacional seja feita diretamente ao exportador/fornecedor validado." },
                        ].map((faq, i) => (
                                        <details key={i} className="group rounded-[var(--radius-md)] border border-[var(--bg-elevated)] bg-[var(--bg-surface)]/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                                                        <summary className="flex items-center justify-between gap-4 text-lg font-semibold list-none">
                                                          {faq.q}
                                                                          <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-180">
                                                                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                                                </svg>svg>
                                                                          </span>span>
                                                        </summary>summary>
                                                        <p className="mt-4 text-sm text-[var(--text-secondary)] border-t border-[var(--bg-elevated)] pt-4 leading-relaxed">{faq.a}</p>p>
                                        </details>details>
                                      ))}
                                  </div>div>
                        </div>div>
                </Section>Section>
          
            {/* Footer */}
                <footer className="py-24 border-t border-[var(--bg-elevated)] bg-[var(--bg-body-dark)]">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                  <div className="grid md:grid-cols-2 gap-12 items-start">
                                              <div>
                                                             <div className="text-h2 mb-6 font-black tracking-tighter">DMM <span className="text-[var(--accent)]">IMPORTACAO</span>span></div>div>
                                                             <p className="text-sm text-[var(--text-secondary)] max-w-xs mb-8 leading-relaxed">
                                                                              Desde 2004 conectando entusiastas e investidores aos melhores ativos automotivos do mundo com exclusividade.
                                                             </p>p>
                                                             <div className="flex gap-4">
                                                                              <a href={WHATSAPP_LINK} className="btn btn-primary h-12 px-10">Solicitar Consultoria</a>a>
                                                             </div>div>
                                              </div>div>
                                              <div className="md:text-right flex flex-col justify-end">
                                                             <div className="space-y-2 mb-8">
                                                                              <p className="text-sm font-semibold">{COMPANY.name}</p>p>
                                                                              <p className="text-sm text-[var(--text-muted)]">Rua Doutor Pedro Ferreira, N 155 - SC</p>p>
                                                             </div>div>
                                                             <p className="text-xs text-[var(--text-muted)]">(c) 2026 Gravity Ecosystem | Todos os direitos reservados.</p>p>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </footer>footer>
          </main>main>
        );
}
</div>
