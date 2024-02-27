import React from 'react'
import { Rows } from '../../../utils/Flex'
import { LoginOutlined } from '@ant-design/icons'

export const BotonInicioSesion = () => {
    return (
        <a
            href='#'
            className='btn-login'
        >
            <Rows
                centered
                width={"100%"}
                height={"100%"}
            >
                Iniciar Sesión
            </Rows>
        </a>
    )
}
