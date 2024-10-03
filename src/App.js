import React, { Component } from 'react';

class R073_ReactRef extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }

  RefFocus = (e) => {
    var a= this.InputRef1.current.val();
    var b= this.InputRef2.current.val();
    var c = a+b;
    console.log(a);
  }

  JavascriptFocus() {
    document.getElementById('id').focus();
  }

  render() {
    return (
      <>
        <input id="id1" type="text" ref={this.InputRef1} />
        <input id="id2" type="text" ref={this.InputRef2} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
        <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
      </>  
    )
  }
}

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R073_ReactRef/>
    </div>
  );
}

export default App;