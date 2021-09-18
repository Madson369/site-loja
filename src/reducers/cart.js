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

      teste = teste.map((p) => {
        if (p.livro.id === action.payload.livro.id && p.units > 1) {
          p.units--;
        }

        return p;
      });
      console.log(teste);
      return teste;

    case "REMOVER":
      let removed = [...state];

      removed.splice(action.payload, 1);

      return removed;

    case "LIMPAR":
      let limpo = [...action.payload];

      return limpo;

    default:
      return state;
  }
};

export default cartReducer;
