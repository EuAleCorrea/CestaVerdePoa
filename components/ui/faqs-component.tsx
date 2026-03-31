'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: '1. Como funciona?',
            answer: (
                <>
                    Somos um hortifruti selecionado e oferecemos frutas, legumes e verduras frescas e congeladas. Também temos os serviços sob encomenda de higienização de FLV e produtos picados.<br /><br />
                    <strong>OBS.:</strong> Por boa prática, não recomendamos a lavagem e higienização de ovos devido ser responsabilidade da granja em fornecer lavado e higienizado e pela absorção da casca.<br /><br />
                    Possuímos também complementos básicos por conveniência como azeites de oliva, acetos, creme de aceto, vinagres, molhos para salada, Polenta, nhoque e massas PAGANINI. Molhos de tomate, passata e tomate pelado. Oferecemos a praticidade de oferecer algumas conservas.<br /><br />
                    Para complementar o consumo das frutas dispomos de granolas, farelo, flocos e farinha de aveia, semente de linhaça e chia também. Sazonalmente temos chimia CESTA VERDE. Água com e sem gás de 500ml, 1,5l e 5l. Coca cola, isotônicos, energético e água de coco.
                </>
            ),
        },
        {
            id: 'item-2',
            question: '2. É assinatura mensal?',
            answer: 'Não, não possuímos assinatura.',
        },
        {
            id: 'item-3',
            question: '3. Qual a taxa de entrega?',
            answer: 'Para entrega até 2Km de distância da nossa loja física, o frete é grátis com pedido mínimo de R$40,00. As distâncias maiores devem ser consultadas.',
        },
        {
            id: 'item-4',
            question: '4. Quais são as formas de pagamento?',
            answer: 'Aceitamos dinheiro, pix, débito e crédito. Não aceitamos BanriCompras e vales alimentação ou refeição.',
        },
        {
            id: 'item-5',
            question: '5. Existe lista de produtos com valores?',
            answer: (
                <>
                    Sim, é só solicitar em nosso telefone pelo WhatsApp <a href="https://wa.me/5551989707036" target="_blank" className="text-primary hover:underline">51 98970 7036</a>.<br />
                    Temos também um grupo no WhatsApp onde informamos os produtos, novidades e promoções: 
                    <a href="https://chat.whatsapp.com/HBYpJ0zQGJ25RKeiVepbUT" target="_blank" className="ml-1 text-primary underline">Entrar no Grupo</a>
                </>
            ),
        },
        {
            id: 'item-6',
            question: '6. Como faço para comprar?',
            answer: (
                <>
                    Você pode nos visitar na loja física localizada na <strong>Rua Dr Ary Ramos de Lima, 71</strong>, ao lado do Bar do Chico.<br />
                    Também pode realizar o pedido por telefone ou mensagem no WhatsApp <a href="https://wa.me/5551989707036" target="_blank" className="text-primary hover:underline">51 98970 7036</a>. Nós questionamos os detalhes de cada produto e preparamos o pedido.<br />
                    <strong>Entregamos até 21h.</strong>
                </>
            ),
        },
        {
            id: 'item-7',
            question: '7. Tem algum link para ver os produtos?',
            answer: 'Diariamente postamos nos stories do Instagram e Facebook os produtos que recebemos e no grupo do WhatsApp as novidades, promoções e apresentação de produtos com seus valores.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-foreground text-4xl font-semibold">Perguntas Frequentes</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">
                        Descubra respostas rápidas para as dúvidas comuns sobre nossos produtos, entregas e serviços.
                    </p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card w-full border rounded-xl overflow-hidden shadow-sm">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b last:border-0 px-6">
                                <AccordionTrigger className="cursor-pointer text-base font-medium py-4 hover:no-underline text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-8 text-center">
                        Não encontrou o que procurava? Entre em contato com nosso{' '}
                        <Link
                            href="https://wa.me/5551989707036"
                            target="_blank"
                            className="text-primary font-medium hover:underline">
                            suporte via WhatsApp
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
