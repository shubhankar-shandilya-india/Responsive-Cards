import PropTypes from 'prop-types';

let data;
try {
  data = require('./data.json');
} catch (error) {
  console.error('Error loading data:', error);
}

const Card = ({ id, title, total_items, total_weight, status }) => (
    <div key={id} className='bg-white p-4 rounded-md border-2 border-[#ec955f] relative'>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <p className="text-sm mb-2">Total Items: <strong>{total_items}</strong></p>
          <p className="text-sm mb-2">Total Weight:<strong> {total_weight}</strong></p>
          <p className="text-sm"><strong>Status:</strong> <span className={status === 'SHIPPED' ? 'text-green-500 text-md' : 'text-red-500 text-md'}><strong>{status}</strong></span></p>
        </div>
        <button className="bg-[#ff5858] text-white px-2 rounded-md absolute right-0 -mr-2 py-5">Update dimension</button>
      </div>
    </div>
  );
  
  

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total_items: PropTypes.number.isRequired,
  total_weight: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

const Cards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {data.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default Cards;