// Comment about the purpose and context of this code
/*
Dani, Essa pasta será a pagina que aparecerá apos o cliente clicar no "clique aqui da area de alugueis.
não meche aqui pra eu nao perder meu raciocinio."
na pasta "app" tem 2 partes que está comentada tbm.
caso vc queira ver como já está é só tirar o comentario do app só pra ver.
*/

// Gallery component definition
function Gallery({ gallery }) {
    return (
        <div className="mt-10 w-full">
            <div className="text-center mb-24">
                <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
                    Galpões
                </h1>
            </div>
            <ul className="mt-10">
                <li>img1</li>
                <li>img2</li>
                <li>img3</li>
                <li>img4</li>
                <li>img5</li>
            </ul>
        </div>
    );
}

// Export the Gallery component
export default Gallery;
