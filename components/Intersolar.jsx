import { motion } from "framer-motion";
import Image from "next/image";

export default function Intersolar() {
    return (
        <section id="inter" className="section">
            <div className="mx-auto max-w-7xl text-center">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-eyebrow text-brand-primary"
                >
                    Sobre nós
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="section-subtitle"
                >
                    Entenda um pouco mais do que é a IBS
                </motion.p>

                {/* Grid de 3 cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {/* Card 1 - Vídeo do YouTube */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            {/* Vídeo do YouTube */}
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/RCtBdkR1Hag"
                                title="IBS no Intersolar South America"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Como a IBS gera tantos resultados?
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Coompreenda completamente nossa atuação no mercado de energia solar
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 - Foto da equipe */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            {/* Foto da equipe IBS */}
                            <Image
                                src="/equipeibs.png"
                                alt="Equipe IBS"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            
                            {/* Overlay gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            
                            {/* Texto sobreposto */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-lg font-bold mb-1">Nossa Equipe</h3>
                                <p className="text-sm opacity-90">Especialistas dedicados ao seu sucesso</p>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Equipe IBS
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nossa equipe é formada por profissionais altamente qualificados e apaixonados por energia solar. Trabalhamos juntos para oferecer as melhores soluções e suporte técnico especializado para nossos integradores em todo o Brasil.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 - Estilo com estatística */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden p-6 flex flex-col justify-center">
                            {/* Mapa do Brasil estilizado */}
                            <div className="absolute top-4 right-4">
                                <div className="w-16 h-20 opacity-20">
                                    <svg viewBox="0 0 100 120" className="w-full h-full fill-current">
                                        <path d="M20,20 L80,20 L85,40 L80,80 L70,100 L30,100 L15,80 L15,40 Z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative z-10">
                                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    350+
                                </div>
                                <p className="text-sm text-gray-300 mb-2">
                                    Somos mais de<br />
                                    <span className="text-white font-semibold">350 credenciados</span><br />
                                    pelo Brasil
                                </p>
                                
                                {/* Ícone de raio */}
                                <div className="mt-4">
                                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6 bg-slate-800">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Rede Nacional
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Nossos mais de 350 credenciados estão estrategicamente distribuídos por todo o território nacional, oferecendo cobertura completa e suporte local para projetos de energia solar em qualquer região do Brasil.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
