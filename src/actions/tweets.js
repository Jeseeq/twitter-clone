export const LOAD_TWEETS = 'LOAD_TWEETS' 
export const ADD_TWEET = 'ADD_TWEET'
export const ADD_COMMENT = 'ADD_COMMENT'

export function loadTweets(data) {
  return {
    type: LOAD_TWEETS,
    payload: data
  }
}
export function addTweet(user, text) {
  return {
    type: ADD_TWEET,
    payload: text,
    user: user
  }
}
export function addComment(user, text, id) {
  return {
    type: ADD_COMMENT,
    payload: text,
    user,
    id
  }
}
