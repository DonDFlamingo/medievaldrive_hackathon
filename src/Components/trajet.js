export function calculateTripCost({
  departIndex,
  retourIndex,
  prixVehicule,
}) {
  return { cout_total_ecu: (departIndex + retourIndex) * prixVehicule }
}
