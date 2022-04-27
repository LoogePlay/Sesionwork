import { useForm } from 'react-hook-form';
import '../styles/index.css'


function App() {
  const {
register,
formState:{
errors
},
handleSubmit
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
  }
  return (

    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >Имя:
      <input {...register('Name',
  {
    required: true
  }
      )} type="text"/>
      </label>
      </div>
      <div>
      <label>Фамилия:
      <input {...register('SurName')} type="text"/>
      </label>
      </div>
      <div>
      <label>Отчество:
      <input {...register('MiddleName')} type="text"/>
      </label>
      </div>
      <div>
      <label>E-Mail:
      <input {...register('Mail')} type="email"/>
      </label>
      </div>
      <div>
      <label>Пароль:
      <input {...register('Password')} type="password"/>
      </label>
      </div>
      <div>
      <input {...register} type="Submit" />
      </div>
      <div>
        <input {...register} type="reset" />
      </div>
      </form>
    </div>
  );
}

export default App;
