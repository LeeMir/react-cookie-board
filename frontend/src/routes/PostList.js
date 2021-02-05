import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import boards from '../board'
import Read from './Read';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../css/List.scss";

class PostList extends Component {
    render() {
        return (
            <List className="root">
                <h2>List </h2>
                { boards.map(item => {
                    return (
                        <>
                            <Link to={`/read/${item.id}`}>
                                <ListItem
                                    alignItems= "flex-start"
                                    key = { item.id }
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
                        </>
                    );
                })}
                <Button>
                    {/* <button onClick={handleClick}>get Request</button> */ }
                    <Link to = {`/write`}> 글쓰기 </Link>
                </Button>
            </List>
        );
    }
}
export default PostList;