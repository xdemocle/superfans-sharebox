import React from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import find from 'lodash.find'
import useGlobal, { Reward } from './useGlobal'

interface Props {
  username: string
}

const useRewards = (props: Props) => {
  const [globalState, globalActions] = useGlobal()
  const { username } = props
  let rewardsContainer: Reward[] = reactLocalStorage.get(
    `container-${username}`
  )
    ? JSON.parse(reactLocalStorage.get(`container-${username}`))
    : []

  // write it globally
  if (
    rewardsContainer &&
    !!rewardsContainer.length &&
    !globalState.rewards.length
  ) {
    globalActions.setRewards(rewardsContainer)
  }

  const setReward = (id: string, value: string) => {
    const existentReward = find(rewardsContainer, { id })

    if (existentReward) {
      existentReward.value = value
    } else {
      rewardsContainer.push({ id, value })
    }

    // Persist it
    reactLocalStorage.set(
      `container-${username}`,
      JSON.stringify(rewardsContainer)
    )
    globalActions.setRewards(rewardsContainer)
  }

  const hasVotedAlready = (id: string) => {
    const existentReward = find(rewardsContainer, { id })

    return !!existentReward
  }

  return { rewards: rewardsContainer, setReward, hasVotedAlready }
}

export default useRewards
