export interface Continent {
  name: string;
  url: string;
  description: string;
}

export interface City {
  name: string;
  continent: string;
  url: string;
  flag: string;
}

export const continents: Continent[] = [
  {name: 'Europa', url: "url('/europe.png')", description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {name: 'América do Norte', url: "url('/north-america.png')", description: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).'},
  {name: 'América do Sul', url: "url('/south-america-2.jpg')", description: 'A América do Sul é um continente[2][3] que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.[4][5] A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico.[6] O Brasil representa atualmente a metade da população e produto econômico desta região.[7]'},
  {name: 'Ásia', url: "url('/asia.jpg')", description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.[1] Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. O litoral do mar Morto, a planície de menor altitude do mundo, estão localizadas a 396 m abaixo do nível do mar, na região fronteiriça do Estado de Israel com o Reino Hashemita da Jordânia.[1]'},
  {name: 'África', url: "url('/africa.jpg')", description: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005[1]), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.[2]' },
  {name: 'Oceania', url: "url('/oceania.jpg')", description: 'Oceania ou Oceânia[nota 1] é uma região geográfica[1][2][3] composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.[4][5][6]'},
 ]

 export const cities: City[] = [
   {name: 'Londres', continent: 'Europa', url: "/cards/london.png", flag: "/cards/flags/england.png"},
   {name: 'Paris', continent: 'Europa', url: "/cards/paris.png", flag: "/cards/flags/france.png"},
   {name: 'Praga', continent: 'Europa', url: "/cards/praga.png", flag: "/cards/flags/czech-republic.png"},
   {name: 'Roma', continent: 'Europa', url: "/cards/roma.png", flag: "/cards/flags/italy.png"},
   {name: 'Atenas', continent: 'Europa', url: "/cards/athens.jpg", flag: "/cards/flags/greece.png"},
 ]