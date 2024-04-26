{/*Dani, Essa pasta será a pagina que aparecerá apos o cliente clicar no "clique aqui da area de alugueis. 
não meche aqui pra eu nao perder meu raciocinio." 
na pasta "app" tem 2 partes que está comentada tbm.
caso vc queira ver como já está é só tirar o comentario do app só pra ver.
*/}
function Gallery({gallery}) {
    return ( 
        <div className="
        mt-10,
        w-full,
        ">
            <ul className="
            mt-10
            ">
                Galpoes

                <li>img1</li>
                <li>img2</li>
                <li>img3</li>
                <li>img4</li>
                <li>img5</li>
            </ul>

            <ul className="
            mt-10
            ">
                Montagens Stands
                
                <li>img1</li>
                <li>img2</li>
                <li>img3</li>
                <li>img4</li>
                <li>img5</li>
            </ul>

            <ul className="
            mt-10
            ">
                Moveis em Geral
                
                <li>img1</li>
                <li>img2</li>
                <li>img3</li>
                <li>img4</li>
                <li>img5</li>
                </ul>

                <ul className="
            mt-10
            ">
                Eletronicas
                
                <li>img1</li>
                <li>img2</li>
                <li>img3</li>
                <li>img4</li>
                <li>img5</li>
                </ul>
            

        </div>
     );
}

export default Gallery;