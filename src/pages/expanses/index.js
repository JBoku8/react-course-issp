import Theme from '../../components/theme/theme';
import { withAuth } from '../../hoc';
import ExpanseProvider from '../../providers/ExpanseProvider';
import Expanses from './Expanses';

function ExpansesPage(props) {
  return (
    <Theme>
      <ExpanseProvider>
        <Expanses />
      </ExpanseProvider>
    </Theme>
  );
}

export default withAuth(ExpansesPage);
