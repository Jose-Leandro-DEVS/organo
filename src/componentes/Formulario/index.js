import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{

    const times = [
        'Programação', 
        'Front-End', 
        'Data Science', 
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{ 
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            descricao, 
            imagem,
            time
        })
        setNome('') 
        setCargo('') 
        setDescricao('') 
        setImagem('') 
        setTime('') 
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto 
                        obrigatorio={true} 
                        label="Nome" 
                        placeholder="Digite o seu nome" 
                        valor={nome} 
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        obrigatorio={true} 
                        label="Cargo" 
                        placeholder="Digite o seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)} 
                    />
                    <CampoTexto 
                        obrigatorio={true} 
                        label="Descrição" 
                        placeholder="Digite a sua descrição"
                        valor={descricao}
                        aoAlterado={valor => setDescricao(valor)} 
                    />
                    <CampoTexto 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        obrigatorio={true} 
                        label="Time" 
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)} 
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario