console.log("menu.js cargado correctamente");
const menus = {

    entradas: `
        <div class="item">
            <span>Tapas Pomodoro</span>
            <span>$105</span>
        </div>

        <div class="item">
            <span>Tapas Pesto</span>
            <span>$115</span>
        </div>
    `,

    desayunos: `
        <div class="item">
            <span>Chilaquiles</span>
            <span>$140</span>
        </div>

        <div class="item">
            <span>Molletes Salados</span>
            <span>$125</span>
        </div>

        <div class="item">
            <span>Molletes Dulces</span>
            <span>$110</span>
        </div>

        <div class="item">
            <span>Hot Cakes (4 piezas)</span>
            <span>$110</span>
        </div>

        <div class="item">
            <span>Omelette con queso Manchego</span>
            <span>$140</span>
        </div>

        <div class="item">
            <span>Enfrijoladas</span>
            <span>$125</span>
        </div>
    `,

    lonches: `
        <div class="item">
            <span>Lonche de Arrachera</span>
            <span>$85</span>
        </div>

        <div class="item">
            <span>Lonche de Chorizo</span>
            <span>$85</span>
        </div>

        <div class="item">
            <span>Lonche de Chilaquiles</span>
            <span>$85</span>
        </div>

        <div class="item">
            <span>Lonche de Pollo</span>
            <span>$90</span>
        </div>

        <div class="item">
            <span>Lonche de Jamón Serrano</span>
            <span>$185</span>
        </div>
    `,

    ensaladas: `
        <div class="item">
            <span>Ensalada Mixta</span>
            <span>$135</span>
        </div>

        <div class="item">
            <span>Ensalada Fresca</span>
            <span>$135</span>
        </div>

        <div class="item">
            <span>Ensalada Pesto</span>
            <span>$160</span>
        </div>
    `,

    pastas: `
        <div class="item">
            <span>Pasta Pomodoro</span>
            <span>$140</span>
        </div>

        <div class="item">
            <span>Pasta Mediterránea</span>
            <span>$140</span>
        </div>

        <div class="item">
            <span>Pasta en Crema</span>
            <span>$160</span>
        </div>

        <div class="item">
            <span>Pasta Carbonara</span>
            <span>$190</span>
        </div>

        <div class="item">
            <span>Pasta Pesto</span>
            <span>$190</span>
        </div>

        <div class="item">
            <span>Lasaña de Arrachera</span>
            <span>$220</span>
        </div>

        <div class="item">
            <span>Lasaña de Champiñones</span>
            <span>$220</span>
        </div>
    `,

    platillos: `
        <div class="item">
            <span>Baguette de Arrachera</span>
            <span>$195</span>
        </div>

        <div class="item">
            <span>Baguette de Pollo</span>
            <span>$195</span>
        </div>

        <div class="item">
            <span>Baguette de Chorizo</span>
            <span>$195</span>
        </div>

        <div class="item">
            <span>Baguette de Champiñones</span>
            <span>$195</span>
        </div>

        <div class="item">
            <span>Arrachera en Salsa Verde o Roja</span>
            <span>$140</span>
        </div>

        <div class="item">
            <span>Filete de Pollo</span>
            <span>$170</span>
        </div>

        <div class="item">
            <span>Fajitas de Pollo</span>
            <span>$170</span>
        </div>

        <div class="item">
            <span>Pollo en Crema de Cilantro o Chipotle</span>
            <span>$170</span>
        </div>

        <div class="item">
            <span>Enchiladas Suizas</span>
            <span>$165</span>
        </div>

        <div class="item">
            <span>Papa Alfredo</span>
            <span>$165</span>
        </div>
    `,

    bebidas: `
        <div class="item">
            <span>Agua Fresca</span>
            <span>$45</span>
        </div>

        <div class="item">
            <span>Jugo Verde</span>
            <span>$65</span>
        </div>

        <div class="item">
            <span>Jugo de Naranja</span>
            <span>$80</span>
        </div>

        <div class="item">
            <span>Licuado de Fresa</span>
            <span>$90</span>
        </div>

        <div class="item">
            <span>Frappé</span>
            <span>$75</span>
        </div>

        <div class="item">
            <span>Limonada</span>
            <span>$55</span>
        </div>

        <div class="item">
            <span>Naranjada</span>
            <span>$55</span>
        </div>

        <div class="item">
            <span>Chai Frío</span>
            <span>$80</span>
        </div>

        <div class="item">
            <span>Agua Mineral</span>
            <span>$40</span>
        </div>

        <div class="item">
            <span>Rusa</span>
            <span>$55</span>
        </div>

        <div class="item">
            <span>Café Americano</span>
            <span>$45</span>
        </div>

        <div class="item">
            <span>Capuchino</span>
            <span>$60</span>
        </div>

        <div class="item">
            <span>Chai Caliente</span>
            <span>$80</span>
        </div>

        <div class="item">
            <span>Té de Limón con Miel</span>
            <span>$40</span>
        </div>
    `,

    postres: `
        <div class="item">
            <span>Postres de Temporada</span>
            <span>Preguntar disponibilidad</span>
        </div>
    `
};

function mostrarCategoria(categoria) {

    const titulo =
        categoria.charAt(0).toUpperCase() + categoria.slice(1);

    document.getElementById("tituloCategoria").innerText = titulo;

    document.getElementById("contenidoMenu").innerHTML =
        menus[categoria];
}

// Categoría inicial
mostrarCategoria('pastas');