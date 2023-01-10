//Faz a inicialização do SGBD
document.addEventListener("DOMContentLoaded", function () {
    dati.initialize(function (status) {
        if (status == false) {
            alert("Não foi possível se conectar ao BD.");
        } else {
            alert("Conectou ao BD.");
        }
    });

    gridAvaliacoes();		
}, false);


function gridAvaliacoes() {
    var numAvalia = 0;

    var totalAvaliacoes = 0;

    var totalIdade = 0;

    //Busca no BD as avaliações salvas
    dati.selectAll("TB_AVALIACOES",function(avaliacoes){

        $("#avaliacoes").empty();
        /*tblAvaliacoes = document.getElementById("avaliacoes").children[0];*/
        tblAvaliacoes = document.querySelector("#avaliacoesT tbody")
        
        //Popula a tabela com os registros do select
        $.each(avaliacoes, function(c, avaliacao){
            
            var linha   = tblAvaliacoes.insertRow(-1);

            var coluna1 = linha.insertCell(0);
            var coluna2 = linha.insertCell(1);
            var coluna3 = linha.insertCell(2);
            var coluna4 = linha.insertCell(3);
            var coluna5 = linha.insertCell(4);
            var coluna6 = linha.insertCell(5);
       
            coluna3.textContent = avaliacao.NOTA;

            

            numAvalia = numAvalia + 1;


            var estrelaAvaliada = parseInt(coluna3.textContent);

            console.log(numAvalia)

            
                
            totalAvaliacoes = totalAvaliacoes + estrelaAvaliada;
                
            
            
            console.log(totalAvaliacoes)
  

            function notaAvaliada(estrelaAvaliada) {
                var imgTes = document.createElement("IMG");      
            
                if (estrelaAvaliada == 5 ) {
                    imgTes.src = "img/25.png"
                    coluna3.textContent = ""
                    coluna3.appendChild(imgTes);
                }
                if (estrelaAvaliada == 4 ){
                    imgTes.src = "img/24.png"
                    coluna3.textContent = ""
                    coluna3.appendChild(imgTes);
                    
                }
                if (estrelaAvaliada == 3 ){
                    imgTes.src = "img/23.png"
                    coluna3.textContent = ""
                    coluna3.appendChild(imgTes);
                }
                if (estrelaAvaliada == 2 ){
                    imgTes.src = "img/22.png"
                    coluna3.textContent = ""
                    coluna3.appendChild(imgTes);
                }
                if (estrelaAvaliada == 1 ){
                    imgTes.src = "img/21.png"
                    coluna3.textContent = ""
                    coluna3.appendChild(imgTes);
                }
            }

            notaAvaliada(estrelaAvaliada)

            coluna2.innerHTML = avaliacao.IDADE;
            var idades = parseInt(coluna2.textContent);

            totalIdade = totalIdade + idades ; 
            console.log(totalIdade)
            coluna1.innerHTML = avaliacao.NOME;
            coluna4.innerHTML = avaliacao.COMENTARIO;
            coluna5.innerHTML = avaliacao.DATA_CADASTRO;
            coluna6.innerHTML = "<span id="+avaliacao.ID+" class='btExcluir' onclick='deleteElement("+avaliacao.ID+");'>Excluir</span><button type='button' id="+avaliacao.ID+"  class='btAlterar'   data-toggle='modal' data-target='.modalAlterar'><span onclick='atriID("+avaliacao.ID+");'>Alterar</span></button>";
        
            
        });

        var medAvaliacoes = totalAvaliacoes / numAvalia;
        var medIdade = totalIdade / numAvalia;

        console.log(Math.trunc(medIdade)) 
        
            var spanAval = document.getElementById("medAvalia");
            var spantotal = document.getElementById("totalAvalia");
            var spanIdade = document.getElementById("medIdade")

            spanIdade.textContent = Math.trunc(medIdade);
            spantotal.textContent = numAvalia;
            spanAval.textContent =  Math.round(medAvaliacoes);
    
            console.log(Math.round(medAvaliacoes));

    });

    
}




var nomeDeUsuario = document.getElementById("nome");

function nomeNum() {
    var no = document.getElementById('erroNome');
    if(this.value.length < 5) {
        no.classList.add("erro")
        no.textContent = "Digite um nome valido";
    } else 
        no.textContent = ""
}

nomeDeUsuario.onblur = nomeNum;

var idadeUsuario = document.getElementById("idade");

function idadeNum() {
    var no1 = document.getElementById('erroIdade');

    if(this.value >= 120 || this.value <= 0 ) {
        no1.classList.add("erro")
        no1.textContent = "Digite uma idade válida";
    } else 
        no1.textContent = ""
}

idadeUsuario.onblur = idadeNum;

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;

   if (charCode != 8 && charCode != 9) {

       var maxCaractere = 2;
       var idade = document.getElementById('idade');           
            
       if ((charCode < 48 || charCode > 57)||(idade.value.length >= maxCaractere)) 
          return false;
    }
}

function Avaliar(estrela) {

    switch (estrela) {
        case 5:
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star1.png";
            break;
        case 4:
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            break;
        case 3:
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            break;
        case 2:
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            break;
        case 1:
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            break;
    }
    document.getElementById('rating').innerHTML = estrela;
}

function AvaliarAlterar(estrelaAlterar) {

    switch (estrelaAlterar) {
        case 5:
            document.getElementById("s1Alterar").src = "img/star1.png";
            document.getElementById("s2Alterar").src = "img/star1.png";
            document.getElementById("s3Alterar").src = "img/star1.png";
            document.getElementById("s4Alterar").src = "img/star1.png";
            document.getElementById("s5Alterar").src = "img/star1.png";
            break;
        case 4:
            document.getElementById("s1Alterar").src = "img/star1.png";
            document.getElementById("s2Alterar").src = "img/star1.png";
            document.getElementById("s3Alterar").src = "img/star1.png";
            document.getElementById("s4Alterar").src = "img/star1.png";
            document.getElementById("s5Alterar").src = "img/star0.png";
            break;
        case 3:
            document.getElementById("s1Alterar").src = "img/star1.png";
            document.getElementById("s2Alterar").src = "img/star1.png";
            document.getElementById("s3Alterar").src = "img/star1.png";
            document.getElementById("s4Alterar").src = "img/star0.png";
            document.getElementById("s5Alterar").src = "img/star0.png";
            break;
        case 2:
            document.getElementById("s1Alterar").src = "img/star1.png";
            document.getElementById("s2Alterar").src = "img/star1.png";
            document.getElementById("s3Alterar").src = "img/star0.png";
            document.getElementById("s4Alterar").src = "img/star0.png";
            document.getElementById("s5Alterar").src = "img/star0.png";
            break;
        case 1:
            document.getElementById("s1Alterar").src = "img/star1.png";
            document.getElementById("s2Alterar").src = "img/star0.png";
            document.getElementById("s3Alterar").src = "img/star0.png";
            document.getElementById("s4Alterar").src = "img/star0.png";
            document.getElementById("s5Alterar").src = "img/star0.png";
            break;
    }
    document.getElementById("ratingAlterar").innerHTML = estrelaAlterar;
}


// document.getElementById("enviarA").addEventListener("click", function(event){

//     event.preventDefault();
//     var nomeForm = document.getElementById("nome").value;
//     var idadeForm = document.getElementById("idade").value;
//     var notaForm = document.querySelector("#rating").textContent;
//     var ComentarioForm = document.getElementById("comentarioCli").value;
    

//     registro = {
//         "NOME": nomeForm,
//         "IDADE": idadeForm,    
//         "NOTA": notaForm,
//         "COMENTARIO": ComentarioForm,
//         "DATA_CADASTRO": formatDate(new Date())       
//     };

//     //Faz a inserção do registro no banco de dados
//     dati.insert("TB_AVALIACOES", registro, function(codigo){

        
//         //Insere uma linha na tabela somente após o registro ser salvo no BD
//         tblAvaliacoes = document.getElementById("avaliacoes");
//         var linha   = tblAvaliacoes.insertRow(-1);
    
//         var coluna1 = linha.insertCell(0);
//         var coluna2 = linha.insertCell(1);
//         var coluna3 = linha.insertCell(2);
//         var coluna4 = linha.insertCell(3);
//         var coluna5 = linha.insertCell(4);
//         var coluna6 = linha.insertCell(5);

//         coluna1.innerHTML = nomeForm;
//         coluna2.innerHTML = idadeForm;
//         coluna3.innerHTML = notaForm;
//         coluna4.innerHTML = ComentarioForm;
//         coluna5.innerHTML = formatDate(new Date());
//         coluna6.innerHTML = "<span><a onclick='deleteElement("+codigo+");' class='btExcluir'>EXCLUIR</a></span>";
    
//     });  			
// });

function insertElement(){

    var nomeForm = document.getElementById("nome").value;
    var idadeForm = document.getElementById("idade").value;
    var notaForm = document.querySelector("#rating").textContent;
    var ComentarioForm = document.getElementById("comentarioCli").value;


    

    registro = {
        "NOME": nomeForm,
        "IDADE": idadeForm,    
        "NOTA": notaForm,
        "COMENTARIO": ComentarioForm,
        "DATA_CADASTRO": formatDate(new Date())       
    };

    //Faz a inserção do registro no banco de dados
    dati.insert("TB_AVALIACOES", registro, function(codigo){

        
        //Insere uma linha na tabela somente após o registro ser salvo no BD
        tblAvaliacoes = document.querySelector("#avaliacoesT tbody")
        var linha   = tblAvaliacoes.insertRow(-1);
        linha.id = "tr"+codigo+"";
    
        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);
        var coluna5 = linha.insertCell(4);
        var coluna6 = linha.insertCell(5);


        coluna3.innerHTML = notaForm;
        var estrelaAvaliada1 = coluna3.textContent;

        function notaAvaliada1(estrelaAvaliada1) {
            var imgTes1 = document.createElement("IMG");      
        
            if (estrelaAvaliada1 == 5 ) {
                imgTes1.src = "img/25.png"
                coluna3.textContent = ""
                coluna3.appendChild(imgTes1);
            }
            if (estrelaAvaliada1 == 4 ){
                imgTes1.src = "img/24.png"
                coluna3.textContent = ""
                coluna3.appendChild(imgTes1);
                
            }
            if (estrelaAvaliada1 == 3 ){
                imgTes1.src = "img/23.png"
                coluna3.textContent = ""
                coluna3.appendChild(imgTes1);
            }
            if (estrelaAvaliada1 == 2 ){
                imgTes1.src = "img/22.png"
                coluna3.textContent = ""
                coluna3.appendChild(imgTes1);
            }
            if (estrelaAvaliada1 == 1 ){
                imgTes1.src = "img/21.png"
                coluna3.textContent = ""
                coluna3.appendChild(imgTes1);
            }
        }

        notaAvaliada1(estrelaAvaliada1)

        coluna1.innerHTML = nomeForm;
        coluna2.innerHTML = idadeForm;
        coluna4.innerHTML = ComentarioForm;
        coluna5.innerHTML = formatDate(new Date());
        coluna6.innerHTML = "<span id="+codigo+" class='btExcluir' onclick='deleteElement("+codigo+");'>Excluir</span> <button type='button' id="+codigo+"  class='btAlterar' onclick='atriID("+codigo+");' data-toggle='modal' data-target='.modalAlterar'><span onclick='atriID("+codigo+");'>Alterar</span></button>";
    }); 
    
    $('#modalAdicionar').modal('hide');

    var formAvalia = document.getElementById("formAvaliar")

    formAvalia.reset();

    gridAvaliacoes()
}


function insertElement1(){

    var nomeUsuario = document.getElementById("nomeUsuario").value;
    var emailUsuario = document.getElementById("email").value;
    var senhaUsuario = document.getElementById("senha").value;
    var tipoUsuario = document.querySelector('input[name="usuario"]:checked').value;

    

    registro1 = {
        "NOME": nomeUsuario,
        "EMAIL": emailUsuario,    
        "SENHA": senhaUsuario,
        "TIPO_USUARIO": tipoUsuario,
        "DATA_CADASTRO": formatDate(new Date())       
    };

    console.log(registro1)
    //Faz a inserção do registro no banco de dados
    dati.insert("TB_USERS", registro1, function(codigo){

        
        //Insere uma linha na tabela somente após o registro ser salvo no BD
        tbCadastro = document.querySelector("#usersT tbody")
        var linhaUsuario   = tbCadastro.insertRow(-1);
        linhaUsuario.id = "tr"+codigo+"";
    
        var coluna1Usuario = linhaUsuario.insertCell(0);
        var coluna2Usuario = linhaUsuario.insertCell(1);
        var coluna3Usuario = linhaUsuario.insertCell(2);
        var coluna4Usuario = linhaUsuario.insertCell(3);
        var coluna5Usuario = linhaUsuario.insertCell(4);
        var coluna6Usuario = linhaUsuario.insertCell(5);



        coluna1Usuario.innerHTML = nomeUsuario;
        coluna2Usuario.innerHTML = emailUsuario;
        coluna3Usuario.innerHTML = senhaUsuario
        coluna4Usuario.innerHTML = tipoUsuario;
        coluna5Usuario.innerHTML = formatDate(new Date());
        coluna6Usuario.innerHTML = "<span id="+codigo+" class='btExcluir' onclick='deleteElement("+codigo+");'>Excluir</span> <button type='button' id="+codigo+"  class='btAlterar' onclick='atriID("+codigo+");' data-toggle='modal' data-target='.modalAlterar'><span onclick='atriID("+codigo+");'>Alterar</span></button>";
    }); 
    
    $('#modalCadastrar').modal('hide');

    var formAvalia = document.getElementById("formUsuario")

    formAvalia.reset();

}


var armazenaID = document.getElementById("idAvalia").value;

function atriID(id_var){
    
    armazenaID = id_var;
    

    dati.selectWhere("TB_AVALIACOES","ID="+id_var,function(avaliacoes){
        $.each(avaliacoes, function(c, avaliacao){
            let nota = avaliacao.NOTA
            AvaliarAlterar(nota)
            document.getElementById("nomeAlterar").value = avaliacao.NOME;
            document.getElementById("idadeAlterar").value = avaliacao.IDADE;
            // coluna3.innerHTML = avaliacao.NOTA;
            document.getElementById("ratingAlterar").value= avaliacao.NOTA;
            document.getElementById("comentarioCliAlterar").value = avaliacao.COMENTARIO;
            
        });

    });	
}


function deleteElement(id_var){
    var elementoClicado = event.target;
   
    if (elementoClicado.classList.contains("btExcluir")) {
        var celulaA = elementoClicado.parentNode.parentNode;
        celulaA.remove();
    }
    //Exclui o registro do BD de acordo com o 'data-id' do elementro clicado
    dati.delete("TB_AVALIACOES","ID",""+id_var+"",function(status){
        
    });	
    
    gridAvaliacoes()
};




//FUNÇÕES ÚTEIS
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }


 /* dati.update("TABELA",{"CAMPO1":"VALORCAMPO2", "CAMPO2":"VALORCAMPO2", "CAMPO3":"VALORCAMPO3"},"ID",""+id_var+"",function(status){ });*/


  function alteraElement(){
    
    var nomeForm1 = document.getElementById("nomeAlterar").value;
    var idadeForm1 = document.getElementById("idadeAlterar").value;
    var notaForm1 = document.querySelector("#ratingAlterar").textContent;
    var ComentarioForm1 = document.getElementById("comentarioCliAlterar").value;

    dati.update("TB_AVALIACOES", {
        "NOME":nomeForm1, 
        "IDADE":idadeForm1, 
        "NOTA":notaForm1,
        "COMENTARIO":ComentarioForm1,
        },"ID",""+armazenaID+"",function(status){

    });  
    
    gridAvaliacoes();	

    $('#modalAlterar').modal('hide');
};



var btnMudar = document.querySelector('#mudar');
console.log(btnMudar)

btnMudar.addEventListener('click', function(event) {
var avaliaE = document.querySelector('#avaliacoesEfect');
var usuarioE = document.querySelector('#usuarioEfect')
var infoAvaE = document.querySelector('#dvBT');
var infoUsuE = document.querySelector('#dvBT1');
var btnMuda = document.querySelector('#mudar');
var btnCadastrar = document.querySelector('#btn_cadastrar');
var btnAvaliar = document.querySelector('#btn_avaliar')



if (avaliaE.classList.contains("fade")) {

    

    avaliaE.classList.remove('fade');
    infoAvaE.classList.remove('fade');
    infoUsuE.classList.add('fade');
    usuarioE.classList.add('fade');

   btnMuda.textContent = "TB Usuários"

   btnAvaliar.style.display = "block";
   btnCadastrar.style.display = "none";
   infoUsuE.style.display = "none";

   setTimeout(function () {
    infoAvaE.classList.remove('dspNone');
    avaliaE.classList.remove('dspNone');
}, 500);


}else {

    avaliaE.classList.add('fade');
    infoAvaE.classList.add('fade');
    infoUsuE.classList.remove('fade');
    usuarioE.classList.remove('fade');
    
    btnMuda.textContent = "TB Avaliação"
    btnAvaliar.style.display = "none";
    btnCadastrar.style.display = "block";
    infoUsuE.style.display = "";
    

    setTimeout(function () {
        infoUsuE.classList.remove('dspNone');
        usuarioE.classList.remove('dspNone');
        infoAvaE.classList.add('dspNone');
        avaliaE.classList.add('dspNone');
    }, 500);
}

})
            