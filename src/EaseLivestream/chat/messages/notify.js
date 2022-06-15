import React, { useContext,memo } from 'react'
import { makeStyles } from "@material-ui/styles";
import i18next from "i18next";
import { EaseLivestreamContext } from "../index";

import avatar from "../../../common/images/defaultAvatar.png";
import joinIcon from '../../../common/images/join.png'
const useStyles = makeStyles((theme) => ({
    pulldownListItem: {
        padding: '10px 0',
        listStyle: 'none',
        marginBottom: '26px',
        position: 'relative',
        display:"flex",
        alignItems: 'center'
    },
    userBox: {
        width: '100%',
        textAlign: 'center',
        fontSize: '12px',
        color: '#999',
        fontWeight: '600',
        lineHeight: '20px',
        display:"flex",
        alignItems:"center"
    },
    avatarStyle: {
        height: "28px",
        width: "28px",
        borderRadius: "50%",
    },
    userName: {
        padding: "0 10px 4px",
        color: "#a5a5a5",
        fontSize: "14px",
        display: "inline-block",
        textAlign: "left",
    },
    joinTextStyle: {
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: "600",
        lineLeight: "16px",
        letterSpacing: "0.15px",
        textAlign: "left",
        color: "#FFFFFF",
        margin: "0 4px",
        display: "flex",
        alignItems: "center"
    },
    joinIconStyle: {
        marginLeft: "4px"
    }
}))

function Notify({ message }) {
    const classes = useStyles();
    let easeLivestreamProps = useContext(EaseLivestreamContext);
    const { roomUserInfo } = easeLivestreamProps;
    return (
        <li className={classes.pulldownListItem}>
            <div>
                <img className={classes.avatarStyle} src={roomUserInfo && roomUserInfo[message.from]?.avatar || avatar}></img>
            </div>
            <div className={classes.userBox}>
                <span className={classes.userName}>{roomUserInfo[message.from]?.nickname || message.from}</span>
                <span className={classes.joinTextStyle}>
                    {i18next.t(`Joined`)}
                    <img src={joinIcon} alt="" className={classes.joinIconStyle} />
                </span>
            </div>
        </li>
    )
}

export default memo(Notify)