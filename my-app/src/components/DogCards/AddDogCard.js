import Dog from './Dog';

const AddDogCard = ({ dogs, onDelete, onAdd }) => {

    return(
        <div>{dogs.map((dog) => (
            <Dog key={dog.id} dog={dog} onDelete={onDelete} onAdd={onAdd} />
        ))}</div>

    )
}
export default AddDogCard