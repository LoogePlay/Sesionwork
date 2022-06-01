import { useForm } from 'react-hook-form';
import '../styles/index.css'
import {useState} from 'react'
import { themes, ThemeContext } from "../context/themeContext";


function Registration() {
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

  const [theme, setTheme] = useState(themes.light)

const changeTheme = ()=> {
  setTheme((prevTheme)=> prevTheme === themes.light? themes.dark: themes.light)
}

  return (
<div className="main-div">
    <div className="form"
    style={{background: theme.background, color: theme.textColor, outline: theme.outline}}
    >
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
      <input {...register('SurName',
      {
        required: true
      }
      )} type="text"/>
      </label>
      </div>
      <div>
      <label>Отчество:
      <input {...register('MiddleName',
      {
        required: true
      }
      )} type="text"/>
      </label>
      </div>
      <div>
      <label>E-Mail:
      <input {...register('Mail',
      {
        required:true
      }
      )} type="email"/>
      </label>
      </div>
      <div>
      <label>Пароль:
      <input {...register('Password')} type="password"/>
      </label>
      </div>
      <div>
        <label >
          Прикрипи файл
          <input {...register('Uploaded_file')} type="file"/>
        </label>
      </div>
      <div>
      <input {...register} type="Submit" />
      </div>
      <div>
      <label class="switch">
        <input type="checkbox" onClick={changeTheme}/>
        <span class="slider round"></span>
      </label>
      </div>
      </form>
   
    </div>
</div>);
}

export default Registration;
