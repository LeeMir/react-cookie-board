import React, { Component } from 'react';
import boards from '../board'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import "../css/Read.scss";

class Read extends Component {
    render() {
        const id = this.props.match.params.postid;
        console.log(id);
        return(
            <div className="root">
                <h2>{boards[id].title}</h2>
                <p>{boards[id].content}</p>
                <Button variant="outlined">
                    <Link href="/">목록</Link>
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        alert('삭제');
                    }}
                >
                    삭제
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        alert('수정');
                    }}
                >
                    수정
                </Button>
            </div>
        );
    }
}

export default Read;
