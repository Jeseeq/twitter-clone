export const LOAD_TWEETS = 'LOAD_TWEETS' 
export const ADD_TWEET = 'ADD_TWEET'

export function loadTweets(data) {
  return {
    type: LOAD_TWEETS,
    payload: data
  }
}
export function addTweet(text, user) {
  return {
    type: ADD_TWEET,
    payload: text,
    user: user
  }
}
export function addComment(text, user) {
  return {
    type: ADD_COMMENT,
    payload: text,
    user: user
  }
}
