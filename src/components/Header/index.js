import {ContainerHeader} from './styles'
import {FiMusic} from 'react-icons/fi'

export default function Header (){



    return(
        <ContainerHeader>
            <FiMusic color='#FA7B5D' size={40} />
            <h3>Music Play</h3>
        </ContainerHeader>
    )
}