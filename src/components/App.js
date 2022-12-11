import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStats = event => {
    const targetName = event.currentTarget.name;

    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage() {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const message = 'There is no feedback';
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onUpdateStats}
            options={['good', 'neutral', 'bad']}
          />
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
