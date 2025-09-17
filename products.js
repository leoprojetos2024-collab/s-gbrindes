// products.js

const products = [
    {
        id: 'adesivos',
        name: 'Adesivos',
        price: 1.00,
        image: 'img/adesivos.png',
        description: 'Adesivos personalizados para todas as ocasiões.',
        customization: {
            basic: 'Texto, Cor',
            advanced: 'Formato, Material, Quantidade específica'
        }
    },
    {
        id: 'agendas',
        name: 'Agendas',
        price: 25.00,
        image: 'img/agendas1.jpg',
        description: 'Agendas personalizadas para organizar seu dia a dia.',
        customization: {
            basic: 'Nome, Ano',
            advanced: 'Layout interno, Capa personalizada, Tipo de papel'
        }
    },
    {
        id: 'azulejos',
        name: 'Azulejos',
        price: 35.00,
        image: 'img/azulejo.jpg',
        description: 'Azulejos personalizados para decoração.',
        customization: {
            basic: 'Foto, Texto',
            advanced: 'Tamanho, Acabamento, Kit de azulejos'
        }
    },
    {
        id: 'brindes',
        name: 'Brindes',
        price: 15.00,
        image: 'img/brindes.jpg',
        description: 'Brindes corporativos e para eventos.',
        customization: {
            basic: 'Logo, Texto',
            advanced: 'Tipo de brinde, Quantidade, Embalagem'
        }
    },
    {
        id: 'banner',
        name: 'Banner',
        price: 50.00,
        image: 'img/banneer.jpg',
        description: 'Banners em lona para divulgação.',
        customization: {
            basic: 'Texto, Imagem',
            advanced: 'Tamanho, Material, Acabamento'
        }
    },
    {
        id: 'canecas',
        name: 'Canecas',
        price: 20.00,
        image: 'img/caneca1.jpg',
        description: 'Canecas de cerâmica ou polímero com a sua arte.',
        customization: {
            basic: 'Foto, Texto',
            advanced: 'Tipo de caneca, Cor interna, Alça personalizada'
        }
    },
    {
        id: 'chaveiros',
        name: 'Chaveiros',
        price: 5.00,
        image: 'img/chaveiros.webp',
        description: 'Chaveiros personalizados de diversos materiais.',
        customization: {
            basic: 'Texto, Formato',
            advanced: 'Material, Tamanho, Dupla face'
        }
    },
    {
        id: 'cartao_visita',
        name: 'Cartão de Visita',
        price: 0.50,
        image: 'img/cartaodevisita.webp',
        description: 'Cartões de visita com acabamentos diversos.',
        customization: {
            basic: 'Dados, Logo',
            advanced: 'Tipo de papel, Acabamento, Laminação'
        }
    },
    {
        id: 'camisetas',
        name: 'Camisetas',
        price: 40.00,
        image: 'img/camiseta.jpeg',
        description: 'Camisetas de alta qualidade com estampas criativas.',
        customization: {
            basic: 'Estampa, Tamanho',
            advanced: 'Tipo de tecido, Cor, Modelo'
        }
    },
    {
        id: 'plastificacao',
        name: 'Plastificação',
        price: 2.00,
        image: 'img/Plastificacao.webp',
        description: 'Serviços de plastificação de documentos.',
        customization: {
            basic: 'Tamanho',
            advanced: 'Tipo de plastificação, Quantidade'
        }
    },
    {
        id: 'pegue_e_monte',
        name: 'Pegue e Monte',
        price: 150.00,
        image: 'img/pegueemonte.jpg',
        description: 'Kits \'Pegue e Monte\' para festas.',
        customization: {
            basic: 'Tema, Nome',
            advanced: 'Itens do kit, Cores, Personagens'
        }
    },
    {
        id: 'panfleto',
        name: 'Panfleto',
        price: 0.20,
        image: 'img/panfletos.webp',
        description: 'Panfletos para divulgação de seu negócio.',
        customization: {
            basic: 'Texto, Imagem',
            advanced: 'Tamanho, Tipo de papel, Dobra'
        }
    },
    {
        id: 'topos_bolo',
        name: 'Topos para Bolo',
        price: 25.00,
        image: 'img/topo.webp',
        description: 'Topos de bolo personalizados para sua festa.',
        customization: {
            basic: 'Nome, Idade',
            advanced: 'Tema, Camadas, Elementos 3D'
        }
    },
    {
        id: 'impressao',
        name: 'Impressão',
        price: 0.80,
        image: 'img/impressao.jpg',
        description: 'Serviços de impressão em geral.',
        customization: {
            basic: 'Tipo de papel, Cor',
            advanced: 'Tamanho, Acabamento, Quantidade'
        }
    },
    {
        id: 'encadernacao',
        name: 'Encadernação',
        price: 10.00,
        image: 'img/encadernacao.png',
        description: 'Encadernação de apostilas e trabalhos.',
        customization: {
            basic: 'Capa, Contracapa',
            advanced: 'Tipo de espiral, Tamanho, Quantidade de páginas'
        }
    },
    {
        id: 'social_midia',
        name: 'Social Midia',
        price: 80.00,
        image: 'img/mediasocial.jpg',
        description: 'Criação de artes para redes sociais.',
        customization: {
            basic: 'Tema, Texto',
            advanced: 'Formato, Quantidade de artes, Calendário de postagens'
        }
    }
];
