import React from "react";
import ListItem from "./ListItem";
import { makerStyles } from "./guitarStyles";

class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.guitarName = React.createRef(null);
        this.guitarMaker = React.createRef(null);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {
        e.preventDefault();

        let title = this.guitarName.current.value;
        let text = this.guitarMaker.current.value;

        this.props.onSubmit({
            title,
            text
        });

        this.guitarName.current.value = '';
        this.guitarMaker.current.value = '';
        this.guitarName.current.focus();

    }

    render() {
        return (
            <>
                <div className="pt-3 pb-2">
                    <form>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control-inline"
                                ref={this.guitarName} 
                            />
                        </div>
                        
                        <div className="mb-3">
                            <select
                                ref={this.guitarMaker}
                            >
                                <option value=''></option>
                                <option style={makerStyles.prs} value='PRS'>PRS</option>
                                <option style={makerStyles.fender} value='Fender'>Fender</option>
                                <option style={makerStyles.gibson} value='Gibson'>Gibson</option>

                            </select>
                        </div>
                        <button className="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            {this.props.buttonText}
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default AddItem;
