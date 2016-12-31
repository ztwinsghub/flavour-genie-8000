/** searchs for and returns sorted and clean results
 *
 * @params [String] flavours flavours to match
 * @params [Object] juices juices with flavours to match
 * returns [String] matching juice ids
 */
export function searchJuices(flavours, juices) {

  // look at all of the juice flavours
  const rawResults = relevanceAlgorithm(flavours, juices)

  // sort results in descending relevance
  const sortedResults = sortResultsRelevance('descending', rawResults)

  // pull out juices with a counter of 0
  const results = removeIrrelevant(0, sortedResults)

  return results

}

/*
 * find relevant juices. Relevant meaning more
 * juice flavours matching flavours
 *
 * @params [Object] flavours to search for
 * @params [Object] juices set to search
 * returns [Object] results of search
 */
function relevanceAlgorithm(flavours, juices) {
  const results = juices.map((juice) => {

    const { _id } = juice

    // counts flavour matches
    const relevance = sumsFlavourMatches(flavours, juice.flavours)

    const relevantJuice = {
      _id,
      relevance,
    }

    return relevantJuice

  })

  return results
}

// data extraction helpers

// results helpers

/* counts the number of times the juice flavour matches with
 * flavours
 *
 * @params [String] flavours to match with juiceFlavour
 * @params String juiceFlavour the juice's flavour to match flavours
 * results Number number of flavour matches
 */
function countFlavourMatches(flavours, juiceFlavour) {
  const count = flavours.reduce((result, flavour) => {

    // count match
    if (flavour === juiceFlavour) {
      return (result + 1)
    }

    return result
  }, 0)

  return count
}

/* removes irrelevant results from a set of results
 *
 * @param Number amount of relevance
 * @param [Object] rawResults set of relevant and irrelevant results
 * returns [String] relevent results from a results set
 */
function removeIrrelevant(amount, rawResults) {
  const relevant  = rawResults.reduce((results, rawResult) => {
    const {
      _id,
      relevance
    } = rawResult

    // find juices with no relevance
    if (relevance <= amount) {
      return results
    }

    // add juice _id to results
    results.push(_id)

    return results
  }, [])

  return relevant
}


/* sorts results by relevance specified by order
 *
 * @params String order how the results will be ordered
 * @params [Object] rawResults results set that will be sorted
 */
function sortResultsRelevance(order, rawResults) {
  const sortedResults = rawResults.sort((a, b) => {
    switch(order) {
      case 'descending':
      default:
        return b.counter - a.counter
    }
  })

  return sortedResults
}

/* sums flavour matches of the juice
 *
 * @param [String] flavours flavours we want to match
 * @param [Object] juiceFlavours all the flavours of a juice
 * results Number sum of flavour matches within juice flavours
 */
function sumsFlavourMatches(flavours, juiceFlavours) {
  const total = juiceFlavours.reduce((result, juiceFlavour) => {

    // look at all of the input flavours
    const inputMatches = countFlavourMatches(flavours, juiceFlavour.name)

    return (result + inputMatches)
  }, 0)

  return total
}