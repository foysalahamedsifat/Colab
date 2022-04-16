import { ProductProvider } from './components/ProductContext/ProductContext';
import TableData from './components/table/table'

function App() {
  return (
    <>
      <ProductProvider> 

      <TableData />
      </ProductProvider>
    </>
  );
}

export default App;
