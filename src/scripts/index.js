function classificadorHeroi() {
    let nome = document.getElementById('Nome').value;
    let experiencia = parseInt(document.getElementById('XP').value);
    let resultado = document.getElementById('Resultado');
    
    if (!nome || isNaN(experiencia) || experiencia < 0) {
        resultado.textContent = "Insira um nome e um XP válido.";
        resultado.style.color = "red";
        return;
    }

    let niveis = [
        { max: 1000, nome: "Ferro", cor: "#a4a4a4" },
        { max: 2000, nome: "Bronze", cor: "#cd7f32" },
        { max: 5000, nome: "Prata", cor: "#c0c0c0" },
        { max: 7000, nome: "Ouro", cor: "#ffd700" },
        { max: 8000, nome: "Platina", cor: "#7f7679" },
        { max: 9000, nome: "Ascendente", cor: "#87CEEB" },
        { max: 10000, nome: "Imortal", cor: "#800080" },
        { max: Infinity, nome: "Radiante", cor: "#FF69B4" }
    ];

    let nivel;
    for (let i = 0; i < niveis.length; i++) {
        if (experiencia <= niveis[i].max) {
            nivel = niveis[i];
            break;
        }
    }

    resultado.textContent = `O Herói de nome ${nome} está no nível de ${nivel.nome}`;
    resultado.style.color = "black";
    document.body.style.backgroundColor = nivel.cor;
}
