$(function() {
    $(".br").click(function() {
        //menu
        $(".ul-menu li:nth-child(1) a").text("Início")
        $(".ul-menu li:nth-child(2) a").text("Sobre")
        $(".ul-menu li:nth-child(3) a").text("Serviços")
        $(".ul-menu li:nth-child(4) a").text("Habilidades")
        $(".ul-menu li:nth-child(5) a").text("Portfolio")
        $(".ul-menu li:nth-child(6) a").text("Contato")
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-br")
        //home
        $(".home-presentation p:nth-child(1)").text("Olá!Eu sou,")
        $(".home-presentation h1:nth-child(2)").text("Fernando Santos")
        $(".home-presentation h1:nth-child(2)").text("E eu sou")
        $(".home-presentation p:nth-child(4)").text("Aos 36 anos, estou vivendo uma emocionante transição de carreira.")
        $(".home-presentation p:nth-child(4)").text("Deixei para trás a área de análise de suporte e agora estou imerso no mundo da programação.")
        $(".home-presentation p:nth-child(4)").text("Tenho uma paixão ardente pela tecnologia e estou ansioso para contribuir com soluções inovadoras nesse campo.")
        $(".home-presentation p:nth-child(4)").text("Se precisar de mais informações ou tiver outras perguntas, estou à disposição! ")
      

//about
$(".about-me h1").text("Sobre")
$(".text-about p:nth-child(1)").text("Sou um Desenvolvedor Front-End com formação em Sistemas de Informação e experiência em manutenção de sistemas web. Minha paixão pela tecnologia me motiva a buscar constantemente o aprimoramento das minhas habilidades técnicas.")

$(".text-about p:nth-child(2)").text("Durante minha carreira anterior, desenvolvi habilidades sólidas em resolução de problemas, análise de dados e trabalho em equipe. Essas competências são altamente transferíveis para a área de programação, onde posso aplicar minha capacidade de resolver desafios complexos e colaborar em projetos empolgantes.")


$(".text-about p:nth-child(3)").text("Atualmente, estou cursando a formação Full Stack pelo DevClub. Sempre busco projetos práticos para aplicar meus conhecimentos e aprimorar ainda mais minhas habilidades técnicas. Se você está em busca de um desenvolvedor comprometido, apaixonado e pronto para enfrentar novos desafios, estou à disposição!")




//Servico
$(".services h1").text("Serviços")
$(".service-box p:nth-child(1)").text("Sou um Desenvolvedor Front-End com formação em Sistemas de Informação e experiência em manutenção de sistemas web. Minha paixão pela tecnologia me motiva a buscar constantemente o aprimoramento das minhas habilidades técnicas.")

$(".service-box p:nth-child(2)").text("Durante minha carreira anterior, desenvolvi habilidades sólidas em resolução de problemas, análise de dados e trabalho em equipe. Essas competências são altamente transferíveis para a área de programação, onde posso aplicar minha capacidade de resolver desafios complexos e colaborar em projetos empolgantes.")


$(".service-box p:nth-child(3)").text("Atualmente, estou cursando a formação Full Stack pelo DevClub. Sempre busco projetos práticos para aplicar meus conhecimentos e aprimorar ainda mais minhas habilidades técnicas. Se você está em busca de um desenvolvedor comprometido, apaixonado e pronto para enfrentar novos desafios, estou à disposição!")


        
        //skilss
        $(".skills span").text("TÉCNICO E PROFISSIONAL")
        $(".skills h2").text("Minhas Habilidades")
        $(".skills h3").text("Habilidades técnicas")
        $(".frame-skills p:nth-child(1)").text("AWS")
        $(".frame-skills p:nth-child(2)").text("15%")


        

        $(".frame-skills p:nth-child(3)").text("CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML. CSS descreve como os elementos devem ser renderizados na tela, no papel, na fala ou em outras mídias.")
        $(".frame-skills p:nth-child(4)").text("O Visual Studio Code é um editor de código-fonte leve, mas poderoso, que roda em desktops e está disponível para Windows, macOS e Linux.")
        $(".frame-skills p:nth-child(5)").text("JavaScript (JS) é uma linguagem de programação leve interpretada (ou compilada just-in-time) com funções de primeira classe. Embora seja mais conhecida como a linguagem de script para páginas da Web.")
        $(".frame-skills p:nth-child(6)").text("O GitHub é um site e serviço baseado em nuvem que ajuda desenvolvedores a armazenar e gerenciar seus códigos, bem como rastrear e controlar alterações em seus códigos.")
        $(".frame-skills p:nth-child(7)").text("React é uma biblioteca. Ela permite que você junte componentes, mas não prescreve como fazer roteamento e busca de dados. Componentes React são funções JavaScript.")
        $(".frame-skills p:nth-child(8)").text("Git é um sistema de controle de versão distribuído, o que significa que toda a base de código e histórico estão disponíveis no computador de cada desenvolvedor, o que permite ramificação e mesclagem fáceis.")
        $(".square-infor .title").text("Passe o mouse sobre uma habilidade")
        //projects
        $(".projects h1").text("Meus Projetos")
        $(".view--project a:nth-child(1) span").text("Página")
        $(".view--project a:nth-child(2) span").text("Repositório")
        $(".my-projects:nth-child(3) .title-project").text("Projeto Luta")
        $(".my-projects:nth-child(5) .title-project").text("Teclado Virtual")
        $(".my-projects:nth-child(6) .title-project").text("Cadastro Form")
        $(".my-projects:nth-child(7) .title-project").text("Clima")
        $(".my-projects:nth-child(8) .title-project").text("Jogo da Velha")
        $(".my-projects:nth-child(9) .title-project").text("Quadro de Desenho")
        $(".my-projects:nth-child(10) .title-project").text("Relógio")
        $(".my-projects:nth-child(1) p").text("Landing page de um produto, caixa de som JBL")
        $(".my-projects:nth-child(2) p").text("Clone de um layout para prática do HTML e CSS")
        $(".my-projects:nth-child(3) p").text("Jogo de luta feito em JavaScript puro. Utilizando objetos e funções.")
        $(".my-projects:nth-child(4) p").text("Atributo feito sobre Eiichiro Oda, sua jornada e obras.")
        $(".my-projects:nth-child(5) p").text("Ao apertar uma key do seu teclado emite um som de uma nota musical de piano. Podendo compor um som com várias notas.")
        $(".my-projects:nth-child(6) p").text("Projeto de um cadastro de produtos e exibição do produto em uma tabela ao cadastrar.")
        $(".my-projects:nth-child(7) p").text("Informa o clima e temperatura da localidade pesquisada. Utilizando a API da OpenWeatherMap")
        $(".my-projects:nth-child(8) p").text("O primeiro jogador que alinhar 3 de seus símbolos de maneira idêntica (horizontal, vertical ou diagonal), vence o jogo.")
        $(".my-projects:nth-child(9) p").text("Mostre sua criatividade desenhando com as cores disponíveis.")
        $(".my-projects:nth-child(10) p").text("Relógio virtual e analógivo, mostrando as horas atuais.")
        
        //contact
        $(".infor-contact:nth-child(1)").text("Entre em contato comigo pelo e-mail:")
    })
})