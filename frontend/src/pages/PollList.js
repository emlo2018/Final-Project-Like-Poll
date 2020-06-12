import React from 'react'
import NavbarLight from '../components/NavBar'
import { ThemesDiv, ThemeInfo } from '../lib/form'
import { ThemeCard } from '../components/ThemeCard'
import { useState, useEffect } from 'react'
import { ListContainer } from '../lib/container'
import { useDispatch, useSelector } from 'react-redux'
import { getpolls } from '../reducers/user'

export const PollList = () => {
  const dispatch = useDispatch()
  const POLL_URL = 'http://localhost:8080/polls'
  const [polls, setPolls] = useState([])
  useEffect(() => {
    fetch(POLL_URL, { method: 'GET' })
      .then(res => res.json())
      .then(json => {
        setPolls(json)
      })
      .then(console.log(polls))
  }, [])
  // useEffect(() => {
  //   // dispatch thunk here that fetches all the exiting polls.
  //   dispatch(getpolls())
  // }, [dispatch])
  // const polls = useSelector((store) => store.user.login.ongoingPolls)
  // console.log(polls)

  return (
    <ListContainer>
      <NavbarLight />
      <ThemesDiv>
        <section>
          {
            polls.map(poll => (
              <ThemeCard {...poll} />
            ))
          }
        </section>
      </ThemesDiv>
    </ListContainer>
  )
}

export default PollList