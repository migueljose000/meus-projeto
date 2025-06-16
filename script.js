document.addEventListener('DOMContentLoaded', () => {
    // Preços base das categorias
    const precosCategorias = {
        '5k': 80.00,
        '10k': 120.00,
        '21k': 180.00
    };

    // Variável para controlar se a promoção está ativa
    const isPromoActive = true; // Defina como true para ativar a promoção

    // --- Lógica do Formulário de Inscrição ---
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    const categoriaSelect = document.getElementById('categoria');
    const precoExibido = document.getElementById('precoExibido');
    const promoBanner = document.getElementById('promo-banner');

    // Função para atualizar o preço exibido
    function atualizarPreco() {
        const categoria = categoriaSelect.value;
        let precoBase = precosCategorias[categoria] || 0;
        let precoFinal = precoBase;

        if (isPromoActive && precoBase > 0) {
            precoFinal = precoBase * 0.80; // 20% de desconto
            precoExibido.innerHTML = `De <s>R$ ${precoBase.toFixed(2).replace('.', ',')}</s> por <strong>R$ ${precoFinal.toFixed(2).replace('.', ',')}</strong>`;
            precoExibido.style.color = 'var(--primary-color)'; // Cor para o preço promocional
        } else {
            precoExibido.textContent = `R$ ${precoBase.toFixed(2).replace('.', ',')}`;
            precoExibido.style.color = 'var(--text-color)'; // Cor padrão
        }
    }

    // Exibe ou esconde o banner de promoção
    if (isPromoActive) {
        if (promoBanner) {
            promoBanner.style.display = 'block';
        }
    } else {
        if (promoBanner) {
            promoBanner.style.display = 'none';
        }
    }


    if (categoriaSelect) {
        categoriaSelect.addEventListener('change', atualizarPreco);
        atualizarPreco(); // Chama a função para exibir o preço inicial ao carregar a página
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const categoria = categoriaSelect.value;
            const precoPago = isPromoActive ? (precosCategorias[categoria] * 0.80) : precosCategorias[categoria];

            // Validação simples
            if (!nome || !email || !dataNascimento || !categoria) {
                registrationMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                registrationMessage.style.color = 'red';
                registrationMessage.style.display = 'block';
                downloadPdfBtn.style.display = 'none';
                return;
            }

            // Validação de email básica
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                registrationMessage.textContent = 'Por favor, insira um endereço de e-mail válido.';
                registrationMessage.style.color = 'red';
                registrationMessage.style.display = 'block';
                downloadPdfBtn.style.display = 'none';
                return;
            }

            // Exemplo de sucesso na inscrição
            registrationMessage.textContent = `Inscrição de ${nome} para a categoria ${categoria} realizada com sucesso! O valor pago foi R$ ${precoPago.toFixed(2).replace('.', ',')}. Um e-mail de confirmação foi enviado para ${email}.`;
            registrationMessage.style.color = 'green';
            registrationMessage.style.display = 'block';
            downloadPdfBtn.style.display = 'block';

            // Armazena os dados para o PDF
            sessionStorage.setItem('nomeInscrito', nome);
            sessionStorage.setItem('emailInscrito', email);
            sessionStorage.setItem('telefoneInscrito', telefone);
            sessionStorage.setItem('dataNascimentoInscrito', dataNascimento);
            sessionStorage.setItem('categoriaInscrita', categoria);
            sessionStorage.setItem('precoInscrito', precoPago.toFixed(2).replace('.', ',')); // Armazena o preço pago

            // Opcional: Limpar o formulário após a inscrição
            registrationForm.reset();
            atualizarPreco(); // Reseta o preço exibido
        });
    }

    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            const nome = sessionStorage.getItem('nomeInscrito');
            const email = sessionStorage.getItem('emailInscrito');
            const telefone = sessionStorage.getItem('telefoneInscrito');
            const dataNascimento = sessionStorage.getItem('dataNascimentoInscrito');
            const categoria = sessionStorage.getItem('categoriaInscrita');
            const precoPago = sessionStorage.getItem('precoInscrito'); // Recupera o preço pago

            if (!nome) {
                alert('Nenhum dado de inscrição encontrado para gerar o PDF.');
                return;
            }

            // Inicializa jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFontSize(22);
            doc.text('Comprovante de Inscrição', 20, 20);

            doc.setFontSize(12);
            doc.text(`Nome Completo: ${nome}`, 20, 40);
            doc.text(`E-mail: ${email}`, 20, 50);
            doc.text(`Telefone: ${telefone || 'Não informado'}`, 20, 60);
            doc.text(`Data de Nascimento: ${dataNascimento}`, 20, 70);
            doc.text(`Categoria: ${categoria}`, 20, 80);
            doc.text(`Preço Pago: R$ ${precoPago}`, 20, 90); // Adiciona o preço pago ao PDF
            doc.text('Data da Inscrição: ' + new Date().toLocaleDateString('pt-BR'), 20, 100);
            doc.text('Status: Confirmado', 20, 110);

            doc.save('comprovante_inscricao_corrida_natureza.pdf');
        });
    }

    // --- Lógica da Galeria de Fotos ---
    const imageGallery = document.querySelector('.image-gallery');
    const loadMoreImagesBtn = document.getElementById('loadMoreImages');
    let loadedImagesCount = 0;
    const imagesPerLoad = 6; // Quantidade de imagens a carregar por vez

    const allImages = [
        'https://lacasadeltrailrunning.com/wp-content/uploads/2019/12/trail-running-cosa-mi-serve.jpg',
        'https://elcaldennature.es/modules/ph_simpleblog/featured/67.jpg',
        'https://i0.wp.com/www.trailrunningbrasil.com.br/wp-content/uploads/2024/01/cantareira-2.jpg?fit=1080%2C720&ssl=1',
        'https://wanderleioliveira.band.com.br/wp-content/uploads/2024/10/443912_1127638_gabrielpapp_valinhostrail_20_web_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_wRoHAU5HW9hVGz0i5w407iv2-Q3tgKmyMjbqkKvVmbi8b_yaKCN4OLcMNQZxJ1y4As&usqp=CAU',
        'https://wanderleioliveira.band.com.br/wp-content/uploads/2024/10/443912_1127639_robelinky_valinhostrail_251_web_.jpg',
        'https://www.radiotaquara.com.br/wp-content/uploads/2024/03/1-1.jpg',
    ];

    function loadImages() {
        if (imageGallery) {
            const fragment = document.createDocumentFragment();
            const imagesToLoad = allImages.slice(loadedImagesCount, loadedImagesCount + imagesPerLoad);

            imagesToLoad.forEach(src => {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('gallery-item'); // Adiciona uma classe para estilização

                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Foto da Corrida na Natureza';

                imgContainer.appendChild(img);
                fragment.appendChild(imgContainer);
            });

            imageGallery.appendChild(fragment);
            loadedImagesCount += imagesToLoad.length;

            // Esconde o botão se todas as imagens foram carregadas
            if (loadedImagesCount >= allImages.length && loadMoreImagesBtn) {
                loadMoreImagesBtn.style.display = 'none';
            }
        }
    }

    // Carrega as primeiras imagens ao carregar a página
    loadImages();

    // Adiciona evento ao botão "Carregar Mais Imagens"
    if (loadMoreImagesBtn) {
        loadMoreImagesBtn.addEventListener('click', loadImages);
    }
});