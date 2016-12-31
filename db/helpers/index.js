// data extraction helpers

// mongodb helpers
// extract flavours from db result set
export function extractFlavours(flavours) {
  return flavours.map((flavour) => {
    const {
      _id,
      active,
      name,
    } = flavour

    // create processed flavour object
    const processed = {
      _id,
      active,
      name,
    }

    return processed
  })
}

// extract juices from db result set
export function extractJuices(juices) {
  return juices.map((flavour) => {
    const {
      _id,
      brand,
      description,
      flavours,
      name,
    } = flavour

    // create processed juice object
    const processed = {
      _id,
      brand,
      description,
      flavours,
      name,
    }

    return processed
  })
}
