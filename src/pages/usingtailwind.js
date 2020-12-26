import React from "react"
import tw, { styled } from "twin.macro"

const Container = props => (
  <div className={`bg-blue-200 w-1/2 p-20`} {...props} />
)

export default () => (
  <Container>
    <h1
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-20 rounded-lg text-white text-center uppercase text-3xl text-opacity-75`}
    >
      {" "}
      This is a 3xl text
    </h1>
  </Container>
)
