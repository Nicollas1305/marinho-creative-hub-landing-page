import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "📷",
    title: "Fotografia Profissional",
    description:
      "Cobertura de eventos, retratos, produtos e ambientes com edição completa.",
  },
  {
    icon: "🎬",
    title: "Produção Audiovisual",
    description:
      "Vídeos institucionais, promocionais e para redes sociais, com captação e edição.",
  },
  {
    icon: "💻",
    title: "Desenvolvimento de Sistemas",
    description:
      "Criação de soluções web e mobile sob medida para empresas e negócios.",
  },
  {
    icon: "📈",
    title: "Marketing Digital",
    description:
      "Estratégias para fortalecer a presença da sua marca nas redes sociais.",
  },
  {
    icon: "🌐",
    title: "Projetos FTTx (Fibra Óptica)",
    description: "Planejamento e implantação de redes com alta performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que fazemos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas e integradas para potencializar sua
            marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
