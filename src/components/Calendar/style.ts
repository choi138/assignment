import { colors } from 'src/css';

export const calendarCss = `
  .rdp-day_outside {
    opacity: 1;
  }

  .past-days{
    color: rgba(0, 0, 0, 0.5);
  }

  .rdp {
    margin: 0;
  }

  .rdp-day_selected {
    background-color: transparent;
  }

  .rdp-day_selected:not(.past-days) {
    color: ${colors.black};
  }

  .rdp-day_selected:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  .rdp-day_selected:hover:not(.past-days) {
    color: ${colors.black};
  }

  .rdp-button:hover:not([disabled]) {
    background-color: ${colors.primaryHover};
  }

  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: ${colors.primaryHover};
  }
  
  .selected-week{
    border: 2px solid ${colors.primary};
    border-left:0px;
    border-right:0px;
    border-radius: 0px;
  }

  .last-day-of-week{
    border-right: 2px solid ${colors.primary};
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .first-day-of-week{
    border-left: 2px solid ${colors.primary};
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;
