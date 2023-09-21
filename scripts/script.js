function gerarAssinatura(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var celular = document.getElementById("celular").value;
    var cargo = document.getElementById("cargo").value;
    var setor = document.getElementById("setor").value;
    var email = document.getElementById("email").value;
    var unidadeSelect = document.getElementById("unidade");
    var unidade = unidadeSelect.options[unidadeSelect.selectedIndex].getAttribute("data-endereco");

    var assinatura = "<a href='https://www.ibema.com.br'><img src='/Imagens/logo-ibema.svg' alt='Logo da Empresa' class='logo'></a>" + "<br><br>";
    assinatura += "<div class='links'><div class='rede-social'><a href='https://www.linkedin.com/company/ibema-cia-brasileira-de-papel'><img src='/Imagens/icone-linkedin.svg' alt='Icone Linkedin' width='15px'></a></div><div class='rede-social'><a href='https://www.facebook.com/ibema.papelcartao'><img src='/Imagens/icone-facebook.svg' alt='Icone Facebook' width='15px'></a></div><div class='rede-social'><a href='https://www.instagram.com/ibema_oficial'><img src='/Imagens/icone-instagram.svg' alt='Icone Instagram' width='15px'></a></div><div class='rede-social'><a href='https://www.youtube.com/channel/UCjzR0fkN_mdqC5F4eIrb-Pg'><img src='/Imagens/icone-youtube.svg' alt='Icone Youtube' width='15px'></a></div></div>";
    if (nome.trim() === ""){
        var bannerAlerta = document.getElementById("bannerAlerta");
        bannerAlerta.classList.add("show");
        retunr;
    } else {
        assinatura += "<div class='corpo'><p><strong class='nome'>" + nome + "</strong><br>";
    }
    if (cargo.trim() === ""){
        var bannerAlerta = document.getElementById("bannerAlerta");
        bannerAlerta.classList.add("show");
        retunr;
    } else {
        assinatura += "<span class='informacoes'>" + cargo + "<br>";
    }
    if (setor.trim() === ""){
        var bannerAlerta = document.getElementById("bannerAlerta");
        bannerAlerta.classList.add("show");
        retunr;
    } else {
        assinatura +=  setor + "<br>";
    }
    assinatura +=  "<hr style='margin: 3px 0 3px 0;'/></span>"
    assinatura +=  "<img src='/Imagens/email.svg' alt='Email' width='12px'><span class='informacoes'>&nbsp;&nbsp;&nbsp;" + email + "<br>"
    if (telefone.trim() !== ""){
        assinatura += "<img src='/Imagens/telefone.svg' alt='Telefone' width='12px'>&nbsp;&nbsp;&nbsp;" + telefone;
    }
    if (celular.trim() !== ""){
        assinatura += " | " + celular;
    }
    assinatura += "<br><img src='/Imagens/site.svg' alt='Site' width='12px'><span>&nbsp;&nbsp;&nbsp;ibema.com.br</span><br>"
    assinatura += "<img src='/Imagens/local.svg' alt='Local' width='12px'>&nbsp;&nbsp;&nbsp;" + unidade + "</span></p></div>";

    
    document.getElementById("assinatura").innerHTML = assinatura;

    // Exibe a assinatura e a opção de copiá-la após clicar no botão "gerar assinatura"
    document.getElementById("copiarBotao").style.display = "inline-block";
    document.getElementById("assinatura").style.display = "inline-block";
    document.getElementById("assinatura").scrollIntoView({ behavior: "smooth" });

    
}
function fecharAlerta() {
    var bannerAlerta = document.getElementById("bannerAlerta");
    bannerAlerta.classList.remove("show");
}
function copiarConteudo() {
    var botaoCopiar = document.getElementById("copiarBotao");
    var textoOriginal = botaoCopiar.textContent;

    botaoCopiar.textContent = "Copiado!";
    botaoCopiar.style.backgroundColor = "#000";
    botaoCopiar.style.color = "#FFFFFF";
    botaoCopiar.style.fontSize = "15px";
    botaoCopiar.style.borderRadius = "8px"
    botaoCopiar.style.borderColor = "#000";

    setTimeout(function() {
        botaoCopiar.textContent = textoOriginal;
        botaoCopiar.style.backgroundColor = "";
        botaoCopiar.style.color = "";
        botaoCopiar.style.fontSize = "";
        botaoCopiar.style.borderRadius = "";
        botaoCopiar.style.borderColor = "";
    }, 3000);
}
var clipboard = new ClipboardJS('#copiarBotao');

const type = 'text/html'; 'img/png';
const texto = new Blob([html], { type: 'text/html' }); // Cria o blob
const imagens = new Blob([html], { type: 'img/png' });
const item = new ClipboardItem({ [html]: texto });
const item2 = new ClipboardItem({ [html]: imagens });

navigator.clipboard.write(item).then(() => {
    console.log('Copiado');
}, (err) => {
    console.error(err);
});


clipboard.on('success', function (e) {
    e.clearSelection(); // Limpar a seleção após a cópia
});

clipboard.on('error', function (e) {
    alert('Erro ao copiar a assinatura. Por favor, copie manualmente.');
});
