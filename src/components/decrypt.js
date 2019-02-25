import React from 'react';


class DecryptLayer extends React.Component {
    render() {
        return (
            <div className="right">
                <h3>DECRYPT </h3>
                <h2>Input</h2>
                <form onSubmit={this.props.decryptText}>
                <p> <textarea name="input_field2" placeholder="Enter text to be decrypted here..."/> </p>
                <p> <button name="decrypt"> decrypt tex </button> </p>
                </form>
                <h2> Output : </h2>
                <textarea name="output" value={this.props.output}  placeholder="encrypted string output" />
            </div>
        );
    }
    };
export default DecryptLayer;
    