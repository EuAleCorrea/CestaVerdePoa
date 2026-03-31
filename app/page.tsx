import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/ui/faqs-component";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#4a6d1d]">Cesta Verde</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#novidades" className="hover:text-[#82b440] transition-colors">Novidades</Link>
            <Link href="#mais-vendidos" className="hover:text-[#82b440] transition-colors">Mais Vendidos</Link>
            <Link href="#faq" className="hover:text-[#82b440] transition-colors">FAQ</Link>
          </nav>
          <Link 
            href="https://wa.me/5551989707036" 
            target="_blank"
            className="bg-[#82b440] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4a6d1d] transition-all shadow-sm"
          >
            Pedir no WhatsApp
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image 
            src="/assets/banner-hero.jpg" 
            alt="Produtos Frescos Cesta Verde" 
            fill 
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Sabor e Saúde direto na sua mesa
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md">
              Hortifruti selecionado com entrega em toda Porto Alegre.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#novidades" className="bg-white text-[#4a6d1d] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                Ver Novidades
              </Link>
              <Link href="https://wa.me/5551989707036" target="_blank" className="bg-[#82b440] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#4a6d1d] transition-all">
                Chamar no Whats
              </Link>
            </div>
          </div>
        </section>

        {/* Novidades Section */}
        <section id="novidades" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Novidades da Semana</h2>
              <Link href="#" className="text-[#82b440] font-semibold hover:underline">Ver Todos</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Exemplo de Card de Produto */}
              {[
                { name: "Polenta Paganini 500g", img: "/assets/news/polenta-instantanea-paganini-500g.webp" },
                { name: "Geleia de Maracujá", img: "/assets/news/geleia-artesanal-maracuja.jpeg" },
                { name: "Geleia de Cebola Caramelada", img: "/assets/news/geleia-artesanal-cebola-caramelizada.jpeg" },
                { name: "Nhoque de Batata 500g", img: "/assets/news/nhoque-de-batata-paganini-500g.jpeg" }
              ].map((prod, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-64">
                    <Image src={prod.img} alt={prod.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-[#ff9f43] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Novidade</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">{prod.name}</h3>
                    <button className="w-full bg-[#82b440] text-white py-3 rounded-2xl font-bold hover:bg-[#4a6d1d] transition-all">
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQs />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4a6d1d] text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Cesta Verde POA</h3>
            <p className="text-gray-200 leading-relaxed">
              Leveza, frescor e qualidade para o seu dia a dia. Entregamos o melhor do hortifruti na sua casa.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <p className="mb-2">📍 Rua Dr Ary Ramos de Lima, 71</p>
            <p className="mb-4">📞 (51) 98970-7036</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">Instagram</Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">Facebook</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Localização</h4>
            <div className="bg-white/10 rounded-2xl p-4 text-sm">
              Ao lado do Bar do Chico. Porto Alegre - RS.
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
          © 2026 Cesta Verde POA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
