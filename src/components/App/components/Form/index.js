import React from 'react';
import { FormattedMessage } from 'react-intl';

const Form = () => {
  return (
    <form>
      <FormattedMessage id="form.name.placeholder">
        {(placeholder) => <input type="text" name="name" placeholder={placeholder} />}
      </FormattedMessage>

      <select>
        <FormattedMessage id="form.select.us">
          {(us) => <option value={1}>{us}</option>}
        </FormattedMessage>
        <FormattedMessage id="form.select.french">
          {(french) => <option value={2}>{french}</option>}
        </FormattedMessage>
        <FormattedMessage id="form.select.ukraine">
          {(ukraine) => <option value={3}>{ukraine}</option>}
        </FormattedMessage>
        <FormattedMessage id="form.select.other">
          {(other) => <option value={4}>{other}</option>}
        </FormattedMessage>
      </select>
    </form>
  );
};

export default Form;
