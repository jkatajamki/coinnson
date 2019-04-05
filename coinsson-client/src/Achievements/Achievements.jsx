import React from 'react';
//import QuestCard from './QuestCard';
import PlaneLoader from '../Loader/Loader';
import { Cards, CardContainer, CardHeader, CardBody } from '../QuestCards/styles';
import { StyledIcon } from '../ProgressBar/styles';
import { achievementIcons } from '../ProgressBar/icon-mapping';

const AchievementCard = (props) => {
  const { achievement } = props;
  // this is backwards because we're using quest-related domain language
  // TODO:
  const style = achievement.done
    ? 'available'
    : 'done';
  return (
    <CardContainer styleName={style}>
      <CardHeader styleName={style}>
        <h4>{achievement.achievementTitle}</h4>
        <StyledIcon>
          {achievementIcons[achievement.achievementTitle]}
        </StyledIcon>
      </CardHeader>
      <CardBody styleName={style}>
        <p>{achievement.achievementMessage}</p>
      </CardBody>
    </CardContainer>
  )
}

const Achievements = ({ achievements }) => {
  if (!achievements) {
    return (<PlaneLoader />)
  }

  return (<div>
    <h2>Achievements</h2>
    <Cards>
      {achievements.map(achievement =>
        <AchievementCard key={achievement.id} achievement={achievement} />
      )}
    </Cards>
  </div>)
}

export default Achievements;
