const apartmentHunting = (blocks, reqs) => {
  const getMinDistances = (blocks, req) => {
    const minDistances = []
    let closestReqIdx = Infinity
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i][req]) {
        closestReqIdx = i
      }
      minDistances[i] = Math.abs(i - closestReqIdx)
    }
    closestReqIdx = 0
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (blocks[i][req]) {
        closestReqIdx = i
      }
      minDistances[i] = Math.min(minDistances[i], Math.abs(i - closestReqIdx))
    }
    return minDistances
  }

  const getMaxDistancesAtBlocks = (blocks, minDistancesFromBlocks) => {
    const maxDistancesAtBlocks = []
    for (let i = 0; i < blocks.length; i++) {
      const minDistancesAtBlock = minDistancesFromBlocks.map(
        (distances) => distances[i]
      )
      maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock)
    }
    return maxDistancesAtBlocks
  }

  const getIdxAtMinValue = (array) => {
    let idxAtMinValue = 0
    let minValue = Infinity
    for (let element of array) {
      if (element < minValue) {
        minValue = element
        idxAtMinValue = array.indexOf(element)
      }
    }
    return idxAtMinValue
  }
  const minDistancesFromBlocks = reqs.map((req) => getMinDistances(blocks, req))
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks
  )
  return getIdxAtMinValue(maxDistancesAtBlocks)
}

// sample input
// blocks = [
//   {
//     gym: false,
//     school: true,
//     store: false,
//   },
//   {
//     gym: true,
//     school: false,
//     store: false,
//   },
//   {
//     gym: true,
//     school: true,
//     store: false,
//   },
//   {
//     gym: false,
//     school: true,
//     store: false,
//   },
//   {
//     gym: false,
//     school: true,
//     store: true,
//   },
// ]
// reqs = ['gym', 'school', 'store']

//testing the code in pc. 
// console.log(apartmentHunting(blocks, reqs))

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;