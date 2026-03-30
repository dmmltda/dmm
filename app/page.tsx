import type { Metadata } from "next";
import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";

const COMPANY = {
              name: "DMM Importacao e Exportacao Ltda",
              phoneRaw: "5511966550005",
} as const;

const WHATSAPP_LINK = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
              "Ola, vim pelo site e gostaria de uma consultoria tecnica sobre importacao de carros de luxo."
            )}`;

export const metadata: Metadata = {
              title: "Importacao Premium de Carros de Luxo | DMM",
              description: "Assessoria premium para importacao de veiculos exclusivos with seguranca juridica e operacional.",
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
                              
                                    <Section className="relative overflow-hidden pt-20 pb-32">
                                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                      <div>
                                                                  <span className="badge badge-success mb-6">Case Neymar / Purosangue</span>span>
                                                                  <h1 className="text-display mb-6 tracking-tight">Importacao Premium de Carros de Luxo para o Brasil com discricao e seguranca.</h1>h1>
                                                                  <p className="text-body-lg text-[var(--text-secondary)] mb-10 max-w-xl">
                                                                                A DMM conduz projetos de importacao de alto padrao, atuando desde a analise tecnica rigorosa na origem ate a conformidade absoluta na entrega final.
                                                                  </p>p>
                                                                  <div className="flex flex-col sm:flex-row gap-4">
                                                                                <a href={WHATSAPP_LINK} className="btn btn-primary h-12 px-8">Iniciar Consultoria</a>a>
                                                                                <a href="#case" className="btn btn-secondary h-12 px-8">Ver Case de Sucesso</a>a>
                                                                  </div>div>
                                                      </div>div>
                                                      <div className="relative">
                                                                  <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-2xl border border-white/5 group bg-slate-800">
                                                                                 <div className="aspect-[4/3] relative">
                                                                                                  <video src="/purosangue-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                                                                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-body-dark)]/60 to-transparent" />
                                                                                 </div>div>
                                                                  </div>div>
                                                      </div>div>
                                            </div>div>
                                    </Section>Section>
                              
                                    <Section id="case" className="bg-[var(--bg-base)] rounded-[40px] my-10 mx-4 lg:mx-10 shadow-2xl overflow-hidden border border-white/5">
                                            <div className="flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-16">
                                                      <div className="flex-1">
                                                                  <span className="badge badge-warning mb-6">The Neymar Unit</span>span>
                                                                  <h2 className="text-h1 mb-6 leading-tight">Conducao de ativos de altissima visibilidade</h2>h2>
                                                                  <p className="text-body-lg text-[var(--text-secondary)] mb-8">
                                                                                A importacao da Ferrari Purosangue para o Neymar atesta nossa capacidade tecnica e operacional em lidar with projetos de maxima visibilidade.
                                                                  </p>p>
                                                                  <div className="grid gap-4">
                                                                                <div className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--accent)]"><CheckIcon /> Analise documental avancada</div>div>
                                                                                <div className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--accent)]"><CheckIcon /> Coordenacao logistica blindada</div>div>
                                                                                <div className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--accent)]"><CheckIcon /> Entrega porta-a-porta legalizada</div>div>
                                                                  </div>div>
                                                      </div>div>
                                                      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                   <div className="aspect-[3/4] relative rounded-[var(--radius-lg)] border border-white/5 overflow-hidden shadow-2xl">
                                                                                    <Image src="/purosangue-neymar.jpg" alt="A1" fill className="object-cover" />
                                                                   </div>div>
                                                                   <div className="aspect-[3/4] relative rounded-[var(--radius-lg)] border border-white/5 overflow-hidden shadow-2xl translate-y-8">
                                                                                    <Image src="/purosangue-1.jpg" alt="A2" fill className="object-cover" />
                                                                   </div>div>
                                                      </div>div>
                                            </div>div>
                                    </Section>Section>
                              
                                    <Section id="galeria" className="bg-[var(--bg-body-dark)]">
                                            <div className="mb-16 text-center max-w-3xl mx-auto">
                                                      <h2 className="text-h1 mb-4 leading-tight">Experiencia Real e Tangivel</h2>h2>
                                                      <p className="text-body text-[var(--text-secondary)]">Acompanhe a riqueza de detalhes de um projeto de importacao de alto padrao.</p>p>
                                            </div>div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                                      <div className="grid gap-4 md:gap-6">
                                                                  <div className="aspect-[4/5] relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-2.jpg" alt="G1" fill className="object-cover" /></div>div>
                                                                  <div className="aspect-square relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-3.jpg" alt="G2" fill className="object-cover" /></div>div>
                                                      </div>div>
                                                      <div className="grid gap-4 md:gap-6 pt-12">
                                                                  <div className="aspect-square relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-4.jpg" alt="G3" fill className="object-cover" /></div>div>
                                                                  <div className="aspect-[4/5] relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-5.jpg" alt="G4" fill className="object-cover" /></div>div>
                                                      </div>div>
                                                      <div className="grid gap-4 md:gap-6">
                                                                  <div className="aspect-[3/4] relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-6.jpg" alt="G5" fill className="object-cover" /></div>div>
                                                                  <div className="aspect-[4/3] relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-7.jpg" alt="G6" fill className="object-cover" /></div>div>
                                                      </div>div>
                                                      <div className="grid gap-4 md:gap-6 pt-6">
                                                                  <div className="aspect-video relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-8.jpg" alt="G7" fill className="object-cover" /></div>div>
                                                                  <div className="aspect-[3/4] relative rounded-[var(--radius-md)] overflow-hidden bg-slate-800"><Image src="/purosangue-9.jpg" alt="G8" fill className="object-cover" /></div>div>
                                                      </div>div>
                                            </div>div>
                                    </Section>Section>
                              
                                    <footer className="py-24 border-t border-[var(--bg-elevated)] bg-[var(--bg-body-dark)]">
                                            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
                                                       <div className="text-h2 mb-4 font-black tracking-tighter">DMM IMPORTACAO</div>div>
                                                       <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-black mb-8">Conformidade e Exclusividade</p>p>
                                                       <a href={WHATSAPP_LINK} className="btn btn-primary h-12 px-10">Solicitar Consultoria</a>a>
                                            </div>div>
                                    </footer>footer>
                              </main>main>
                            );
}
</div>
