import {googleAuth} from '../firebase/auth_google_signin_popup.js';
import {signIn} from '../firebase/auth_signin_password.js';
import {onAuth} from '../firebase/auth_state_listener.js';
// import {fs} from '../firebase/configuraciones.js';
// import {setPost} from './perfil.js';

export const registerUser = (e) => {
  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;

  signIn(email, password);

  onAuth((user) => {
    if (user) {
      window.location.hash = '#/home';

      console.log('El usuario inició sesión');
    } else {
      console.log('El usuario cerró sesión');
    }
  });
};

const SignUp = () => {
  window.location.hash = '#/signUp';
};

const SignIn = () => {
  const showSignIn = `
 <div class="conteinerGeneral">
      <div class="SingUpBox">
        <p class="title" >¡BIENVENIDX!</p>
        <form id="formLogIn" class="formLogIn">
          
          <div class="form-control">
            <input id="email" type="email" placeholder="correo electrónico">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
          </div>
          
          <div class="form-control">
            <input minlength="5" id="password" type="password" 
            placeholder="contraseña">
            <i class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i>
            <small></small>
          </div>
          <button id="btnSignIn" class="button">Inicia sesión</button>
          
          <a class="loginInGoogle" id="google"><img src="https://brandlogos.net/wp-content/uploads/2015/09/google-favicon-vector-400x400.png" alt="google"> iniciar sesión con google</a>
          <p>¿No tienes cuenta?</p>
          <a id="btnSignUp" 
          class="loginInCheckIn">Registrate</a>
        </form>
        <div class="imgbox">
          <img src="./img/CB2.png" alt="img Welcome" class="imgWelcome">
        </div>
      </div>  
    </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection register');
  divElemt.innerHTML = showSignIn;

  divElemt.querySelector('#btnSignIn').addEventListener('click', registerUser);
  divElemt.querySelector('#btnSignUp').addEventListener('click', SignUp);
  divElemt.querySelector('#google').addEventListener('click', googleAuth);

  return divElemt;
};

export default SignIn;