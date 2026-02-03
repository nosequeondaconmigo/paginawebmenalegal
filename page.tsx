import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ContactSidebar from '@/components/contact-sidebar'

export const metadata = {
  title: 'Blog Jurídico | María de los Ángeles Mena C.',
  description: 'Artículos y recursos sobre derecho de familia, contratos, negligencias médicas y herencias en Chile.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Cambios Recientes en el Derecho de Familia Chileno',
    excerpt: 'Análisis de las últimas reformas en materia de divorcio, custodia compartida y pensión alimenticia en Chile.',
    category: 'Derecho de Familia',
    date: '15 Enero 2026',
    readTime: '5 min',
    slug: 'cambios-derecho-familia-2026'
  },
  {
    id: 2,
    title: 'Guía Completa para Procesos de Herencia Simplificados',
    excerpt: 'Paso a paso sobre cómo tramitar la posesión efectiva y liquidar una herencia de manera eficiente.',
    category: 'Herencias',
    date: '8 Enero 2026',
    readTime: '7 min',
    slug: 'guia-herencias-simplificadas'
  },
  {
    id: 3,
    title: 'Sus Derechos como Paciente: Negligencias Médicas',
    excerpt: 'Conozca qué constituye negligencia médica y cómo defender sus derechos en el sistema de salud chileno.',
    category: 'Negligencias Médicas',
    date: '20 Diciembre 2025',
    readTime: '6 min',
    slug: 'derechos-paciente-negligencias'
  },
  {
    id: 4,
    title: 'Claves para Redactar Contratos Comerciales Efectivos',
    excerpt: 'Elementos esenciales que todo contrato privado debe incluir para proteger sus intereses comerciales.',
    category: 'Contratos Privados',
    date: '10 Diciembre 2025',
    readTime: '8 min',
    slug: 'contratos-comerciales-efectivos'
  },
  {
    id: 5,
    title: 'Compensación Económica: Lo que Debe Saber',
    excerpt: 'Explicación detallada sobre cómo se calcula y negocia la compensación económica en divorcios en Chile.',
    category: 'Derecho de Familia',
    date: '1 Diciembre 2025',
    readTime: '6 min',
    slug: 'compensacion-economica-divorcio'
  },
  {
    id: 6,
    title: 'Testamentos en Chile: Tipos y Recomendaciones',
    excerpt: 'Diferencias entre testamento abierto y cerrado, y cuál es más conveniente para su situación.',
    category: 'Herencias',
    date: '18 Noviembre 2025',
    readTime: '5 min',
    slug: 'testamentos-tipos-recomendaciones'
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B3A57] to-[#2A4A67] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Blog Jurídico
            </h1>
            <p className="text-xl text-[#F5F1E8]/90 leading-relaxed">
              Recursos y análisis sobre temas legales relevantes para usted y su familia
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-2 border-[#1B3A57]/10 hover:border-[#B8935E] transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-[#B8935E] text-white rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-3 text-sm text-[#2C2C2C]/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-serif font-bold mb-3 text-[#1B3A57]">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#2C2C2C] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="border-2 border-[#1B3A57] text-[#1B3A57] hover:bg-[#1B3A57] hover:text-white group bg-transparent"
                    >
                      Leer Artículo Completo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" className="border-2 border-[#1B3A57] text-[#1B3A57] bg-transparent">
                Anterior
              </Button>
              <Button className="bg-[#B8935E] hover:bg-[#A07D4A] text-white">
                1
              </Button>
              <Button variant="outline" className="border-2 border-[#1B3A57] text-[#1B3A57] bg-transparent">
                2
              </Button>
              <Button variant="outline" className="border-2 border-[#1B3A57] text-[#1B3A57] bg-transparent">
                3
              </Button>
              <Button variant="outline" className="border-2 border-[#1B3A57] text-[#1B3A57] bg-transparent">
                Siguiente
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ContactSidebar />
            
            <Card className="border-2 border-[#1B3A57]/10 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#1B3A57]">
                  Categorías
                </h3>
                <ul className="space-y-2">
                  {['Derecho de Familia', 'Contratos Privados', 'Negligencias Médicas', 'Herencias y Sucesiones'].map((category) => (
                    <li key={category}>
                      <Link 
                        href="#" 
                        className="block py-2 px-3 rounded hover:bg-[#F5F1E8] transition-colors text-[#2C2C2C] hover:text-[#B8935E]"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1B3A57]/10 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#1B3A57]">
                  Artículos Populares
                </h3>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="border-b border-[#1B3A57]/10 pb-3 last:border-0">
                      <Link href="#" className="block hover:text-[#B8935E] transition-colors">
                        <h4 className="font-semibold text-sm text-[#1B3A57] mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-[#2C2C2C]/60">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
