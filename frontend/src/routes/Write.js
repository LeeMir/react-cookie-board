import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "../css/Write.scss";

class Write extends Component {
    state = {
        title: '',
        author: '',
        content: ''
    };

    postWrite = () => {
        try{
            // trim, required
            if(this.state.title!==''&&this.state.author!==''&&this.state.content!=='') {
                fetch('http://localhost:3001/api/write', {
                    method: 'post',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(this.state)
                })
                    .then( (reponse) => {
                        alert('작성 완료');
                        this.props.history.replace('/');
                    }
                );
            }
            else{
                alert('모든 칸을 작성해야합니다!');
            }
        } catch(e) {
            console.log(e);
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return(
            <div className="root">
                <h2>Write</h2>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <TextField 
                            className="textField"
                            id="title"
                            name="title"
                            label="Title"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            className="textField"
                            id="author"
                            name="author"
                            label="Author"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            className="textField"
                            id="content"
                            name="content"
                            label="Content"
                            multiline
                            rows={15}
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Link href="/">
                            <Button variant="outlined">
                                목록
                            </Button>
                        </Link>
                        <Button
                            variant="outlined"
                            onClick={this.postWrite}
                        >
                            전송하기
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Write;
