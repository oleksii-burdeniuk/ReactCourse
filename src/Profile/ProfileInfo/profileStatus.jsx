import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode() {
        this.setState({
            editMode: true,
            status: this.props.status,
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, PrevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {


        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status || 'NO STATUS'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} type="text" />
                    </div>}
            </div >
        )
    }
}
export default ProfileStatus;