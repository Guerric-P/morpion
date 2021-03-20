import { useState } from 'react';

export default function Form() {
    const [state, setState] = useState({
        isGoing: true,
        numberOfGuests: 2
    });

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        console.log(state);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Participe :
            <input
                    name="isGoing"
                    type="checkbox"
                    checked={state.isGoing}
                    onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Nombre d'invités :
            <input
                    name="numberOfGuests"
                    type="number"
                    value={state.numberOfGuests}
                    onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}