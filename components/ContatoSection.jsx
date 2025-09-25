import { motion } from 'framer-motion'
import Button from './Button'

export default function ContatoSection() {
  return (
    <section id="contato" className="section">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-brand-primary"
          >
            entre em contato
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Pronto para fazer parte do ecossistema?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle mb-12"
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar as oportunidades exclusivas do IBS.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div>
              <label htmlFor="empresa">Empresa</label>
              <input type="text" id="empresa" name="empresa" required />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" required />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" name="cidade" required />
            </div>
            <div>
              <label htmlFor="perfil">Perfil</label>
              <select id="perfil" name="perfil" required>
                <option value="">Selecione seu perfil</option>
                <option value="Residencial">Residencial</option>
                <option value="Empresas & Indústrias">Empresas & Indústrias</option>
                <option value="Cooperativa">Cooperativa</option>
                <option value="Integrador">Integrador</option>
                <option value="Investidor">Investidor</option>
                <option value="Gestor público">Gestor público</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="mensagem">Conte um pouco sobre o projeto</label>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Queremos saber sua necessidade e objetivos." required />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Enviar mensagem</Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}