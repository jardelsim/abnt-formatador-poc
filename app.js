
var elInstituicao = document.getElementById('instituicao');
var elNomes = document.getElementById('nomes');
var elTitulo = document.getElementById('titulo');
var elSubtitulo = document.getElementById('subtitulo');
var elLocal = document.getElementById('local');
var elAno = document.getElementById('ano');
var elCampos = document.querySelectorAll('#capa section');

/**
 * Rotina para substituir os valores dos campos caso
 * o usuário já tenha preenchido anteriormente
 */
function inicializaCampos() {
  console.log('inicializaCampos')
  var i = 0;
  for (i = 0; i < (elCampos.length - 1); i++) {
    if (leDado(elCampos[i].id)) {
      elCampos[i].innerHTML = leDado(elCampos[i].id);
    }
  }
}


/**
 * Rotina para preparar campos para disparar eventos
 * quando houver alguma modificação
 */
function preparaCamposParaMucanca() {
  console.log('preparaCamposParaMucanca')
  var i = 0;
  for (i = 0; i < (elCampos.length - 1); i++) {
    //console.log(elCampos.length, i, elCampos, elCampos[i])
    elCampos[i].addEventListener('blur', function (ev) {
      console.log(elCampos.length, i, elCampos, elCampos[i])
      console.log('x0', elCampos[i].getAttribute('id'));
      if (elCampos[i].getAttribute('id') === 'ano') {
        var conteudo = parseInt(elCampos[i].innerHTML, 10);
        if (isNaN(conteudo) || conteudo < 2017 || conteudo > 2020) {
          alert("Insira uma data de ano válida");
        } else {
          console.log('x1', conteudo)
          salvaDado(ev.target.id, ev.target.innerText);
        }
      } else {
        console.log('x2')
        //console.log("preparaCamposParaMucanca>>", elCampos[i], (elCampos[i].getAttribute('id'), elCampos[i].getAttribute('innerText')))
        salvaDado(ev.target.id, ev.target.innerText);
      }
    })
  }
}

/**
 * Le dado no localStorage
 *
 * @param  {string}  campo  Key do storage
 * @return {string}  Valor do campo, caso exista
 */
function leDado(campo) {
  console.log('leDado', campo);
  return localStorage.getItem(campo);
}

/**
 * Salva dado no localStorage
 *
 * @param  {string}  campo  Key do storage
 * @param  {string}  valor  Valor a ser salvo
 */
function salvaDado(campo, valor) {
  console.log('salvaDado', campo, valor);
  localStorage.setItem(campo, valor);
}


inicializaCampos();
preparaCamposParaMucanca();
