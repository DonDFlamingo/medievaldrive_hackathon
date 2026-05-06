import cors from 'cors'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  getDestinationById,
  getDestinations,
  getDestinationsByDistanceIndex,
  getMapById,
  getMaps,
  getVehiculeById,
  getVehicules,
} from './API/index.js'

const app = express()
const PORT = Number(process.env.PORT) || 3001
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/', (_req, res) => {
  res.json({
    name: 'Medieval Drive API',
    endpoints: [
      'GET /api/vehicules',
      'GET /api/vehicules/:id',
      'GET /api/maps',
      'GET /api/maps/:id',
      'GET /api/destinations',
      'GET /api/destinations?distance_index=2',
      'GET /api/destinations/:id',
    ],
  })
})

app.get('/api/vehicules', (_req, res) => {
  res.json(getVehicules())
})

app.get('/api/vehicules/:id', (req, res) => {
  const vehicule = getVehiculeById(req.params.id)
  if (!vehicule) {
    return res.status(404).json({ error: 'Vehicule introuvable' })
  }
  return res.json(vehicule)
})

app.get('/api/maps', (_req, res) => {
  res.json(getMaps())
})

app.get('/api/maps/:id', (req, res) => {
  const map = getMapById(req.params.id)
  if (!map) {
    return res.status(404).json({ error: 'Map introuvable' })
  }
  return res.json(map)
})

app.get('/api/destinations', (req, res) => {
  const { distance_index: distanceIndex } = req.query
  if (distanceIndex === undefined) {
    return res.json(getDestinations())
  }
  return res.json(getDestinationsByDistanceIndex(distanceIndex))
})

app.get('/api/destinations/:id', (req, res) => {
  const destination = getDestinationById(req.params.id)
  if (!destination) {
    return res.status(404).json({ error: 'Destination introuvable' })
  }
  return res.json(destination)
})

app.use((_req, res) => {
  res.status(404).json({ error: 'Route introuvable' })
})

app.listen(PORT, () => {
  console.log(`API en ligne sur http://localhost:${PORT}`)
})
