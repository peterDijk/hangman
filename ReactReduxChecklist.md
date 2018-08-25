# React - Redux Checklist

## SETUP

1. create-react-app appName
2. cd myApp
3. yarn add redux react-redux
4. Create at least one reducer
 - It's a function
 - Should return an initial state
 - Should export it
5. Create a store.js in the src/ folder
 - import reducer, createStore
 - call createStore
 - export store
6. Provide the store to your App
  - in index.js  import Provider component
  - Wrap your App with the Provider
  - import the store you created
  - Pass it to the Provider
7. Add redux-devtools as an enhancer in store.js to use redux devtools

## Check
 - yarn start and see if we've got any errors
 - Check redux devtools to see if we have an initial state

8. Celebrate

## mapStateToProps (for initial state)

9. use `connect` to give your component access to the state
 - Import connect
 - `Decorate` your component with connect

### Check: 
- console.log(this.props), you should see the dispatch function
10. Write a mapStateToProps function
 - It will receive state as the first argument
 - pass it to connect (so it gets called on updates)
 - write a console log statement to see if it gets called
 - The function should return an object with a part of your state
 - This object should get added to the props of this component

 ### Check: 
  - can you console.log the state? 
  - is the part of your state added to the props? (log(this.props))

11. Render the props you got from the state {this.props.something}

12. Celebrate

13. Dispatch
 - Check if your component is connected
 - use this.props.dispatch to dispatch an action

### Check:
 - Did redux-devtools register your action? 

14. Handle the action in the reducer
 - console.log(state, action) in your reducer to check if you have the right information
 - Add a case to handle this type of action
 - Return a new state (probably changed in some way)

### Check:
 - in redux-devtools if state has changed

15. (mapStateToProps) again 