import { STORY_ARCHIVE } from '../constants/actions';

const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id
});

export { doArchiveStory };
