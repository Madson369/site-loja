export const receber = (objeto) => {
    return {
      type: 'RECEBER',
      payload: objeto
    };
  };


  export const esvaziar = (objeto) => {
    return {
      type: 'ESVAZIAR',
      payload: objeto
    };
  };