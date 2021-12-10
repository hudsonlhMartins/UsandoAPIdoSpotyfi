const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json());
// para usar tem que instlar o body-Parser

app.post('/refresh', (req, res)=>{
    const refreshToken = req.body.refreshToken
    console.log('h1')
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '14afbcdba2a44aecb4c93abe4703fcb1',
        clientSecret: 'aaa3741fbc5b4627a35d2c78717131f5',
        refreshToken
})

spotifyApi.refreshAccessToken().then(
    (data)=>{
        console.log('acesso atualizado')

        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })

    }).catch(()=>{
        res.sendStatus(400)
    })
})

app.post('/login', (req, res)=>{
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '14afbcdba2a44aecb4c93abe4703fcb1',
        clientSecret: 'aaa3741fbc5b4627a35d2c78717131f5'
    })

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=>{
        res.sendStatus(400)
    })
})

app.listen(3001)