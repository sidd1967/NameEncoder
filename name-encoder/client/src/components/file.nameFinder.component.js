import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';
import axios from 'axios';
import '../fileHandler.css';
import { Link, animateScroll as scroll } from "react-scroll";
import instructs from "../inst.PNG";

const Todo = props => (
  <tr>
    <td>{props.todo.ID}</td>
    <td>{props.todo.SurnameCode}</td>
    <td>{props.todo.Surname}</td>
    <td>{props.todo.FirstnameCode}</td>
    <td>{props.todo.Firstname}</td>

  </tr>
)

class FileNameFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: [],
      finalSet: [],
      genCode: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("comes to handleChange");
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      try {
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        /* Update state */
        this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
          console.log(JSON.stringify(this.state.data, null, 2));
          console.log(this.state);
          this.handleEncoding();
        });
      }
      catch (err) {
        window.alert('Invalid File Uploaded');
        window.location.reload(false);
      }

    };
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }

  handleEncoding = () => {
    const data = this.state.data;
    console.log("COMES TO HANDLE ENCODING");
    const totalProps = data.reduce((a, obj) => a + Object.keys(obj).length, 0);
    const length = data.reduce((max, x) => (x.ID > max) ? x.ID : max, 0)
    console.log("Length == " + length);
    var isCodePresent = false;
    var isIDPresent = false;
    var scode;
    var fcode;
    var code;
    var fullCode = [];

    if (length) {
      for (var p = 0; p < length; p++) {
        if (data[p].hasOwnProperty("Code")) {
          isCodePresent = true;
        }

        if (data[p].hasOwnProperty("ID")) {
          isIDPresent = true;
        }
      }
    }
    else {
      window.alert('Upload Failed.\nThis is due to Incorrect syntax of the Uploaded File.');
      window.location.reload(false);
    }

    if (isCodePresent === true && isIDPresent === true) {
      for (var i = 0; i < length; i++) {
        code = data[i].Code
        if (code.toString().length < 7) {
          switch (code.toString().length) {
            case 0:
              break;
            case 1: code = "000000" + code;
              break;
            case 2: code = "00000" + code;
              break;
            case 3: code = "0000" + code;
              break;
            case 4: code = "000" + code;
              break;
            case 5: code = "00" + code;
              break;
            case 6: code = "0" + code;
              break;
          }
        }
        console.log(code);
        scode = code.toString().substring(0, 4);
        fcode = code.toString().substring(4, 8);
        fullCode.push(({ "ID": data[i].ID, "Scode": scode, "Fcode": fcode }))
        // console.log(fullCode)
      }
    }
    else if (isIDPresent === true && isCodePresent === false) {
      window.alert('Upload Failed.\nThis is due to\n1) Incorrect Syntax of Uploaded File \n2)Empty File Uploaded');
      window.location.reload(false);
    }
    if (isIDPresent === true && isCodePresent === true) {
      const requestOptions = {
        body: fullCode,
        length: length
      };
      console.log(requestOptions.body)
      axios.post(`/names/fileget/filecodes`, requestOptions)
        .then(res => {
          //  console.log("sname here");
          if (res.data === '') {
            window.alert("Invalid Code Uploded Operation Failed");
            window.location.reload(false);
          }
          console.log("DATA RECEIVED FROM SERVER");
          console.log(res.data);
          res.data.sort((a, b) => a.ID - b.ID);
          this.setState({
            finalSet: res.data
          });
          console.log(this.state);
        })
        .catch(() => window.alert('Internal Server Error. Please try again Later'));
    }
  }
  displayNames() {
    return this.state.finalSet.map(function (currentTodo, i) {

      return <Todo todo={currentTodo} key={i} />;
    })
  }

  render() {
    return (
      <div className="form">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div className="b">
                Format of the Excel File(most common) to be uploaded:  <br /><br /><img src={instructs} className="center" alt="Soundex Project" /> <br /><br />
                <div className="c">
                  The supported file formats:
                  <div className="textbox"> 
                  <br /> .xlsx, .xlsb, .xlsm, .xls, .xml, .csv, .txt<br />  <br /><br />
                  </div>
                  <br />- The file must contain 2 columns: "ID" and "Code".<br /> - ID is just a serial Number. <br />
                  - Ideally, the code must be a 7 digit integer, but the excel files eliminate the leading zeros.<br /> - For Example if the correct structure of Soundex code is 0001023, but excel saves it as 1023 which is not correct.
                  <br />- The system is designed to acknowledge this problem and convert the code from "1023" to "0001023"<br />When you click "Find Names", the system fetches the names corresponding to the code in the file<br /><br />
                </div>
              </div>
              <div class="form-group files">
                <div className="smalltitle"> Welcome to File Handler Name Finder Component</div>
                <label htmlFor="file"><div className="smalltitle3">Upload Your File</div> </label>
                <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
              </div>
              <br />
              <thead>
                <tr>
                  <th></th>
                  <th>  <Link
                    type="submit"
                    onClick={this.handleFile}
                    activeClass="active"
                    to="data"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}><button class="button button-primary"> Find Names</button></Link></th>
                </tr>
              </thead>
              <br/>
            </div>
            <div class="col-md-8">
              <div id="data">
                <p>The table below displays the Surname and Firstnames corresponding to the 7 Digit Soundex Code in the uploaded files.</p>
                <table className="table table-striped" style={{ marginTop: 30 }} >
                  <thead>
                    <tr>
                      <th>SNo.</th>
                      <th>Surname Code</th>
                      <th>Surname</th>
                      <th>Firstname Code</th>
                      <th>Firstname</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.displayNames()}
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default FileNameFinder;
