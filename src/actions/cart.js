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


  export const remover = (objeto) => {
    return {
      type: 'REMOVER',
      payload: objeto
    };
  };


  export const limpar = (objeto) => {
    return {
      type: 'LIMPAR',
      payload: objeto
    };
  };


