export default {
  async index(numOfCards = 12) {
    const deckRes = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    )

    const { deck_id } = await deckRes.json()

    const cardsRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numOfCards}`
    )

    return await cardsRes.json()
  },

  // TODO: Refactor this for proper implementation of Repository API pattern!
  async addScore(newScoreDeets) {
    const addScoreRes = await fetch("http://localhost:5000/scores/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScoreDeets)
    })

    return await addScoreRes.json()
  }
}
