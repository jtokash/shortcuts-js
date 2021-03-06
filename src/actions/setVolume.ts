import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Volume Action. Sets the system volume.
 *
 * ```js
 *  setVolume({
 *    volume: 50,
 * });
 * ```
 */

const setVolume = (
  options: {
    /** Number between 0 & 100 to set the volume to */
    volume ?: number,
  },
): WFWorkflowAction => {
  const {
    volume = 50,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
    WFWorkflowActionParameters: {
      WFVolume: volume / 100,
    },
  };
};

export default setVolume;
