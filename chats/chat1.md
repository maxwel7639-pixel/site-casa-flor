# Casa Terapêutica Flor da Vida

_Started 2026-07-14 18:50 UTC_

---

## User

Crie um site institucional de página única (landing page), responsivo e mobile-first, com efeitos de scroll e interatividade 3D sutil, para o negócio abaixo:

SITE — CASA TERAPÊUTICA FLOR DA VIDA
Terapias holísticas e energéticas · Uruguaiana/RS
Instagram: @casaterapeuticaflordavida (3,1 mil seguidores, ativo)

IDENTIDADE VISUAL (baseada no Instagram real dela)
- Paleta: roxo/magenta profundo como cor principal (gradientes escuros tipo #2d1b4e → #6b2d6b → #a83d8f), com dourado/âmbar como cor de destaque (#d4af6a) para textos-chave e ícones
- Tipografia: serif elegante pros títulos (algo como Playfair Display) transmitindo espiritualidade/misticismo + sans leve pro corpo (Inter ou similar)
- Tom visual: místico, acolhedor, energético — mantras, símbolos de energia, elementos sutis de flor de lótus/flor da vida (geometria sagrada) como motivo decorativo recorrente
- Mobile-first — maioria do público vem do Instagram/WhatsApp

SEÇÕES
1. HERO — nome "Casa Terapêutica Flor da Vida", subtítulo "Espaço de Desenvolvimento e Cura da Mente e Corpo", CTA para WhatsApp, elemento decorativo de geometria sagrada (flor da vida) sutil e animado
2. SOBRE — espaço dedicado ao cuidado integral, cita "Cuidando desde a infância até..." (ela atende públicos variados)
3. TERAPIAS/SERVIÇOS (cards com foto de fundo relacionada) — Reiki, Terapia em Grupo, Ayurveda & Yoga, Acompanhamento Terapêutico, Biorressonância (tecnologia reconhecida pelo Ministério da Saúde, conforme ela mesma divulga)
4. BADGE GOOGLE — nota 5,0 com as 5 avaliações reais, destaque "empresa LGBTQ+ friendly, liderada por mulheres"
5. COMO FUNCIONA (3 passos: agendamento via WhatsApp → sessão personalizada → acompanhamento contínuo)
6. DEPOIMENTOS — usar SOMENTE os 3 reais do Google: "Ótimo atendimento, super recomendo" (Jeferson Palacio), "Lugar que tem meu coração!!" (Silvia Carvalho — conferir texto exato), "Uma experiência incrível" (Silvia Carvalho)
7. FAQ (accordion) — perguntas comuns sobre terapias holísticas/reiki pra quem nunca fez
8. LOCALIZAÇÃO — R. Domingos de Almeida, 2390, Centro, Uruguaiana/RS + mapa embutido
9. RODAPÉ com WhatsApp, Instagram, endereço

PACOTE PADRÃO PÓS-DEPLOY (aplicar já no prompt)
- Badge de avaliação do Google em destaque
- Seção "Como Funciona" (3 passos)
- FAQ em accordion (JS puro)
- Meta tags Open Graph
- Botão de WhatsApp flutuante + CTA de WhatsApp em cada card de serviço (mensagem pré-preenchida por serviço)
- Número: (55) 99207-3534

INTERATIVIDADE
- Scroll reveal suave em cada seção e card (fade-in + leve subida, atraso escalonado)
- Leve efeito 3D tilt nos cards de terapias ao passar o mouse
- Elemento de geometria sagrada (flor da vida) com rotação lenta e contínua como plano de fundo decorativo em pontos estratégicos (hero, seção sobre)

## Assistant

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Landing page pronta e enviada para revisão. Inclui todas as 9 seções, flor da vida animada em SVG (rotação lenta no hero e no sobre), scroll reveal escalonado, tilt 3D nos cards de terapias, FAQ em accordion, mapa embutido, badge Google 5,0 e WhatsApp flutuante + CTA pré-preenchido por serviço. Nos Tweaks dá para ligar/desligar o botão flutuante e ajustar a velocidade da rotação.

Próximos passos sugeridos: substituir os fundos em gradiente dos cards por fotos reais do espaço/Instagram — é só me enviar as imagens.

## User

Na seção onde está o badge "5,0 ★★★★★ · 5 avaliações no Google" com os selos "Empresa LGBTQ+ friendly" e "Liderada por mulheres", transforme o layout em duas colunas: mantenha esse bloco de avaliação/badges de um lado, e adicione do outro lado um espaço para foto na mesma moldura arqueada (topo em arco, borda fina dourada/âmbar) usada como referência antes — com uma imagem placeholder por enquanto. Mantenha a paleta e o estilo visual já aplicados no restante do site.    te mandei uma imagem anexada use a somente como exemplo de como quero o espaço pra por a imagem e deixe um botao de browser to flie pra que eu suba a imagem depois e esse botao tambem tem q ter nos cards de caminhos para o seu equilibrio

## Assistant



## User

Na seção onde está o badge "5,0 ★★★★★ · 5 avaliações no Google" com os selos "Empresa LGBTQ+ friendly" e "Liderada por mulheres", transforme o layout em duas colunas: mantenha esse bloco de avaliação/badges de um lado, e adicione do outro lado um espaço para foto na mesma moldura arqueada (topo em arco, borda fina dourada/âmbar) usada como referência antes — com uma imagem placeholder por enquanto. Mantenha a paleta e o estilo visual já aplicados no restante do site.    te mandei uma imagem anexada use a somente como exemplo de como quero o espaço pra por a imagem e deixe um botao de browser to flie pra que eu suba a imagem depois e esse botao tambem tem q ter nos cards de caminhos para o seu equilibrio

## Assistant

_[tool: copy_starter_component]_

_[tool: update_todos]_

## Assistant

_[tool: dc_html_str_replace]_

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

## Assistant

_[tool: dc_js_str_replace]_

## Assistant

_[tool: dc_js_str_replace]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Feito e enviado para revisão:

- **Seção de avaliações em 2 colunas** — à esquerda, moldura arqueada (topo em arco, borda fina dourada) com espaço de foto; à direita, o bloco 5,0 + selos. É só clicar ou arrastar a imagem para preencher.
- **Cards de terapias** — cada um ganhou uma área de foto no topo (clique ou arraste para subir a imagem), com fade para a cor do card.

As fotos que você subir ficam salvas e persistem. Nota: a imagem anexada foi usada só como referência de moldura, como pedido — nenhuma foto foi inserida.

## User

o botao flutuante de whatsapp ta meio estranho ajuste

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Ajustado — o botão flutuante agora usa o ícone oficial do WhatsApp (balão com telefone) em verde sólido, no lugar do símbolo ✆ que ficava estranho.

