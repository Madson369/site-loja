const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADICIONAR":
      return (state = [...state, action.payload]);

    case "ATUALIZAR":
      let newstate = [...state];
      newstate = newstate.map((p) => {
        if (p.livro.id === action.payload.livro.id) {
          p.units++;
        }

        return p;
      });
      console.log(newstate);
      return newstate;

    case "SUBTRAIR":
      let teste = [...state];
      console.log('111')
      teste = teste.map((p) => {
        if (p.livro.id === action.payload.livro.id) {
          p.units = p.units-1;
        }

        return p;
      });
      console.log(teste);
      return teste;

    default:
      return state;
  }
};

export default cartReducer;
