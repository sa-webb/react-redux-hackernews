import deepFreeze from 'deep-freeze';
import storyReducer from './storyReducer';
describe('story reducer', () => {
  it('adds stories to the story state', () => {
    const stories = ['a', 'b', 'c'];
    const action = {
      type: 'STORIES_ADD',
      stories,
    };
    const previousState = { stories: [], error: null };
    const expectedNewState = { stories, error: null };
    deepFreeze(previousState);
    const newState = storyReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});