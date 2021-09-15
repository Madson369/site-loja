export const adicionar = (objeto) => {
    return {
      type: 'ADICIONAR',
      payload: objeto
    };
  };
  
  export const atualizar = (objeto) => {
    return {
      type: 'ATUALIZAR',
      payload: objeto
    };
  };


  export const subtrair = (objeto) => {
    return {
      type: 'SUBTRAIR',
      payload: objeto
    };
  };
