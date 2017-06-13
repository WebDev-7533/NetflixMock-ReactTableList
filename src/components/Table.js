import React, {Component, PropTypes} from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }

    addNew(){
        this.props.actions.addNew(this.props.type);
    }

    updateRow(e, id) {
        console.log(e.target.value)
        this.props.actions.updateRow(e.target.value, id, this.props.type);
    }
    finishEdit(id) {
        this.props.actions.editRow(id, this.props.type, false);
    }

    editRow(id) {
      this.props.actions.editRow(id, this.props.type, true);
    }

    deleteRow(id) {
        this.props.actions.deleteRow(id, this.props.type);
    }

    render() {
        const thead = [];
        const that = this;
        console.log(this.props);
        for (let key in this.props.data[0]) {
            thead.push(<th>{key}</th>)
        }
        const tableRow = this.props.data.map((row, i) => {
                return (
                    <tr>
                        <td>{row.edit ? <input type="text" onBlur={that.finishEdit.bind(this, row.id)} onChange={that.updateRow.bind(this, event, row.id)} defaultValue={row.title} /> : row.title}</td>
                        <td>{row.id}</td>
                        <td><img className="img-responsive" src={row.img}/></td>
                        <td><button className="btn btn-default" onClick={that.editRow.bind(this, row.id)}><span className="glyphicon glyphicon-edit"></span></button></td>
                        <td><button className="btn btn-default" onClick={that.deleteRow.bind(this, row.id)}>&times;</button></td>
                    </tr>
                )
            }
        );
        return (
            <div>
                <table className="table  table-bordered data-table">
                    <thead>
                    <tr>
                        {thead}
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableRow}
                    </tbody>
                </table>
                <button onClick={this.addNew.bind(this)} className="btn btn-primary addBtn">+</button>
            </div>
        )
    }
}