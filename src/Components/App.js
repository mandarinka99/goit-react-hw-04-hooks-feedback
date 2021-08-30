import { useState } from "react";
import Container from "./container/Container";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notifications from "./notifications/Notifications";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const AppNew = () => {
  const [feedback, setFeedback] = useState(initialState);

  const onLeaveFeedback = (key) => {
    setFeedback({ ...feedback, [key]: feedback[key] + 1 });
  };

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((acc, item) => acc + item, 0);

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      return Math.round((feedback.good / countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  const options = Object.keys(feedback);
  return (
    <Container>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications message="No feedback given"></Notifications>
        )}
      </Section>
    </Container>
  );
};

export default AppNew;
