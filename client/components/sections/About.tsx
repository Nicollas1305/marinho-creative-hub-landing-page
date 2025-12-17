export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre o Marinho Creative Hub
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos um estúdio criativo que une tecnologia, fotografia,
              audiovisual e marketing digital para entregar soluções
              personalizadas e de alta qualidade.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Atuamos com excelência, criatividade e foco no resultado. Mais do
              que serviços, entregamos valor, estética e impacto.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fda405737d6b149f78e190783d365357e%2F915031f931614ddeace8d3ee0338d66e?format=webp&width=800"
                alt="Nicollas Marinho em ação"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Nicollas Marinho</div>
              <div className="text-sm opacity-90">
                Fundador & Diretor Criativo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
