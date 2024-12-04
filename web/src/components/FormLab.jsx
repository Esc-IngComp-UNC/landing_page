import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../validations/form'
import { useState } from 'react'

function FormLab() {
    const {register,handleSubmit,resetField,formState:{errors}} = useForm({
        resolver:zodResolver(formSchema)
    })
    const [errorDatos,setErrorDatos] = useState(false)
    const onSubmit = async (datos) => {
        
        const response = await fetch("http://localhost:3000/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
        });
        if (response.ok) {
            setErrorDatos(false)
            resetField('nombre')
            resetField('apellido')
            resetField('email')
            resetField('telefono')
            resetField('texto')
        }else{
            setErrorDatos(true)
        }
        
    };

    return (
        <motion.div className="formContainer" >
            <motion.form onSubmit={handleSubmit(onSubmit)} initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:0.8}}>
            <h1>Trabaja con nosotros</h1>
                <div className="nameNsurname">
                    <label className='labelForm' htmlFor="nombre">Nombre:
                        <input className="inputForm" type="text" name="nombre" id="nombre"  {...register('nombre')} />
                        { errors.nombre?.message && <p style={{color:"red"}}>{errors.nombre.message}</p>}
                    </label>
                    <label className='labelForm'htmlFor="apellido">Apellido:
                        <input className="inputForm" type="text" name="apellido" id="apellido"  {...register('apellido')} />
                        { errors.apellido?.message && <p style={{color:"red"}}>{errors.apellido.message}</p>}
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="email">Email:
                        <input className="inputForm" type="email" name="email" id="email"  {...register('email')} />
                        { errors.email?.message && <p style={{color:"red"}}>{errors.email.message}</p>}
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="telefono">Telefono:
                        <input className="inputForm" type="tel" name="telefono" id="telefono"  {...register('telefono')}/>
                        { errors.telefono?.message && <p style={{color:"red"}}>{errors.telefono.message}</p>}
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="texto">Quiero Contactar con el laboratorio por qué...:
                        <textarea name="texto" id="texto" rows={10} cols={40}  {...register('texto')} ></textarea>
                        { errors.texto?.message && <p style={{color:"red"}}>{errors.texto.message}</p>}
                    </label>
                </div>
                <div className="questionOptionsBlock">
                    <p>Estoy interesado en:</p>
                    <label className='radioOption' htmlFor="pps">
                        <input type="radio" name="option" id="pps" value="pps" {...register('seleccion')}/>
                        Prácticas Supervisadas Profesionales (PPS)
                    </label>
                    <label className='radioOption' htmlFor="pi">
                        <input type="radio" name="option" id="pi" value="pi" {...register('seleccion')}/>
                        Proyecto Integrador (PI)</label>
                    <label className='radioOption' htmlFor="inv">
                        <input type="radio" name="option" id="inv" value="inv" {...register('seleccion')}/>
                        Investigación</label>
                    <label className='radioOption' htmlFor="otro">
                        <input type="radio" name="option" id="otro" value="otro" {...register('seleccion')}/>
                        Otro
                        </label>
                        { errors.seleccion?.message && <p style={{color:"red"}}>{errors.seleccion.message}</p>}
                    
                </div>
                    <motion.button type="submit" whileHover={{scale:1.2}} transition={{duration:0.1}}>Enviar</motion.button>
                    {errorDatos && <p style={{color:"red"}}>Hubo un error al registrar los datos</p> }
                    </motion.form>
                    <div className="gradienteBottomForm"></div>
                            </motion.div>
                            )
}

                            export default FormLab;
