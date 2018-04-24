/**
 *
 * Asynchronously loads the component for MyProfilePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
