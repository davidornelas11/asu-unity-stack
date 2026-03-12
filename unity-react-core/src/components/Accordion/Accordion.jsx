import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useAccordionToggle } from '@asu/shared/hooks';
import { Button } from '../Button';

export const Accordion = ({
  children,
  className,
  heading,
  headingLevel = 'h4',
  id,
  onToggle,
  open = false,
  ...rest
}) => {
  const [isOpen, toggleOpen] = useAccordionToggle(open);

  const handleToggle = () => {
    toggleOpen();
    if (onToggle) {
      onToggle(!isOpen);
    }
  };

  const headingClass = classNames('accordion-heading', className);

  return (
    <div className="accordion" {...rest}>
      <div className={headingClass} id={id}>
        <Button
          className="accordion-toggle"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
        >
          <div className="accordion-heading-content">
            {headingLevel === 'h4' ? (
              <h4 className="accordion-title">{heading}</h4>
            ) : (
              <h3 className="accordion-title">{heading}</h3>
            )}
          </div>
        </Button>
      </div>
      <div
        className="accordion-content"
        id={`accordion-content-${id}`}
        aria-labelledby={id}
        hidden={!isOpen}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  /**
   * The content to display inside the accordion body
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Additional class names to apply to the accordion
   */
  className: PropTypes.string,
  
  /**
   * The text to display as the accordion heading
   */
  heading: PropTypes.string.isRequired,
  
  /**
   * The HTML heading level to use (h3 or h4)
   * @default 'h4'
   */
  headingLevel: PropTypes.oneOf(['h3', 'h4']),
  
  /**
   * The id of the accordion (used for accessibility)
   */
  id: PropTypes.string,
  
  /**
   * Callback function called when the accordion is toggled
   * @param {boolean} isOpen - Whether the accordion is now open
   */
  onToggle: PropTypes.func,
  
  /**
   * Whether the accordion is initially open
   * @default false
   */
  open: PropTypes.bool
};

Accordion.defaultProps = {
  className: '',
  headingLevel: 'h4',
  id: '',
  onToggle: null,
  open: false
};
