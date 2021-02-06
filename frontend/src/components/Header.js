import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import "../css/Header.scss";

class Header extends Component {
    render() {
        return (
            <Grid className="header">
                <Grid className="h-title">
                    <h1>Board</h1>
                </Grid>
                <Grid className="nav">
                    <Link to="/">
                        <Button
                            variant="outlined"
                        >
                            글목록
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

export default Header;