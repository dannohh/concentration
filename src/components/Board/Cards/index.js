import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import "./Cards.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)
      const cardsWithDups = cards.concat(Array.from(cards))

      const cardsWithIDs = cardsWithDups.map((card, i) => {
        const cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })

      setCards(cardsWithIDs)
    })()
  }, [])

  const flipHandler = (event) => {
    console.log(event.target)
  }

  const renderCards = () => cards.map(({ image, suit, value }, i) => (
    <Card
      image={image}
      suit={suit}
      value={value}
      handler={flipHandler}
      key={i}
    />
  ))

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
