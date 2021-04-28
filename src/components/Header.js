import {makeStyles} from "@material-ui/core";
import newTheme from "../styles/NewTheme"

const useStyles=makeStyles((theme)=>({
    root:{

    }
}))

export default function Header({title, dark, id}) {
    const classes=useStyles()
    return(
        <div className={classes.root}>

        </div>
    )
}