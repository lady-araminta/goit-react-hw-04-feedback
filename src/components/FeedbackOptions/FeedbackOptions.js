import PropTypes from 'prop-types';
import { Button, Cont } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Cont>
      {options.map(option => {
        const label = option.slice(0, 1).toUpperCase() + option.slice(1);
        return (
          <Button key={option} onClick={onLeaveFeedback} name={option}>
            {label}
          </Button>
        );
      })}
    </Cont>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
