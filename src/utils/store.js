import { writable, get } from 'svelte/store';
import FetchQL from 'fetchql';
import { bag, DATA, PICK } from './bag';

// --------------------------------------------------------[ mutable store ]

const storeDef = {
  loading: false,
  error: undefined,
  id: undefined,
  list: [],
  pick: 0,
  dealer: undefined,
};

const createStore = def => {
  const keys = Object.keys(def);
  const state = {};
  keys.map(key => {
    state[key] = writable(def[key]);
  });
  return state;
};

const state = createStore(storeDef);

// --------------------------------------------------------[ utility ]

const clearStore = (loading = false) => {
  state.loading.set(loading);
  state.error.set(undefined);
  state.pick.set(0);
  state.id.set(undefined);
  state.list.set([]);
  state.dealer.set(undefined);
};

// --------------------------------------------------------[ processing ]

const processData = next => {
  if (next) {
    const { pick, dealer, id, list, loading } = state;
    const indx = get(pick);

    if (indx != undefined) {
      dealer.set(next.list[indx]);
    } else {
      dealer.set(undefined);
    }

    id.set(next.id);
    list.set(next.list);
    loading.set(false);
  } else {
    id.set(undefined);
    list.set([]);
    loading.set(false);
  }
};

const processPick = next => {
  const { list, pick, dealer } = state;
  const dealers = get(list);

  if (dealers && next !== undefined) {
    pick.set(next);
    dealer.set(dealers[next]);
  } else {
    pick.set(0);
    dealer.set(undefined);
  }
};

// --------------------------------------------------------[ graphQL ]

var Client = new FetchQL({
  url: 'https://gt-forza.vercel.app/graphql',
});

const GET_UUID = `
  query Uuid($count: Int!) {
    uuid(count: $count)
  }
`;
const GET_DEALERS = `
  query Solution($id: String!) {
    solution(id: $id) {
      id
      data {
        dealers {
          dealerId
          name
          vehicles {
            vin
            year
            make
            model
            color
          }
        }
      }
    }
  }
`;

// --------------------------------------------------------[ actions ]

const initApp = () => {
  clearStore();
  // this retrieves the last data we stored in the bag...
  const data = bag.get(DATA);
  const pick = bag.get(PICK);

  if (data) {
    processData(data);
    if (pick) {
      processPick(pick);
    }
  } else {
    refresh();
  }
};

const refresh = () => {
  clearStore(true);

  bag.store(PICK, 0);

  const count = 1;

  // NOTE:  step 1 - fetch a UUID...
  Client.query({
    operationName: 'Uuid',
    query: GET_UUID,
    variables: { count },
  }).then(response => {
    const id = response.data.uuid[0];

    // NOTE:  step 2 - fetch a solution with this id...
    Client.query({
      operationName: 'Solution',
      query: GET_DEALERS,
      variables: { id },
    }).then(response => {
      const list = JSON.parse(
        JSON.stringify(response.data.solution.data.dealers),
      );
      const solution = { id, list };

      bag.store(DATA, solution);

      processData(solution);
    });
  });
};

const updatePick = pick => {
  bag.store(PICK, pick);

  processPick(pick);
};

const actions = {
  initApp,
  refresh,
  updatePick,
};

export { state, actions };
export default state;
