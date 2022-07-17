import { FormattedMessage } from 'react-intl';

const translate = (id, value = {}) => {
  return <FormattedMessage id={id} value={value} />;
};

export default translate;
