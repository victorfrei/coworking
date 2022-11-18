
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


export default function Index() {
 
 const {handleSubmit, register} = useForm();
 const router = useRouter();

 const onSubmit = async (data: any) => {
  console.log(data)
  if(data.senha == data.senha_confirmar){
  await axios.post("https://coworking-backend-thexarcano.vercel.app/api/usuarios/cadastrar", data)
  .then((e)=>{
    Swal.fire({title: "Cadastro", timer: 4000, timerProgressBar: true, text:"Cadastrando feito com sucesso",icon: "success"})
    .then(()=>{
      localStorage.setItem("token",e.data.token);
      router.replace("/user/parceiros");
    })
  })
  .catch((e)=>{
    Swal.fire({title: "Cadastro", timer: 4000, timerProgressBar: true, text:"Email já existe, tente fazer o login! "+e,icon: "error"});
  })
  }else{
    Swal.fire({title: "Cadastro", timer: 4000, timerProgressBar: true, text:"As senha não são iguais!",icon: "warning"});
  
  }
 };

  return (
    
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Coworking  
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" {...register("email")} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                      <input type="password" {...register("senha")} name="senha" id="senha" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="senha_confirmar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Senha</label>
                      <input type="password" {...register("senha_confirmar")} name="senha_confirmar" id="senha_confirmar" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" {...register("termos")} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Eu concordo com os <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Termos e Condições</Link></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar a Conta</button>
                  
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Já tem uma Conta? <Link href="/user" type='none' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
          </div>
      </div>
  </div>
</section>
  );
}