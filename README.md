# Redux = Reducer + Flux

[Tutorial](https://www.robinwieruch.de/react-redux-tutorial)

Unidirectional data flow: View -> Action -> Reducer(s) -> Store -> View

## App Functionality

1. Searching for stories
The connected component dispatches an action that activates the saga. The side-effect of the saga is the fetching process of the stories by search term from the Hacker News API. Once the request succeeds, another action gets dispatched and captured in the storyReducer to finally store the stories. When using Redux Saga, it is essential to wrap your head around the subject that actions can be used to activate sagas but don't need to be evaluated in a reducer. It often happens that another action which is dispatched within the saga is evaluated by the reducers.

## New Action Workflow

1. Define Action type in constants/
2. Add Action type in actions/
3. Add Action to Saga
4. Add Action to Reducer
5. Select the Action in Selector
6. Handle Action with Component

### Connected Components

Are connected to the redux store.

### Presentational Components

Are not connected to the redux store.
