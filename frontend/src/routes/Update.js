import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "../css/Write.scss";

function Update(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const id = props.match.params.postid;
    const postUpdate = () => {
        try{
            if(title!==''&&author!==''&&content!=='') {
                let postInfo = {
                    id: id,
                    title: title,
                    author: author,
                    content: content
                } // const reponse = await fetch();
                fetch('http://localhost:3001/api/update', {
                    method: 'post',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(postInfo)
                })
                    .then( (reponse) => {
                        alert('수정 완료');
                        props.history.replace(`/read/${id}`);
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

    useEffect( () => {
        try {
            const idinfo = {
                id: id
            };
            fetch('http://localhost:3001/api/read', {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(idinfo)
            })
                .then(res=>res.json())
                .then(data=>{
                    setTitle(data.title);
                    setAuthor(data.author);
                    setContent(data.content);
                }
            );
        } catch(e) {
            console.log(e);
        }
    }, [id]);

    const TitleOnchange = (e) => {
        setTitle(e.currentTarget.value)
    }
    const AuthorOnchange = (e) => {
        setAuthor(e.currentTarget.value)
    }
    const ContentOnchange = (e) => {
        setContent(e.currentTarget.value)
    }

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
                        value={title}
                        onChange={TitleOnchange}
                    />
                </Grid>
                <Grid item xs={10}>
                    <TextField 
                        className="textField"
                        id="author"
                        name="author"
                        label="Author"
                        variant="outlined"
                        value={author}
                        onChange={AuthorOnchange}
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
                        value={content}
                        onChange={ContentOnchange}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Link href={`/read/${id}`}>
                        <Button variant="outlined">
                            수정취소
                        </Button>
                    </Link>
                    <Button
                        variant="outlined"
                        onClick={postUpdate}
                    >
                        전송하기
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default Update;