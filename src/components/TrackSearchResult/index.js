import {Container} from './styles'


export default function TrackSearchResult ({track, key, chooseTrack}) {

    function handlePlay(){
        chooseTrack(track)
    }

    return( 
        <Container onClick={handlePlay}>
            <img src={track.albumUrl} alt='foto de capa' style={{height: '64px', width: '64px'}}/>

            <div>
                <h3>{track.title}</h3>
                <span>{track.artist}</span>
            </div>


        </Container>)
}