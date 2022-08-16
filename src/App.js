import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  return (
    <div className='container-categories'>
      {categories.map(({ title, id }) => (
        <div key={id} className='container-category'>
          <div className='background-image'></div>
          <div className='container-category-body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
