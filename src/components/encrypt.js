import React from 'react';

class EncryptLayer extends React.Component {
    render() {
        return (
            <div className="left">
                <h3>ENCRYPT </h3>
                <h2>Input</h2>
                <form onSubmit={this.props.encryptText}>
                    <p> <textarea name="input_field" placeholder="Enter text to be modified here..."/> </p>
                    <p> <button name="encrypt"> encrypt text </button> </p>
                </form>
                <h2> Output : </h2>
                <textarea name="output" value={this.props.output}  placeholder="encrypted string output" />
            </div>
        );
        }
    };
export default EncryptLayer;
    