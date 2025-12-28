const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:5505',
    'http://localhost:1234',
    'http://localhost:8080',
    'http://movies.com',
    'http://ejemplodireccion.com'
];


export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => (req, res, next) => {
    
    const origin = req.header('origin') 

    if (acceptedOrigins.includes(origin) || !origin) {
        res.header('Access-Control-Allow-Origin', origin)
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
        res.header('Access-Control-Allow-Headers', 'Content-Type')
    }

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200)
    }

    next()
}
