import React from 'react';
import { AchievementRowWrapper, RowWrapper, ButtonWrapper, Button } from './styles';

const AchievementRow = ({ handleClick, achievement }) => {
  return (
    <RowWrapper justifyContent="space-between">
      <p>{achievement.achievementTitle}</p>
      <ButtonWrapper>
        <Button id="highlight-quest-btn" onClick={() => handleClick(achievement.id)}>
          {achievement.done ? 'Peruuta' : 'Myönnä'}
        </Button>
      </ButtonWrapper>
    </RowWrapper>
  );
};

const AchievementsContainer = ({ achievements, updateAchievements }) => {

  const handleClick = (achievement) => {
    const changedAchievement = {
      ...achievement,
      done: !achievement.done
    };
    updateAchievements([changedAchievement]);
  };

  return (
    <div>
      <h2>Achievements</h2>
      <AchievementRowWrapper>
        {achievements.map((achievement, key) => (
          <AchievementRow handleClick={() => handleClick(achievement)} achievement={achievement} key={key} />
        ))}
      </AchievementRowWrapper>
    </div>
  );
};

export default AchievementsContainer;
