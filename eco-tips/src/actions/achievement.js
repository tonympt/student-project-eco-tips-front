export const SEND_ACHIEVEMENT = 'SEND_ACHIEVEMENT';

export const sendAchievement = (formValues) => ({
  type: SEND_ACHIEVEMENT,
  formValues,
});
