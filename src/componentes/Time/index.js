import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const cssbordinha = { borderColor: props.corPrimaria }

    return (

        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={cssbordinha}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    console.log(<Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)
                    return <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                    />
                })}
            </div>
        </section>
    )
}


export default Time