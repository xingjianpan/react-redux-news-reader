import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addFilter } from '../actions';

class AddCategoryFilter extends Component {

  handleFormSubmit(formProps) {
    if ('categoryName' in formProps && formProps['categoryName'].trim().length !== 0) {
      this.props.addFilter(formProps.categoryName);
      this.props.reset(); //reset form and clear fields
    }
    return
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props)

    return (
      <div>
        <p>过滤掉不想看的新闻类别, 双击取消过滤</p>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="categoryName" label="categoryName" component="input" type="text" />
          <button type="submit">添加</button>
        </form>

        <div>
          <ul>
            {this.props.filters.map(item => { return <li key={item}>{item}</li> })}
          </ul>
        </div>
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

export default connect(mapStateToProps, { addFilter })(AddCategoryFilter);
