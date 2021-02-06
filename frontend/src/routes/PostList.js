import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../css/List.scss";

class PostList extends Component {
    state = {
        boards: []
    };
    componentDidMount() {
        fetch('http://localhost:3001/api/list')
            .then(res=>res.json())
            .then(data=>{
                this.setState({boards:data});
            }
        );
    };
    render() {
        const { boards } = this.state;
        return (
            <List className="root bg">
                <h2>List </h2>
                { boards.map(item => {
                    return (
                        <div key={item.id}>
                            <Link to={`/read/${item.id}`}>
                                <ListItem
                                    className="post"
                                    alignItems= "flex-start"
                                >
                                    <ListItemText
                                        primary={item.title}
                                        secondary = {
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant = "body2"
                                                className = "inline"
                                                color = "textPrimary"
                                            >
                                                {item.author}
                                                <br></br>
                                            </Typography>
                                                {item.content}
                                        </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </Link>
                            <Divider variant = "inset" component = "li"/>
                        </div>
                    );
                })}
                <Link to = {`/write`}>
                    <Button variant="outlined">
                        글쓰기
                    </Button>
                </Link>
            </List>
        );
    }
}
export default PostList;