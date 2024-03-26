import './App.css';
import SingleProductView from './SingleProductView';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className='col-6 product-view-image-bg pb-5'>
          <SingleProductView />
        </div>
      </div>
    </div>
  );
}

export default App;
