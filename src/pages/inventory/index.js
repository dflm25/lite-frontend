import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as globalActions from '../../redux/stores/app/actions';
import * as inventoryActions from '../../redux/stores/inventories/actions';
import * as companyActions from '../../redux/stores/companies/actions';

// View component
import View from './view';

export const mapStateToProps = (state) => ({
  loading: state.App.loading
});

export const mapDispatchToProps = (dispatch) => ({
  globalAction: bindActionCreators(globalActions, dispatch),
  inventoryActions: bindActionCreators(inventoryActions, dispatch),
  companyActions: bindActionCreators(companyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
