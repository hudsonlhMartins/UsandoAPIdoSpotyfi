import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import {Container, Content} from './styles'
import SpotifyWebApi from "spotify-web-api-node/"
import TrackSearchResult from "../TrackSearchResult"
import Player from "../Player"


const spotifyApi = new SpotifyWebApi({
    clientId: '14afbcdba2a44aecb4c93abe4703fcb1'
})


export default function Dashboard ({code}){
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [playngTrack, setPlayngTrack] = useState()




    function chooseTrack(track){
        setPlayngTrack(track)
        setSearch('')
    }
    console.log(searchResult)


    const accessToken = useAuth(code)

    useEffect(()=>{
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    },[accessToken])

    useEffect(()=>{
        if(!search) return setSearchResult([])
        if(!accessToken) return

        let cancel = false

         spotifyApi.searchTracks(search).then((res) =>{
            if(cancel) return
            console.log(res.body.tracks.items)

            setSearchResult ( res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image)=>{
                    if(image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })
        
        return ()=> cancel = true
        

    }, [accessToken, search])


    return (
        <Container>
            <form>
                <input type="text" placeholder='Procurar, Som/Artitas' value={search} onChange={(e)=> setSearch(e.target.value)} />
            </form>

            <Content>
                {searchResult.map(track =>(
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                ))}
            </Content>


            <footer>
                <Player accessToken={accessToken} trackUri={playngTrack?.uri }/>
            </footer>
        </Container>
    )
}