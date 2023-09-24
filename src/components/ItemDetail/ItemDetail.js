import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail';

const ItemDetail = ({ name, img }) => {
  return ( 
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
             <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <footer className='ItemFooter'>
         <ItemCount initial={1} stock={25} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
        </footer>
    </article>
  )
}

export default ItemDetail