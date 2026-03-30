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
            description: "Assessoria premium para importacao de veiculos exclusivos com seguranca juridica e operacional.",
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
                          <div className="kpi-card group hover:scale-[1.02] transition-transform duration-200 p-8 rounded-2xl bg-white/5 border border-white/10 shadow-xl">
                                    {icon && <div className="text-[var(--accent)] mb-4">{icon}</div>div>}
                                <h3 className="text-xl font-bold text-white">{title}</h3>h3>
                                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{text}</p>p>
                          </div>div>
                        );
}
function CheckIcon() {
            return (
                          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>svg>
                        );
}

export default function Page() {
            return (
                          <main className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
                                    {/* Header */}
                                <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">
                                                  <div className="flex items-center gap-3">
                                                              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">DMM</div>div>
                                                              <span className="text-sm font-bold tracking-tight hidden sm:block uppercase">DMM IMPORTACAO</span>span>
                                                  </div>div>
                                                  <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                                                              <a href="#case" className="hover:text-white transition-colors">Case Real</a>a>
                                                              <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>a>
                                                              <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>a>
                                                              <a href="#processo" className="hover:text-white transition-colors">Processo</a>a>
                                                  </nav>nav>
                                                  <a href={WHATSAPP_LINK} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20">Consultoria</a>a>
                                        </div>div>
                                </header>header>
                                    {/* Hero Section */}
                                <Section className="relative overflow-hidden pt-12 pb-24">
                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                  <div>
                                                              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-6">Case Neymar / Purosangue</span>span>
                                                              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">Importacao Premium de Carros de Luxo.</h1>h1>
                                                              <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                                                                            A DMM conduz projetos de importacao de alto padrao, atuando desde a analise tecnica rigorosa na origem ate a entrega final com conformidade absoluta.
                                                              </p>p>
                                                              <div className="flex flex-col sm:flex-row gap-4">
                                                                            <a href={WHATSAPP_LINK} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all text-center shadow-lg shadow-indigo-500/20">Iniciar Consultoria</a>a>
                                                                            <a href="#case" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all text-center">Ver Case de Sucesso</a>a>
                                                              </div>div>
                                                  </div>div>
                                                  <div className="relative group">
                                                              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800 shadow-indigo-500/10">
                                                                             <div className="aspect-[4/3] relative">
                                                                                              <video src="https://vjs.zencdn.net/v/oceans.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                                                                              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
                                                                             </div>div>
                                                              </div>div>
                                                              <div className="absolute -bottom-6 -left-6 bg-[#0f172a] p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4">
                                                                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                                                                            <CheckIcon />
                                                                            </div>div>
                                                                            <div>
                                                                                            <p className="text-sm font-bold">Processo Seguro</p>p>
                                                                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Conformidade Total</p>p>
                                                                            </div>div>
                                                              </div>div>
                                                  </div>div>
                                        </div>div>
                                </Section>Section>
                                    {/* Case Section */}
                                <Section id="case" className="bg-slate-900/50 rounded-[3rem] my-10 mx-4 lg:mx-8 shadow-2xl overflow-hidden border border-white/5">
                                        <div className="flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-16">
                                                  <div className="flex-1">
                                                              <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20 mb-6">Visibilidade Maxima</span>span>
                                                              <h2 className="text-4xl font-black mb-6 leading-tight">Conducao de ativos de altissima visibilidade</h2>h2>
                                                              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                                                            A importacao da Ferrari Purosangue para o Neymar atesta nossa capacidade tecnica e operacional em lidar com projetos que exigem maxima discricao.
                                                              </p>p>
                                                              <div className="grid gap-4">
                                                                            <div className="flex items-center gap-3 text-sm font-semibold"><CheckIcon /> Analise documental avancada</div>div>
                                                                            <div className="flex items-center gap-3 text-sm font-semibold"><CheckIcon /> Coordenacao logistica blindada</div>div>
                                                                            <div className="flex items-center gap-3 text-sm font-semibold"><CheckIcon /> Entrega porta-a-porta legalizada</div>div>
                                                              </div>div>
                                                  </div>div>
                                                  <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                                              <div className="aspect-[3/4] relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                                                              <Image src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=600" alt="Ferrari" fill className="object-cover" />
                                                              </div>div>
                                                              <div className="aspect-[3/4] relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl translate-y-8">
                                                                              <Image src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600" alt="Supercar" fill className="object-cover" />
                                                              </div>div>
                                                  </div>div>
                                        </div>div>
                                </Section>Section>
                                    {/* Diferenciais */}
                                <Section id="diferenciais">
                                        <div className="mb-16 text-center max-w-3xl mx-auto">
                                                  <h2 className="text-4xl font-black mb-4">Por que a DMM?</h2>h2>
                                                  <p className="text-slate-400">Consultoria especializada em ativos de luxo e comercio exterior.</p>p>
                                        </div>div>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                  <Card title="Seguranca Pre-Compra" text="Validamos a procedencia e historico do veiculo antes de qualquer pagamento." icon={<CheckIcon />} />
                                                  <Card title="Estimativa de Custos" text="Planilha detalhada sem taxas ocultas ou surpresas tributarias." icon={<CheckIcon />} />
                                                  <Card title="Logistica Custom" text="Transporte exclusivo monitorado em tempo real por nossa equipe tecnica." icon={<CheckIcon />} />
                                        </div>div>
                                </Section>Section>
                          
                                    {/* Footer */}
                                <footer className="py-20 border-t border-white/10 bg-[#020617]">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                                                   <div className="text-2xl font-black tracking-tighter">DMM <span className="text-indigo-500">IMPORTACAO</span>span></div>div>
                                                   <p className="text-sm text-slate-500">(c) 2026 DMM Luxury Cars | Todos os direitos reservados.</p>p>
                                                   <a href={WHATSAPP_LINK} className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">WhatsApp Suporte</a>a>
                                        </div>div>
                                </footer>footer>
                          </main>main>
                        );
}
</div>
