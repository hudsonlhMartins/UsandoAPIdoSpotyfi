import {Container} from './styles'




const Auth = "https://accounts.spotify.com/authorize?client_id=14afbcdba2a44aecb4c93abe4703fcb1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"




export default function Login (){
    return (
        <Container>
            <a href={Auth}>Login Com stopify</a>
        </Container>
    )
}