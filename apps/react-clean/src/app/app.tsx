import { Provider } from 'react-redux';

import { appStoreImplementation } from '@clean-archi-front-end/react-clean/storage';
import { CounterView } from '@clean-archi-front-end/counter/ui-react';

export function App() {
  return (
    <Provider store={appStoreImplementation}>
      <CounterView />
    </Provider>
  );
}

export default App;
