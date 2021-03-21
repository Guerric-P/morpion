import { useState } from 'react';
import { update } from './../redux/actions/form';
import { connect } from 'react-redux';

const mapStateToProps = ({ form }) => ({
    form
});

const mapDispatchToProps = {
    update
}

const Form = ({ form, update }) => {

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        update(name, value);
    }

    function handleSubmit(event) {
        console.log(form);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Participe :
            <input
                    name="isGoing"
                    type="checkbox"
                    checked={form.isGoing}
                    onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Nombre d'invités :
            <input
                    name="numberOfGuests"
                    type="number"
                    value={form.numberOfGuests}
                    onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);