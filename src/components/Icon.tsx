export const Icon = () => {
    return (
        <div style={style.wrapper}>
            <div style={style.col}></div>
            <p style={style.textTop}>Исторические</p>
            <p style={style.textBottom}>даты</p>
        </div>
    )
}

const style = {
    wrapper: {
        position: "absolute",
        top: "0px",
        left: "0px",
        display: "flex",
        flexWrap: "wrap",
    },
    col: {
        width: "5px",
        height: "120px",
        // background: "rgb(56,119,238)",
        background: "linear-gradient(0deg, rgba(56,119,238,1) 0%, rgba(239,93,168,1) 100%)"
    },
    textTop: {
        color: "#42567A",
        fontSize: "56px",
        width: "350px",
        margin: "0",
        lineHeight: "60px",
        position: "relative",
        top: "-41px",
        right: "-75px",
    },
    textBottom: {
        color: "#42567A",
        fontSize: "56px",
        width: "100%",
        margin: "0",
        lineHeight: "60px",
        position: "relative",
        top: "-56px",
        right: "-84px",
    }
}