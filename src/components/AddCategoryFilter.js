import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PlusIcon from 'react-icons/lib/fa/plus';
import { addFilter, removeKeywordFromFilter } from '../actions';


class AddCategoryFilter extends Component {

  handleFormSubmit(formProps) {
    if ('categoryName' in formProps && formProps['categoryName'].trim().length !== 0) {
      this.props.addFilter(formProps.categoryName);
      this.props.reset(); //reset form and clear fields
    }
    return
  }

  handleRemoveKeywordFromFilter(text) {
    this.props.removeKeywordFromFilter(text);
  }
  renderFormControl() {
    return (
      <div>
        <ul>
          {this.props.filters.map((item) => {
            return (
              <div key={item}>
                <li onClick={() => { this.handleRemoveKeywordFromFilter(item); }}>
                  {item}
                </li>
              </div>
            );
          })
      }
        </ul>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="col-xs-8">
          <p>过滤掉不想看的新闻类别, 单击取消过滤</p>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name="categoryName" label="categoryName" component="input" type="text" className="form-control" />
            <button type="submit"><PlusIcon /></button>
          </form>
        </div>
        {this.renderFormControl()}
      </div>
    );
  }
}

AddCategoryFilter = reduxForm({
  form: 'AddCategoryForm', // a unique name for this form
})(AddCategoryFilter);


const mapStateToProps = (state) => {
  const { filters } = state.newsListFilter;
  return {
    filters,
  };
};

export default connect(mapStateToProps,
  { addFilter, removeKeywordFromFilter })(AddCategoryFilter);
