import { update } from './../redux/actions/form';
import { connect } from 'react-redux';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';

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
            <FormControlLabel
                control={<Checkbox
                    name="isGoing"
                    type="checkbox"
                    checked={form.isGoing}
                    onChange={handleInputChange} />}
                label="Participe"

            />

            <TextField
                    name="numberOfGuests"
                    type="number"
                    label="Nombre d'invités"
                    value={form.numberOfGuests}
                    onChange={handleInputChange} />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);