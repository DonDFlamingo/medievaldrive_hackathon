import cors from 'cors'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  calculateTripCost,
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
      'GET /api/trajets/cout?depart_id=1&retour_id=8&vehicule_id=2&niveau_equipement=3',
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

app.get('/api/trajets/cout', (req, res) => {
  const departId = Number(req.query.depart_id)
  const retourId = Number(req.query.retour_id)
  const vehiculeId = Number(req.query.vehicule_id)
  const niveauEquipement = Number(req.query.niveau_equipement ?? 1)

  if (!departId || !retourId || !vehiculeId || !niveauEquipement) {
    return res.status(400).json({
      error:
        'Parametres invalides. Utilise: depart_id, retour_id, vehicule_id, niveau_equipement',
    })
  }

  const trip = calculateTripCost({
    departId,
    retourId,
    vehiculeId,
    niveauEquipement,
  })

  if (!trip) {
    return res.status(404).json({ error: 'Trajet impossible avec ces identifiants' })
  }

  return res.json(trip)
})

app.use((_req, res) => {
  res.status(404).json({ error: 'Route introuvable' })
})

app.listen(PORT, () => {
  console.log(`API en ligne sur http://localhost:${PORT}`)
})
