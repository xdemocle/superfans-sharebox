import React from 'react'
import globalHook, { Store } from 'use-global-hook'

export type Reward = {
  id: string
  value: string
  timestamp: number
  visitorName?: string
}

export type MyState = {
  rewards: Reward[]
}

export type MyActions = {
  setRewards: (rewards: Reward[]) => void
}

const initialState: MyState = {
  rewards: []
}

const actions = {
  setRewards: (store: Store<MyState, MyActions>, rewards: Reward[]) => {
    store.setState({ rewards })
  }
}

export default globalHook<MyState, MyActions>(React, initialState, actions)
