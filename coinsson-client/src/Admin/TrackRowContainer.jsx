import React from 'react';
import { TrackRowWrapper } from './styles';
import TrackRow from './TrackRow';

const TrackRowContainer = ({ tracks, updateTrack, quests, updateQuests }) => {

  const handleClick = (trackId, action) => {
    const track = tracks.find(t => t.id === trackId);

    if (action === 'toggleVisibility') {
      updateTrack({
        ...track,
        hidden: !track.hidden,
      });
    }
    if (action === 'toggleHighlight') {
      // need to update all quests on this track
      const editedQuests = quests
        .filter(q => q.trackId === trackId)
        .map(q => ({
          ...q,
          highlight: !q.highlight,
        }));
      updateQuests(editedQuests);
    }
  };

  return (
    <div>
      <h2>Do great things with tracks</h2>
      <TrackRowWrapper>
        {tracks.map((track, key) => (
          <TrackRow handleClick={handleClick} track={track} quests={quests.filter(q => q.trackId === track.id)} key={key} />
        ))}
      </TrackRowWrapper>
    </div>
  );
};

export default TrackRowContainer;
