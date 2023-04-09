let interruptor = document.getElementById('interruptor')
let root = document.documentElement

interruptor.addEventListener('click', () =>{
  root.classList.toggle('tema-claro')
})
function ativaLetra(eLemento){
  const arrTexto = eLemento.innerHTML.split('');
  eLemento.innerHTML = '';
  arrTexto.forEach((Letra, i)=>{
      setTimeout(()=>{
          eLemento.innerHTML += Letra;
      }, 100 * i);
  });
}

const texto = document.querySelector('#portifolio');
ativaLetra(texto);