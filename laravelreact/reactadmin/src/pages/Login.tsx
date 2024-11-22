
import { useForm, SubmitHandler} from "react-hook-form";
import { login } from "../services/AuthService";
import { useNavigate } from 'react-router-dom';
type Inputs = {
    email: string,
    password: string,
};

const Login = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>();
    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        // login(payload)
        const logged = await login(payload)
        if(logged == true){
          navigate('/dashboard')
        }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl flex flex-col md:flex-row p-6 bg-white rounded animate-fade-in-down">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to IN+</h2>
          <p className="mb-2">
            Perfectly designed and precisely prepared admin theme with over 50
            pages with extra new web app views.
          </p>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="mb-2">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>

        <div className="md:w-1/2 p-8 shadow-lg">
          <form onSubmit={handleSubmit(loginHandler)} className="mt-8 space-y-6">
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
                
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">Bạn phải nhập vào email</span>}
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Mật khẩu"
               
                {...register("password", { required: true })} 
              />
              {errors.password && <span className="text-red-500 text-sm">Bạn phải nhập vào mật khẩu</span>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Đăng nhập
            </button>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Quên mật khẩu ?
            </a>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-left">
            Inspinia web app framework base on Bootstrap 3 &copy; 2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
